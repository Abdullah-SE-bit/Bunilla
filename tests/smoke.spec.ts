import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

for (const [width, height] of [[360, 800], [375, 812], [390, 844], [768, 1024], [1024, 768], [1440, 900]]) {
  test(`homepage, images, links and overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText("Good things");
    await expect(page.locator(".hero .status")).toBeVisible();
    await expect(page.locator(".hero-body")).toContainText("wood-fire pizza");
    for (const image of await page.locator("main img, footer img, header img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const links = await page.locator("a").evaluateAll(elements => elements.map(element => element.getAttribute("href")));
    expect(links).not.toContain("#");
    expect(links).not.toContain("#!next");
    expect(links).toContain("mailto:info@bunilla.shop");
    expect(links).toContain("https://www.instagram.com/bunilla.isb/");
    const missingAnchors = await page.locator("a[href*='#']").evaluateAll(elements => elements.map(element => element.getAttribute("href")?.split("#")[1]).filter(id => id && !document.getElementById(id)));
    expect(missingAnchors).toEqual([]);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.locator(".hero h1")).toBeInViewport();
    await mkdir("docs/screenshots", { recursive: true });
    await page.screenshot({ path: `docs/screenshots/hero-${width}.png`, animations: "disabled" });
    await page.screenshot({ path: `docs/screenshots/home-${width}.png`, fullPage: true, animations: "disabled" });
  });
}

test("mobile drawer traps focus, closes with Escape and follows anchors", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const opener = page.getByRole("button", { name: "Open menu" });
  await opener.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(opener).toHaveAttribute("aria-expanded", "true");
  await page.screenshot({ path: "docs/screenshots/menu-375.png", animations: "disabled" });
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => !!document.activeElement?.closest("dialog"))).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await page.getByRole("dialog").getByRole("link", { name: "Our Story" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page).toHaveURL(/#story/);
  await expect(page.locator("#story h2")).toBeInViewport();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await opener.click();
  await page.getByRole("dialog").getByRole("link", { name: "Bunilla home" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page).toHaveURL(/#home/);
});

test("privacy, legal notice, real 404, metadata and preview policy", async ({ page, request }) => {
  for (const [route, heading] of [["/privacy", "Privacy information"], ["/legal-notice", "Legal notice"]]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `http://localhost:3000${route}`);
  }
  const missing = await page.goto("/subpage");
  expect(missing?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("still brewing");
  await page.getByRole("link", { name: "Back to Bunilla", exact: true }).click();
  await expect(page.locator(".hero h1")).toBeVisible();
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).not.toContain("<loc>");
  for (const asset of ["/icon.png", "/apple-icon.png", "/opengraph-image.png"]) expect((await request.get(asset)).status()).toBe(200);
});

test("reduced motion and no JavaScript preserve content and navigation", async ({ browser }) => {
  for (const javaScriptEnabled of [true, false]) {
    const context = await browser.newContext({ javaScriptEnabled, reducedMotion: "reduce", viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator(".hero .button")).toBeVisible();
    expect(await page.locator("h1").evaluate(element => getComputedStyle(element).opacity)).toBe("1");
    if (!javaScriptEnabled) await expect(page.locator(".nojs-nav")).toBeVisible();
    await page.locator(".hero .button").click();
    await expect(page).toHaveURL(/#experience/);
    await context.close();
  }
});

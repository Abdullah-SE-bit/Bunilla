import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const titles = ["Head Chefs", "Kitchen Helpers", "Female Cashiers", "Sales Girls", "Cleaners / Housekeeping"];
const messages = [
  "Hi Bunilla, I'm interested in the Head Chef position for English Breakfast and Continental. Could you please share the application details?",
  "Hi Bunilla, I'm interested in the Kitchen Helper position. Could you please tell me how to apply?",
  "Hi Bunilla, I'm interested in the Female Cashier position. Could you please tell me how to apply?",
  "Hi Bunilla, I'm interested in the Sales Girl position. Could you please tell me how to apply?",
  "Hi Bunilla, I'm interested in the Cleaners / Housekeeping position. Could you please tell me how to apply?",
];

test("each WhatsApp application opens its own correctly addressed chat link", async ({ page, context }) => {
  // Intercept outbound navigation: verify the popup URL without sending a message.
  await context.route("https://wa.me/**", route => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>WhatsApp link test</title><p>Navigation intercepted for QA.</p>" }));
  await page.goto("/careers");
  for (let index = 0; index < titles.length; index++) {
    const popupPromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: `Apply on WhatsApp for ${titles[index]}`, exact: true }).click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    const chat = new URL(popup.url());
    expect(chat.origin).toBe("https://wa.me");
    expect(chat.pathname).toBe("/923099086081");
    expect(chat.searchParams.get("text")).toBe(messages[index]);
    await popup.close();
  }
});

for (const [width, height] of [[360,800], [375,812], [390,844], [768,1024], [1024,768], [1440,900]]) {
  test(`careers roles, links, layout and images at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    expect((await page.goto("/careers"))?.status()).toBe(200);
    await expect(page).toHaveTitle("Careers at Bunilla");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText("Come work at Bunilla.");
    await expect(page.locator("[data-job-card]")).toHaveCount(5);
    const urls: string[] = [];
    for (let index = 0; index < titles.length; index++) {
      const job = page.getByRole("article", { name: titles[index], exact: true });
      await job.scrollIntoViewIfNeeded();
      await expect(job.getByRole("heading", { name: titles[index], exact: true })).toBeVisible();
      await expect(job.getByText("I-8, Islamabad", { exact: true })).toBeVisible();
      await expect(job.getByText(index < 2 ? "Kitchen team" : "Women’s hiring", { exact: true })).toBeVisible();
      const link = job.getByRole("link", { name: `Apply on WhatsApp for ${titles[index]}`, exact: true });
      const href = await link.getAttribute("href");
      expect(href).toBe(`https://wa.me/923099086081?text=${encodeURIComponent(messages[index])}`);
      const url = new URL(href!);
      expect(url.searchParams.get("text")).toBe(messages[index]);
      urls.push(href!);
      await expect(link).toHaveAttribute("target", "_blank");
      await link.focus(); await expect(link).toBeFocused();
      const rect = await job.boundingBox();
      expect(rect!.x).toBeGreaterThanOrEqual(0);
      expect(rect!.x + rect!.width).toBeLessThanOrEqual(width);
    }
    expect(new Set(urls).size).toBe(5);
    await expect(page.getByText("English Breakfast & Continental", { exact: true })).toBeVisible();
    await expect(page.getByText("03099086081", { exact: true })).toBeVisible();
    for (const image of await page.locator("main img, footer img, header img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("link", { name: "See open positions", exact: true }).click();
    await expect(page).toHaveURL(/#open-positions$/);
    await expect(page.locator("#openings-title")).toBeInViewport();
    expect(errors).toEqual([]);
    await page.evaluate(() => scrollTo(0, 0));
    await mkdir("docs/screenshots", { recursive: true });
    await page.screenshot({ path: `docs/screenshots/careers-hero-${width}.png`, animations: "disabled" });
    await page.screenshot({ path: `docs/screenshots/careers-${width}.png`, fullPage: true, animations: "disabled" });
  });
}

test("homepage CTA and desktop/mobile/footer careers navigation", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name: "Careers" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Footer navigation" }).getByRole("link", { name: "Careers" })).toHaveAttribute("href", "/careers");
  await page.getByRole("link", { name: "View open positions", exact: true }).click();
  await expect(page).toHaveURL(/\/careers$/);
  await expect(page.locator("h1")).toContainText("Come work");
  await page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name: "About Bunilla" }).click();
  await expect(page).toHaveURL(/\/#story$/);
  await expect(page.locator("#story h2")).toBeInViewport();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "Careers", exact: true }).click();
  await expect(page).toHaveURL(/\/careers$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("careers works without JavaScript and honors reduced motion", async ({ browser }) => {
  for (const javaScriptEnabled of [false, true]) {
    const context = await browser.newContext({ javaScriptEnabled, reducedMotion: "reduce", viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    await page.goto("/careers");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("[data-job-card]")).toHaveCount(5);
    if (!javaScriptEnabled) await expect(page.locator(".nojs-nav").getByRole("link", { name: "Careers" })).toBeVisible();
    await page.getByRole("link", { name: "See open positions" }).click();
    await expect(page).toHaveURL(/#open-positions$/);
    const states = await page.locator("[data-job-card]").evaluateAll(elements => elements.map(element => ({ opacity: getComputedStyle(element).opacity, transform: getComputedStyle(element).transform })));
    expect(states.every(state => state.opacity === "1" && state.transform === "none")).toBe(true);
    await context.close();
  }
});

test("reviewed copy and page-specific metadata contain no long dashes", async ({ page }) => {
  for (const [route, title] of [["/", "Bunilla | Coffee, Fresh Bakes and Wood-Fire Pizza"], ["/careers", "Careers at Bunilla"], ["/privacy", "Privacy information | Bunilla"], ["/legal-notice", "Legal notice | Bunilla"], ["/unknown-page", "Page not found | Bunilla"]]) {
    await page.goto(route);
    await expect(page).toHaveTitle(title);
    const copy = await page.evaluate(() => [document.body.innerText, document.title, ...Array.from(document.querySelectorAll("[alt], [aria-label], [title], meta[name='description'], meta[property^='og:'], meta[name^='twitter:']")).flatMap(element => [element.getAttribute("alt"), element.getAttribute("aria-label"), element.getAttribute("title"), element.getAttribute("content")])].filter(Boolean).join("\n"));
    expect(copy).not.toMatch(/[\u2013\u2014]/);
    expect(copy).not.toMatch(/culinary journey|passion meets|elevate your|symphony of|little ritual|neighborhood moment/i);
    if (route !== "/unknown-page") {
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", title);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    }
  }
});

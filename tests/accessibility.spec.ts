import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { writeFile } from "node:fs/promises";

test("WCAG AA scans on homepage, mobile drawer, privacy, legal and 404", async ({ page }) => {
  test.setTimeout(90000);
  const report: { route: string; width: number; violations: unknown[] }[] = [];
  for (const [route, width] of [["/", 1440], ["/", 375], ["/careers", 1440], ["/careers", 375], ["/privacy", 375], ["/legal-notice", 375], ["/missing-page", 375]] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    report.push({ route, width, violations: results.violations });
    expect(results.violations).toEqual([]);
    await page.screenshot({ path: `docs/screenshots/${route === "/" ? "home" : route.slice(1)}-viewport-${width}.png`, animations: "disabled" });
  }
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const drawer = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  report.push({ route: "mobile-menu", width: 375, violations: drawer.violations });
  await writeFile("docs/accessibility-results.json", JSON.stringify(report, null, 2));
  expect(drawer.violations).toEqual([]);
});

test("desktop navigation offsets and keyboard skip link", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  for (const [name, target] of [["The café", "experience"], ["What’s coming", "offerings"], ["About Bunilla", "story"], ["Find us", "find-us"]]) {
    await page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${target}$`));
    const y = await page.locator(`#${target}`).evaluate(element => element.getBoundingClientRect().top);
    expect(y).toBeGreaterThanOrEqual(98);
  }
});

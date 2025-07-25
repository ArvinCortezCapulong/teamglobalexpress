import { Page, expect } from '@playwright/test'

// Reusable function to validate a footer section
export async function validateFooterSectionWithParent(page, sectionName: string) {
  const section = page.locator('.c-footer__menu', { hasText: sectionName });

  if (await section.count() === 0) {
    throw new Error(`"${sectionName}" footer section not found`);
  }

  console.log(`--- Validating section: ${sectionName} ---`);

  // ✅ Validate parent link (first <a> in the section)
  const parentLink = section.locator('a.c-footer__parent');
  expect(await parentLink.count()).toBe(1);
  const parentText = (await parentLink.innerText()).trim();
  const parentHref = await parentLink.getAttribute('href');
  console.log(`(Parent) ${parentText} → ${parentHref}`);
  expect(parentText.length).toBeGreaterThan(0);
  expect(parentHref).not.toBeNull();

  // ✅ Validate child links
  const childLinks = section.locator('a.c-footer__children');
  const linkCount = await childLinks.count();
  expect(linkCount).toBeGreaterThan(0);

  for (let i = 0; i < linkCount; i++) {
    const link = childLinks.nth(i);
    const text = (await link.innerText()).trim();
    const href = await link.getAttribute('href');
    console.log(`• ${text} → ${href}`);
    expect(text.length).toBeGreaterThan(0);
    expect(href).not.toBeNull();
  }
}

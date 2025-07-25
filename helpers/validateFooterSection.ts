import { Page, expect } from '@playwright/test'

// Reusable function to validate a footer section
export async function validateFooterSection(page, sectionName: string) {
  const section = page.locator('.c-footer__menu', { hasText: sectionName });

  if (await section.count() === 0) {
    throw new Error(`"${sectionName}" footer section not found`);
  }

  const childLinks = section.locator('a.c-footer__children');
  const linkCount = await childLinks.count();
  expect(linkCount).toBeGreaterThan(0);

  console.log(`--- Validating section: ${sectionName} ---`);
  for (let i = 0; i < linkCount; i++) {
    const link = childLinks.nth(i);
    const text = (await link.innerText()).trim();
    const href = await link.getAttribute('href');

    console.log(`• ${text} → ${href}`);
    expect(text.length).toBeGreaterThan(0);
    expect(href).not.toBeNull();
  }
}


import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html'], // Optional: built-in HTML report
    ['allure-playwright'] // Correct name for Allure plugin
  ],
  use: {
    trace: 'on-first-retry', // optional but useful for debugging
  },
});

 Generate & View the Allure Report
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report

To add it to .gitignore
allure-report/
# Allure
allure-results/

# Install the Allure Playwright Reporter
npm install -D allure-playwright

# Usage:
npx playwright test --reporter=line,allure-playwright

# Generate the report:
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
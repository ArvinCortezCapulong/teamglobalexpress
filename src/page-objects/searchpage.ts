import { Page, Locator, expect } from '@playwright/test'

export default class SearchPage {
    page: Page
    searchEntryField: Locator

    constructor ( page: Page ) {
        this.page = page
        // this.searchEntryField = page.getByRole('textbox', { name: 'Search' })
        this.searchEntryField = page.locator('input[data-qa-id="searchInput"]');

    }

    async checkSearchEntryFieldAvailability() {
        await this.searchEntryField.isVisible()
        // await expect(this.searchEntryField).toHaveAttribute('titel', 'Search')
        await expect(this.searchEntryField).toHaveAttribute('aria-label', 'Search')
    }

    async fillSearchInput(text: string) { // Added
        await this.searchEntryField.fill(text);
    }

    async getSearchInputValue(): Promise<string> { // Added
        return await this.searchEntryField.inputValue();
    }
}
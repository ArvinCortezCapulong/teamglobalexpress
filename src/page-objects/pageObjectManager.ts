import { test as base } from "@playwright/test";
import Homepage from "./homepage";

type pageObjects = {
    homePage: Homepage
}

export const test = base.extend<pageObjects>({
    homePage: async({page}, use)=> {
        const homePage = new Homepage (page)
        use(homePage)
    }
})

export const expect = test.expect
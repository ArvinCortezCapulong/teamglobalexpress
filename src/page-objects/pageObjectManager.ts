import { test as base } from "@playwright/test";
import Homepage from "./homepage";
import BusinessSolutions from "./businesssolutionspage";
import SearchPage from "./searchpage";

type pageObjects = {
    homePage: Homepage
    businessSol: BusinessSolutions
    searchPage: SearchPage
}

export const test = base.extend<pageObjects>({
    homePage: async({page}, use )=> {
        const homePage = new Homepage (page)
        use(homePage)
   },

    businessSol: async({page}, use) => {
    const businessSol = new BusinessSolutions (page)
    use(businessSol)
    },

    searchPage: async({page}, use) => {
        const searchPage = new SearchPage (page)
        use(searchPage)
    }
})
export const expect = test.expect


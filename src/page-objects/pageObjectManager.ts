import { test as base } from "@playwright/test";
import Homepage from "./homepage";
import BusinessSolutions from "./businesssolutionspage";

type pageObjects = {
    homePage: Homepage
    businessSol: BusinessSolutions
}

export const test = base.extend<pageObjects>({
    homePage: async({page}, use )=> {
        const homePage = new Homepage (page)
        use(homePage)
   },

    businessSol: async({page}, use) => {
    const businessSol = new BusinessSolutions (page)
    use(businessSol)
    }
})
export const expect = test.expect


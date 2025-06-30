

   // Asserting Close Machine Machinery slide out and clicking Type setting
    // const isFilterSlideOutVisible = await page.getByText('Close Machine Machinery').isVisible()
    // if (isFilterSlideOutVisible) {
    //   await expect(page.getByText('Close')).toBeVisible()
    //   await expect(page.getByText('Machine', { exact: true })).toBeVisible()
    //   await expect(page.getByText('Type')).toBeVisible()
    //   await expect(page.getByText('Brands', { exact: true })).toBeVisible()
    //   await expect(page.getByText('Location', { exact: true })).toBeVisible()
    //   await expect(page.getByText('Apply')).toBeVisible()
    //   await expect(page.getByText('Clear')).toBeVisible()
    //   await page.waitForTimeout(1000)
    // } else {
    //   console.warn('Filter button Slide out is not visible')
    //   throw Error('Filter Slide out did not show as expected')
    // }


    // this is the FOR LOOP IDEA
         // checking New and Used MACHINES Tractors ALL  results
    // const isAllMachinestractorsAllVisible = await page.locator('.container-fluid > div:nth-child(2)').isVisible()
    // if (isAllMachinestractorsAllVisible) {
    //     const headings = page.locator('h5.heading');
    //     const count = await headings.count();

    //       for (let i = 0; i < count; i++) {
    //         const headingText = await headings.nth(i).innerText();
    //         expect(headingText).toContain('Tractor');
    //         // Negative assertions
    //         expect(headingText).not.toContain('Hay & Silage');
    //         expect(headingText).not.toContain('Other');
    //       }
    //   }


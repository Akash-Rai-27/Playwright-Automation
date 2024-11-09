import {test,expect} from '@playwright/test';

test("CheckBox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")

    //single checkbox

    await page.locator("//input[@id='tuesday' and @type='checkbox']").check();

    await expect.soft(await page.locator("//input[@id='tuesday' and @type='checkbox']")).toBeChecked();

    await expect.soft(await page.locator("//input[@id='tuesday' and @type='checkbox']").isChecked()).toBeTruthy();


    await expect.soft(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();



    // multiple checkbox

    const checkboxes = [
            "//input[@id='monday' and @type='checkbox']",
            "//input[@id='saturday' and @type='checkbox']",
            "//input[@id='wednesday' and @type='checkbox']"
    ]


    for(const locators of checkboxes){
        await page.locator(locators).check();
    }


    for(const locators of checkboxes){
        if( await page.locator(locators).isChecked()){

            await page.locator(locators).uncheck();
        }
    }


    await page.waitForTimeout(2000);

})
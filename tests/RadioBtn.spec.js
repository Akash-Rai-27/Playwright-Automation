import {test,expect} from '@playwright/test'

test("Radio Btn",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")

    // radio button

    await page.locator("//input[@id='male']").check();

    await expect.soft( await page.locator("//input[@id='male']")).toBeChecked();

    await expect.soft( await page.locator("//input[@id='male']").isChecked()).toBeTruthy;

   await expect( await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    // await page.check("//input[@id='male']");

    await page.waitForTimeout(2000);
})
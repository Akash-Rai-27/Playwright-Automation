import {test,expect} from '@playwright/test'

test('InputBox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

    // Input box 

    await expect.soft(await page.locator("//input[@id='name']")).toBeVisible();

    await expect.soft(await page.locator("//input[@id='name']")).toBeEmpty();

    await expect.soft(await page.locator("//input[@id='name']")).toBeEditable();

    await expect.soft(await page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("Deno")
    // await page.fill("//input[@id='name']","Deno");

    await page.waitForTimeout(2000); // pausing


})
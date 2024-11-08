import {test, expect} from '@playwright/test'

test('Locator 2',async ({page})=>{

    await page.goto('https://www.saucedemo.com/v1/index.html');

    // username
    await page.fill("//input[@id='user-name']",'standard_user');
   //password
    await page.fill("//input[@id='password']",'secret_sauce');
    //click login btn
    await page.click("//input[@id='login-button']");
    // open menu btn
    await page.click("//button[normalize-space()='Open Menu']");
    const logoutlink = await page.locator("//a[@id='logout_sidebar_link']");

    await expect(logoutlink).toBeVisible();

    await page.click("//a[@id='logout_sidebar_link']");
    await page.close();
    
})
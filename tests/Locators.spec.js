import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //click on login button - property
    //await page.locator("id=login2").click();
    await page.click("id=login2");

    // provide username -CSS
    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername',"Deno");
    // await page.type('#loginusername','pavanol');

    // provide password
    // await page.locator("#loginpassword").fill("password");

    await page.fill("input[id='loginpassword']",'deno123');


    // Xpath
    //click on login btn
    // await page.click("//button[normalize-space()='Log in']");
    await page.click("#logInModal > div > div > div.modal-footer > button.btn.btn-primary");

    const logoutlink = await page.locator("//a[@id='logout2']");

    await expect(logoutlink).toBeVisible();

    await page.close();


})
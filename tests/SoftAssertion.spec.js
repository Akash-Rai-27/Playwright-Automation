import {test,expect} from '@playwright/test'

test('Soft Assertion',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    // hard assertion
    
    await expect.soft(page).toHaveTitle('STORE22');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})
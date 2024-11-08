import {test,expect} from '@playwright/test';

test('Assertion',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('.header-logo');
    await expect (logoElement).toBeVisible();

    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsletterBox = await page.locator('#Newsletter');
    await expect(newsletterBox).toBeChecked();

    const regBtn = page.locator('#register-button');
    await expect(regBtn).toHaveAttribute('type','submit')

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    const emailInput = await page.locator('#Email');
    emailInput.fill('test@demo.com');

    await expect(emailInput).toHaveValue('test@demo.com');

    const length = await page.locator("select[name='DateOfBirthDay'] option");

    await expect(length).toHaveCount(32);





})
import {test,expect} from "@playwright/test"

test("Multi Select Dropdown",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");


    // select multiple optiom from multi select dropdown

    // await page.selectOption("#colors",['Blue','Red','Yellow'])

    // const options = await page.locator("#colors option")

    // await expect (options).toHaveCount(7);

    // const options = await page.$$("#colors option");

    // console.log("Number of Options: ", options.length)

    // await expect ( options.length).toBe(7)

    // check presence of value in the dropdown

    const content = await page.locator("#colors").textContent();
    await expect(content.includes('Blue')).toBeTruthy();



    await page.waitForTimeout(2000);


})
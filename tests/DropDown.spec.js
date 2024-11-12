import {test, expect} from '@playwright/test'

test('Dropdown',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");

    // await page.locator("#country").selectOption({label:"India"}); // label .visible test

    // await page.locator("#country").selectOption("India"); //visible text

    // await page.locator("#country").selectOption({value:"uk"}); //using value attri

    // await page.locator("#country").selectOption({index:1}); // by using index

    // await page.selectOption("#country","India") // by test

    // assertion 
    // 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    // 2
//    const options = await page.$$('#country option');
//    console.log("Number of options: ",options.length)

    // await expect(options.length).toBe(10);


//    const content =  await page.locator("#country").textContent();
   //textContent return string
//    await expect.soft(content.includes('xyn')).toBeTruthy();
//    await expect.soft(content.includes('India')).toBeTruthy();


    const options = await page.$$("#country option");
    let status = false;

    for(const option of options){
        // console.log( await option.textContent())
        const val =  await option.textContent();
        if(val.includes('France')){
            status = true;
            break;
        }

    }

    await expect(status).toBeTruthy();






    await page.waitForTimeout(2000);

})
import {test,expect} from "@playwright/test"

test("Auto Suggest DropDown", async ({page})=>{
    await page.goto("https://www.redbus.in/");

    await page.locator("#src").fill("Delhi");

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")

    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")


    for(let eachOption of fromCityOptions){
        const value = await eachOption.textContent();
        // console.log(value);
        if(value.includes('GT Karnal Road')){
            await eachOption.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})
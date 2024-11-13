import {test,expect} from "@playwright/test"

test("Multi Select Dropdown",async ({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator(".multiselect").click(); //clcik on the dropdowm menu


    // 1
    // const options = await page.locator("ul>li label input");
    // await expect(options).toHaveCount(11);

    //2
    // const options = await page.$$("ul>li label input");
    // await expect( options.length).toBe(11);

    //3 select multiple option

    const options = await page.$$("ul>li label")
    for( let option of options){
        const value = await option.textContent();
        // console.log("THE VALUE IS :",value);

        if(value.includes("Angular") || value.includes("Java") || value.includes("Oracle")){
            await option.click();
        }
    }

    

    await page.waitForTimeout(2000);


})
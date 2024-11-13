import {test,expect} from "@playwright/test"

test("Hidden DropDown",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for(let option of options){
        const value = await option.textContent();
        console.log("Job title - ",value);
        if(value.includes("Automaton Tester")){
            await option.click();
            break;
        }
    }


    await page.waitForTimeout(2000);

})
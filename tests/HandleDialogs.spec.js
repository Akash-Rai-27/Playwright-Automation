// handling dialogs
// 1. alert()
// 2. confirm()
// 3. prompt()

import {test,expect} from "@playwright/test"


test.skip("Alerts",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling // dialong window handler

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect (dialog.message()).toContain('I am an alert box!');
        await dialog.accept(); //close the dialog

    })

    await page.locator("//button[@id='alertBtn']").click();

    await page.waitForTimeout(3000);

    
})

// confirmation alert



test.skip("Confirmation Alerts with OK and CANCEL",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling // dialong window handler

    // case 
    // 1. what type of window - prompt msg
    // 2. verify the message
    // 3. close the by using OK and CANCEL


    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect (dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using OK btn

        // await dialog.dismiss(); // close by using cancel btn



    })

    await page.locator("//button[@id='confirmBtn']").click();

    await expect( await page.locator("//p[@id='demo']")).toContainText("You pressed OK!")

    await page.waitForTimeout(3000);

    
})


test("Prompt Dialog", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling // dialong window handler

    // case 
    // 1. what type of window - prompt msg
    // 2. verify the message
    // 3. close the by using OK and CANCEL


    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect (dialog.message()).toContain("Please enter your name:");

        expect(dialog.defaultValue()).toContain("Harry Potter"); // defauult value
        
        
        
        // await dialog.accept(); //close by using OK btn
        await dialog.accept("Fisherman"); //passing the value and close the window

        // await dialog.dismiss(); 
        // close by using cancel btn





    })

    await page.locator("//button[@id='promptBtn']").click();

    await expect( await page.locator("//p[@id='demo']")).toContainText("Hello Fisherman! How are you today?")

    await page.waitForTimeout(3000);

    
})
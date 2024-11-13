import {test,expect} from "@playwright/test"

test("Handle Table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    // total no of rows and cols
    const columns = await table.locator("thead tr th");

    console.log("Number of columns:",await columns.count());

    const rows = await table.locator("tbody tr")
    console.log("Number of rows: ", await rows.count())


    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);


    // select checkbox of Smartwatch

//    const matchedRow = rows.filter({
//         has: page.locator("td",{hasText: "Smartwatch"})
//     })

//     await matchedRow.locator("input").check();

    // 3. select multople products by reusable function

    // await selectProduct(rows, page, 'Smartphone')
    // await selectProduct(rows, page, 'Tablet')
    // await selectProduct(rows, page, 'Wireless Earbuds')

    // 4 print all product details using loop

    // for(let i= 0; i< await rows.count();i++){
    //     const currentRow = rows.nth(i);
    //     const tds = currentRow.locator('td')

    //     for(let j =0 ; j<await columns.count()-1; j++){

    //         const value = await tds.nth(j).textContent();
    //         console.log(value + " ")
    //     }
    //     console.log("---")
    // }


    // pagination -- read data from all the pages in the table

    const pages =  await page.locator("#pagination li a");

    const totalPages = await pages.count();
    console.log("Total Pages : ",totalPages)

    for(let p=0;p<totalPages;p++){
        if(p>0){
            await pages.nth(p).click();
        }
        
    for(let i= 0; i< await rows.count();i++){
        const currentRow = rows.nth(i);
        const tds = currentRow.locator('td')

        for(let j =0 ; j<await columns.count()-1; j++){

            const value = await tds.nth(j).textContent();
            console.log(value + " ")
        }
        console.log("---")
    }
}


    await page.waitForTimeout(2000);

})


async function selectProduct(rows, page, name){
    const matchedRow = rows.filter({
        has: page.locator("td",{hasText:name})
    })

    await matchedRow.locator('input').check();
}
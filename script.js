const puppeteer = require('puppeteer');

async function start(){
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
    await page.goto("http://contractorsinsurancereview.com/ExampleForm/")



    await page.type("#name", "yaniv")
    await page.type("#email", "yanivz@gmail.com")
    await page.type("#phone", "0508839521")
    await page.type("#company", "jones")
    await page.select('#employees', '51-500')
    await page.screenshot({path: "screenShoot.png"})

    await Promise.all([
        page.click('button[class="primary button"]'),
        page.waitForNavigation()])

    const info = await page.$eval("body",el=>el.textContent)
    console.log(info)
    await browser.close()

}


start()
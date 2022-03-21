
import { Given, Then, When } from "@wdio/cucumber-framework"; 
import commonpage from "../pageobjects/common.page";
import shopPage from "../pageobjects/shop.page";



Given(/^User is at shop page$/, async() =>{
    commonpage.openShopPage();
    // await expect(shopPage.btnCheckout).toBePresent();
    // await expect(shopPage.btnAdd).toBePresent();
    // ShopPage.navigateToCheckout();

});



When(/^User clicks on add$/, async () => {

    await shopPage.clickAdd();
    console.log("User clicked on add ");

});

Then(/^Checkout count is increments$/ , async() =>{
    
    const text = (await shopPage.btnCheckout.getText());
    let f=0;
    const n=text.length;
    let num;
    for(let i=0;i<n;i++){
        if(f==1){
            if(text[i]===')')
                f=0;
            else num = num + text[i];
        }

        if(text[i]==='(')
            f=1;
    }

    num = parseInt(num);

    // an assert statement to compare numbers with num



});




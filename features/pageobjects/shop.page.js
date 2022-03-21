
class shopPage{

    get btnAdd(){
        return $(".btn.btn-info");
    }

    get btnCheckout(){
        return $(".nav-link.btn.btn-primary");
    }

    async navigateToCheckout(){
        await this.btnAdd.click();
        console.log("Add btn clicked");
    }

    async clickAdd(){
        await this.btnAdd.click();
        console.log("Add clicked");
    }

};


export default new shopPage;
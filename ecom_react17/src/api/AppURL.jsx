class AppURL {
    static BaseURL = "http://localhost:8000/api"
    static VisitorDetails = this.BaseURL + "/getvisitor"
    static PostContact = this.BaseURL + "/postcontact"
    static AllSiteInfo = this.BaseURL + "/allsiteinfo"
    static AllCategoryDetails = this.BaseURL + "/allcategory"
    static AllSlider = this.BaseURL + "/allslider"
    static NotificationHistory = this.BaseURL + "/notification"
    static UserLogin = this.BaseURL + "/login"
    static UserData = this.BaseURL + "/user"
    static UserRegister = this.BaseURL + "/register"
    static UserForgetPassword = this.BaseURL + "/forgetpassword"
    static UserResetPassword = this.BaseURL + "/resetpassword"
    static AddToCart = this.BaseURL + "/addtocart"

    static ProductListByRemark(Remark) {
        return this.BaseURL + "/productlistbyremark/" + Remark;
    }

    static ProductListByCategory(Category) {
        return this.BaseURL + "/productlistbycategory/" + Category;
    }

    static ProductListBySubCategory(Category, SubCategory) {
        return this.BaseURL + "/productlistbysubcategory/" + Category + "/" + SubCategory;
    }

    static ProductDetail(code) {
        return this.BaseURL + "/productdetails/" + code;
    }

    static ProductBySearch(searchkey) {
        return this.BaseURL + "/search/" + searchkey;
    }

    static SimilarProduct(code) {
        return this.BaseURL + "/similar/" + code;
    }

    static ReviewList(code){
        return this.BaseURL+"/reviewlist/"+code;
   }

   static CartCount(product_code){
    return this.BaseURL+"/cartcount/"+product_code;
}
}

export default AppURL
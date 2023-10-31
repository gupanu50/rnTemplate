// =================================== Types define here ===================================

// ************************* ResponseModel *****************************
export interface ResponseModel {
    id?: String;
    name?: String;
    job?: String;
}

// ************************* error *****************************
export interface ERROR{
    msg?:null|String;
}

// ************************* loginBody *****************************
export interface loginBody{
    email?:String;
    password?:String;
}

// ************************* registerBody *****************************
export interface registerBody{
    name:String;
    email:String;
    mobile:String|number;
}

// ************************* asyncData *****************************
export interface data{
    email:String;
    password:String;
}

// ************************* RegisterState *****************************
export interface RegisterState {
    value:any;
}

// ************************* dashboardData *****************************
export interface dashboardData{
    name:String|undefined;
    email:String|undefined;
    mobile:String|undefined;
}

// ************************* Posts *****************************
export interface Posts{
    data?:Array<[]>|any;
    id:String;
    text:String;
    image:String;
}

// ************************* ApiCall *****************************
export interface apiData{
    data: object|any|null;
    isLoading: boolean;
    error: String|null;
}

// ************************* drawerMenu *****************************
export interface drawerMenu{
    name:String;
    image:object|String;
    isActive:boolean;
    screen:String;
    value:String;
}

// ************************* drawerSelect *****************************
export interface drawerSelect{
    name:String;
    screen:String;
    value:String;
}

// ************************* languages *****************************
export interface languages{
    id:Number;
    name:string;
    lg:string;
}
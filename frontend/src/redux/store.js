import { configureStore } from "@reduxjs/toolkit";

import signupReducer from '../redux/auth/signupSlice'
import loginReducer from "../redux/auth/loginSlice";
import logoutReducer from '../redux/auth/logoutSlice'
import viewCompanyReducer from '../redux/company/viewUserCompanySlice'
import createCompanyReducer from '../redux/company/createCompanySlice'
import profileStatisticsReducer from '../redux/company/profileStatisticsSlice'
import getCompanyProductsReducer from '../redux/products/getCompanyProductsSlice'

export const store = configureStore({
    reducer: {
        signup: signupReducer,
        login: loginReducer,
        logout: logoutReducer,
        viewCompany: viewCompanyReducer,
        createCompany: createCompanyReducer,
        profileStatistics: profileStatisticsReducer,
        companyProducts: getCompanyProductsReducer
    }
})
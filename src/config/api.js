import setting from './settings';

export default (() => {
  return {

    // Basic Auth
    'AUTH': setting.api.AUTH,

    // Auth
    login: `${setting.api.url}login`,
    forgotPassword: `${setting.api.url}forgetPassword`,
    resetPassword: `${setting.api.url}resetPassword`,

    
    // partner
    getUserList: `${setting.api.url}getUserList`,
  }
})()
module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    UsernameTxtBx: "#username",
    PasswordTxtBx: "#password",
    LoginBttn: "#Login",
    SettingsBttn: "#oneHeader > div.slds-global-header.slds-grid.slds-grid--align-spread > span > ul > li:nth-child(6)"
  },
 
};

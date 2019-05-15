module.exports = {
  before: browser => {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body');
      
  },
  after: browser =>{
    browser.closeWindow();
    browser.end();
  },
  
  'Energy User Profiles': browser => {
    const pages = browser.page,
      login = pages.login();
      setup = pages.setup();

      var energyUsers = [
        {
          user: 'Energy - Client Solutions QA',
        },
        {
          user: 'Energy Sales Manager QA',
        },
        {
          user: 'Energy - Consultant QA',
        },
        {
          user: 'Energy - Telco - Team Leader QA',
        },
        {
          user: 'Energy Team Leader QA',
        },
        {
          user: 'Energy - Telco - Sales Consultant QA',
        },
        {
          user: 'Energy - Telco - H&C - Team Leader QA',
        },
        {
          user: 'Energy - Telco - H&C-Sales Consultant QA',
        }
      ];
   
    //Login to Salesforce as Admin
    login
    .setValue("@UsernameTxtBx",'kenneth.cabaccang@iselect.com.au.spqa')
    .setValue("@PasswordTxtBx",'Meriales199x')
    .click("@LoginBttn")
    setup
    .waitForElementVisible("@SetUpBttn",30000)
    energyUsers.forEach(function(item) {
    //Navigate to Setup
    setup
    .navigate("https://iselect--spqa.lightning.force.com/lightning/setup/SetupOneHome/home")
    .pause(5000);

    //Login as Energy - Client Solutions Consultant QA
    setup
    .waitForElementVisible("@SearchTxtBx",30000)
    .setValue("@SearchTxtBx",item.user)
    .sendKeys("@SearchTxtBx", browser.Keys.ENTER)
    .waitForElementVisible("@UserClck",30000)
    .click("@UserClck")
    .pause(10000)

    //Switch to Frame to click Login
    browser.elements('css selector', 'iframe', function(elements) {
    elements.value.forEach(function(element){
    browser.elementIdAttribute(element.ELEMENT, 'name', function(attribute) {
    console.log(attribute.value)
    browser
    .frame(attribute.value)
    setup
    .click("@LoginBttn")
    browser
    .refresh()
    .waitForElementVisible("#oneHeader > div.oneSystemMessage > div > a",60000)
    .assert.containsText("#oneHeader > div.oneSystemMessage > div > a","Log out as "+item.user)
    .pause(5000)
    .click("#oneHeader > div.oneSystemMessage > div > a")
    .pause(3000)
    .refresh()
    });
  });
});
});
    
}
   
};

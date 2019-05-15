module.exports = {
    before: browser => {
      browser
        .url(browser.launch_url)
        .deleteCookies()
        .waitForElementVisible('body');
        
    },
    after: browser =>{
      browser.closeWindow();
      browser.end();
    },
    
    'SP - 649 Create Person Account from Lead Conversion': browser => {

      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 8;
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        console.log(randomstring)
      }
      const pages = browser.page,
        login = pages.login();
        leadscreation = pages.leadscreation();
        setup = pages.setup();
        leadsconversion = pages.leadsconversion();

      const LeadsData = {
          CustomerID: "123456789",
          FirstName: "TEST AUTOMATION",
          LastName: randomstring,
          Email:"testmanilaqa@iselect.com.au"
    
       };  
     
  
      //Login to Salesforce as Admin
      login
      .setValue("@UsernameTxtBx",'jessica.antonio@iselect.com.au.bat')
      .setValue("@PasswordTxtBx",'Jcolleen2018')
      .click("@LoginBttn")
  
      // Navigate to Leads tab
      browser
      .refresh()
       leadscreation
       .waitForElementVisible("@AppLauncherNav",50000)
       .click("@AppLauncherNav")
       .waitForElementVisible("@EnergyLightningBttn",50000)
       .click("@EnergyLightningBttn")
       .pause(5000)
       .click("@ShowDrpdwn")
       .waitForElementVisible("@LeadsBttn",50000)
       .click("@LeadsBttn")
       .pause(5000)
       .click ("@NewBttn")
       .pause(5000)
       .click("@RecordTypeRdBttn")
       .pause(5000)
       .click("@NextBttn")
       .pause(3000)
      
      // Filling up necessary fields
   //    .setValue("@iSelectCustomerIdTxtbx",LeadsData.CustomerID)
       .setValue("@FirstNameTxtbx",LeadsData.FirstName)
       .setValue("@LastNameTxtbx",LeadsData.LastName)
       .setValue("@EmailTxtbx",LeadsData.Email)
      .pause(3000)
      browser
      .useXpath().click("//span[contains(@class,'label')]/span[text()='Business Vertical']/parent::*/following-sibling::*/div/div/div/a")
      leadscreation
      .pause(3000)
      .click("@EnergyVerticalBttn")
      .pause(3000)
      browser
      .useXpath().click("//span[contains(@class,'label')]/span[text()='Lead Status']/parent::*/following-sibling::*/div/div/div/a")
      leadscreation
      .click("@OpenLeadStatusBttn")
      .pause(3000)
      browser
      .useXpath().click("//span[contains(@class,'label')]/span[text()='Lead Source']/parent::*/following-sibling::*/div/div/div/a")
      leadscreation
      .click("@WebLeadSourceBttn")
      .pause(5000)
      .click("@SaveBttn")
      .pause(3000)
      browser
      .refresh()
      
    //Navigate to Setup
    setup
    .navigate("https://iselect--bat.lightning.force.com/lightning/setup/SetupOneHome/home")
    .pause(5000);

     //Login as Energy - Client Solutions Consultant QA
     setup
     .setValue("@SearchTxtBx","Energy - Client Solutions Consultant QA")
     .pause(3000)
     .sendKeys("@SearchTxtBx", browser.Keys.ENTER)
     .pause(5000)
     .click("@UserClck")
     .pause(10000)
 
     //Switch to Frame to click Login
     browser.elements('css selector', 'iframe', function(elements) {
     elements.value.forEach(function(element){
     browser.elementIdAttribute(element.ELEMENT, 'name', function(attribute) {
     console.log(attribute.value)
     browser
     .frame(attribute.value)
     .pause(3000)
     setup
     .click("@LoginBttn")
     browser
     .refresh()
     .refresh()
     .pause(5000)
     leadsconversion
     .setValue("@SearchTxtBx",LeadsData.FirstName +" "+ LeadsData.LastName)
     .pause(3000)
     .sendKeys("@SearchTxtBx",browser.Keys.DOWN_ARROW)
     .pause(3000)
     .sendKeys("@SearchTxtBx", browser.Keys.ENTER)
     .pause(10000)
     browser
    .refresh()
    .useXpath().click("//li[@class='slds-button slds-button--neutral slds-truncate']//a[@title='Convert Lead']")
    .pause(15000)
    
     });
   });
 });

 //Switch to Frame to Convert Lead
 browser.elements('css selector', 'iframe', function(elements) {
  elements.value.forEach(function(element){
  browser.elementIdAttribute(element.ELEMENT, 'name', function(attribute) {
  console.log(attribute.value)
  browser
  .frame(attribute.value)
  .pause(5000)
  leadsconversion
  .click('NewRdBttn')
   
    .pause(15000)
  });
});
});
      
  
  }

    };
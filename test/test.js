var webdriver = require('selenium-webdriver');
const GetRandomString =  require('./Keywords/GetRandomString')
By = webdriver.By,
until = webdriver.until;

describe('Sign Up Page', function(){
    this.timeout(500000);
before(function () {
    // initializing chrome driver
    driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    // maximizing chrome browser
    driver.manage().window().maximize();
});

    it('fill in input text and register successfully', function () {

                var Url = "https://www.phptravels.net/register";
                driver.get(Url);

                firstnameTxt = driver.findElement(webdriver.By.name('firstname'));
                firstnameTxt.sendKeys('Luu');

                lastnameTxt = driver.findElement(webdriver.By.name('lastname'));
                lastnameTxt.sendKeys('Nguyet');

                phoneTxt = driver.findElement(webdriver.By.name('phone'));
                phoneTxt.sendKeys('0779701870');

                randomEmail = GetRandomString.randomStringGenerator('email','@gmail.com');
                emailTxt = driver.findElement(webdriver.By.name('email'));
                emailTxt.sendKeys( "Nguyetluu" + randomEmail);

                passwordTxt = driver.findElement(webdriver.By.name('password'));
                passwordTxt.sendKeys('123456');

                rePasswordTxt = driver.findElement(webdriver.By.name('confirmpassword'));
                rePasswordTxt.sendKeys('123456');

                signUpbtn = driver.findElement(webdriver.By.xpath("//*[contains(@class, 'signupbtn') and normalize-space(text())='Sign Up']"));
                signUpbtn.click();
    });
})
const { expect } = require("chai");
const homepage = require("../Pages/Homepage");
const { Given, Then } = require("@wdio/cucumber-framework");
Given(/^I am on facebook homepage$/, async function () {
  await browser.url("/");
});

Then(/^I verify login email field is enabled$/, async function () {
  const isEmailEnabled = await homepage.isLoginEmailEnabled();
  expect(isEmailEnabled, "Login email Field is NOT enabled").to.be.true;
});

Then(/^I verify login password field is enabled$/, async function () {
  const isPassEnabled = await homepage.isLoginPasswordEnabled();
  expect(isPassEnabled, "Login password Field is NOT enabled").to.be.true;
});

Then(/^I verify login button field is enabled$/, async function () {
  const isLoginBtnEnabled = await homepage.isLoginButtonEnabled();
  expect(isLoginBtnEnabled, "Login button is NOT enabled").to.be.true;
});

//requiring packages
var Nightmare = require('nightmare');
var expect = require('chai').expect;

//name the app we're testing
describe("Trello", function () {

  //first story to test
  this.timeout(30000);
  it("should take user to login page", function (done) {
    //steps to test for existing user
    Nightmare({ show: true })
      .goto("https://trello.com/logged-out")
      //click login
      .click('.global-header-section-button')
      //evaluate whether correct page is displayed
      .evaluate(function () {
        return document.querySelector("title").text;
      })
      //asset expected
      .then(function (title) {
        expect(title).to.equal("Logged out of Trello");
        console.log(title)

        done();
      })
  });
});

// describe("Mindfully", function () {

//   //first story to test
//   this.timeout(30000);
//   it("should send user to their Mindfully dashboard", function (done) {
//     //steps to test for existing user
//     Nightmare({ show: true })
//       .goto("https://www.mindfully_placeholder.com/")
//       //complete required fields
//       .type('input[name="session_login"]', 'dummy_username')
//       .type('input[name="session_password"]', 'dummy_password')
//       //click the login button
//       .click('#login-submit')
//       //evaluate whether correct page is displayed
//       .evaluate(function () {
//         return document.title;
//       })
//       //asset expected
//       .then(function (title) {
//         expect(title).to.equal("Mindfully | Dashboard");
//         done();
//       })
//   });
// });
//second story should text link on dashboard to new letter
// it("should go to new letter", function (done) {
//   new Nightmare({ show: true })
//     .goto("https://www.mindfully_placeholder.com/dashboard/")
//     // Click the skip button
//     .click("#new-letter")
//     // Evaluate the following selector
//     .evaluate(function () {
//       return document.querySelector("a[href='/new_letter']");
//     })
//     //specific asset expected
//     .then(function (link) {
//       expect(link).to.not.equal(undefined);
//       done();
//     });
// });
//story if error is thrown
it("should throw an error for fun", function () {
  throw new Error("Throw an error instead of writing a new letter.");
});


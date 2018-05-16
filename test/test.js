//requiring packages

const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

const url = 'http://localhost:8080';

describe('First Test Group', () => {
  it('Test', function(done) {
    this.timeout('10s')

    const nightmare = Nightmare({show: true})
    nightmare
      .goto(`${url}/`)
      //click login
      .click('#accolades')
      //evaluate whether correct page is displayed
      .evaluate(selector => {
        return document.querySelector(selector).innerText;
      })
      //asset expected
      .then(function(text) {
        "Easy to Use!"
        done();
      })
  })
});
// })
// var Nightmare = require('nightmare');
// var expect = require('chai').expect;

//   //first story to test
//     Nightmare({ show: true })
//       .goto("/")
//       //click login
//       .click('#accolades')
//       //evaluate whether correct page is displayed
//       .evaluate(selector => {
//         return document.querySelector(selector).innerText;
//       })
//       //asset expected
//       .then(text => {
//         "Easy to Use!"
//       })
//       .catch(err => {
//         console.err(err);
//       });
      
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
// 

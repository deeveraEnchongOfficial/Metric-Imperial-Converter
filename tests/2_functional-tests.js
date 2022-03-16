// const chaiHttp = require("chai-http");
// const chai = require("chai");
// let assert = chai.assert;
// const server = require("../server");

// chai.use(chaiHttp);

// // suite("Functional Tests", function () {

// //   suite('Routing Tests', function() {

// //     suite('GET /api/convert => convertion object', function() {

// //       test('Convert 10L (valid input)', function(done) {
// //         chai.request(server)
// //          .get('/api/convert')
// //          .query({input: '10L'})
// //          .end(function(err, res){
// //             assert.equal(res.status, 200);
// //             assert.equal(res.body.initNum, 10);
// //             assert.equal(res.body.initUnit, 'L');
// //             assert.approximately(res.body.returnNum, 2.64172, 0.1);
// //             assert.equal(res.body.returnUnit, 'gal');
// //             done();
// //          });
// //       });

// //       test('Convert 32g (valid input unit)', function(done) {
// //         chai.request(server)
// //          .get('/api/convert')
// //          .query({input: '32g'})
// //          .end(function(err, res){
// //             assert.equal(res.status, 200);
// //             assert.equal(res.body.initNum, null);
// //             assert.equal(res.body.initUnit, null);
// //             assert.equal(res.body.returnUnit, null);
// //             done();
// //          });
// //       });

      
// //     });
// //   });
// // });




// suite("Functional Tests", function () {

//   suite('Routing Tests', function() {

//     suite('GET /api/convert => convertion object', function() {

//       test("Convert 10L (valid input", (done) => {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: '10L'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.deepEqual(res.body, {
//               initNum: 10,
//               initUnit: "L",
//               returnNum: 2.64172,
//               returnUnit: "gal",
//               string: "10 liters converts to 2.64172 gallons",
//             });
//             done();
//           });
//       });

//       test("GET /api/convert?input=32g", (done) => {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: '32g'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid unit");
//             done();
//           });
//       });

//       test("GET /api/convert?input=3/7.2/4kg", (done) => {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kg'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number");
//             done();
//           });
//       });

//       test("GET /api/convert?input=3/7.2/4kilomegagram", (done) => {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kilomegagram'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number and unit");
//             done();
//           });
//       });

//       test("GET /api/convert?input=kg", (done) => {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: 'kg'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.deepEqual(res.body, {
//               initNum: 1,
//               initUnit: "kg",
//               returnNum: 2.20462,
//               returnUnit: "lbs",
//               string: "1 kilograms converts to 2.20462 pounds",
//             });
//             done();
//           });
//       });

      

      
//     });
//   });
// });
















// // suite("Functional Tests", function () {
// //   test("GET /api/convert?input=10L", (done) => {
// //     chai
// //       .request(server)
// //       .get("/api/convert?input=10L")
// //       .end((req, res) => {
// //         assert.equal(res.status, 200);
// //         assert.deepEqual(res.body, {
// //           initNum: 10,
// //           initUnit: "L",
// //           returnNum: 2.64172,
// //           returnUnit: "gal",
// //           string: "10 liters converts to 2.64172 gallons",
// //         });
// //         done();
// //       });
// //   });
// //   test("GET /api/convert?input=32g", (done) => {
// //     chai
// //       .request(server)
// //       .get("/api/convert?input=32g")
// //       .end((req, res) => {
// //         assert.equal(res.status, 200);
// //         assert.equal(res.text, "invalid unit");
// //         done();
// //       });
// //   });
// //   test("GET /api/convert?input=3/7.2/4kg", (done) => {
// //     chai
// //       .request(server)
// //       .get("/api/convert?input=3/7.2/4kg")
// //       .end((req, res) => {
// //         assert.equal(res.status, 200);
// //         assert.equal(res.text, "invalid number");
// //         done();
// //       });
// //   });
// //   test("GET /api/convert?input=3/7.2/4kilomegagram", (done) => {
// //     chai
// //       .request(server)
// //       .get("/api/convert?input=3/7.2/4kilomegagram")
// //       .end((req, res) => {
// //         assert.equal(res.status, 200);
// //         assert.equal(res.text, "invalid number and unit");
// //         done();
// //       });
// //   });
// //   test("GET /api/convert?input=kg", (done) => {
// //     chai
// //       .request(server)
// //       .get("/api/convert?input=kg")
// //       .end((req, res) => {
// //         assert.equal(res.status, 200);
// //         assert.deepEqual(res.body, {
// //           initNum: 1,
// //           initUnit: "kg",
// //           returnNum: 2.20462,
// //           returnUnit: "lbs",
// //           string: "1 kilograms converts to 2.20462 pounds",
// //         });
// //         done();
// //       });
// //   });
// // });


/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/






// var chaiHttp = require('chai-http');
// var chai = require('chai');
// var assert = chai.assert;
// var server = require('../server');

// chai.use(chaiHttp);

// suite('Functional Tests', function() {

//   suite('Routing Tests', function() {
    
//     suite('GET /api/convert => conversion object', function() {
      
//       test('Convert 10L (valid input)', function(done) {
//        chai.request(server)
//         .get('/api/convert')
//         .query({input: '10L'})
//         .end(function(err, res){
//           assert.equal(res.status, 200);
//           assert.equal(res.body.initNum, 10);
//           assert.equal(res.body.initUnit, 'L');
//           assert.approximately(res.body.returnNum, 2.64172, 0.1);
//           assert.equal(res.body.returnUnit, 'gal');
//           done();
//         });
//       });
      
//       test('Convert 32g (invalid input unit)', function(done) {
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '32g'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid unit");
//             done();
//           });
//       });
      
//       test('Convert 3/7.2/4kg (invalid number)', function(done) {     
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kg'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number");
//             done();
//           });
//       });  
      
//       test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kilomegagram'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number and unit");
//             done();
//           });
//       });
      
//       test('Convert kg (no number)', function(done) {
//         chai
//           .request(server)
//           .get("/api/convert")
//           .query({input: 'kg'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.deepEqual(res.body, {
//               initNum: 1,
//               initUnit: "kg",
//               returnNum: 2.20462,
//               returnUnit: "lbs",
//               string: "1 kilograms converts to 2.20462 pounds",
//             });
//             done();
//           });
//       });
      
//     });

//   });

// });


/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {

  suite('Routing Tests', () => {

    suite('GET /api/convert => conversion object', () => {

      test('Convert a valid input such as 10L: GET request to /api/convert.', done => {
        chai.request(server)
            .get('/api/convert')
            .query({input: '10L'})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.body.initNum, 10);
              assert.equal(res.body.initUnit, 'L');
              assert.approximately(res.body.returnNum, 2.64172, 0.1);
              assert.equal(res.body.returnUnit, 'gal');
              done();
            });
      });

//       test('Convert 10L (valid input)', function(done) {
//         chai.request(server)
//          .get('/api/convert')
//          .query({input: '10L'})
//          .end(function(err, res){
//             assert.equal(res.status, 200);
//             assert.equal(res.body.initNum, 10);
//             assert.equal(res.body.initUnit, 'L');
//             assert.approximately(res.body.returnNum, 2.64172, 0.1);
//             assert.equal(res.body.returnUnit, 'gal');
//             done();
//          });
//       });

      test('Convert an invalid input such as 32g: GET request to /api/convert.', done => {
        chai.request(server)
            .get('/api/convert')
            .query({input: '32g'})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.text, "invalid unit");
              done();
            });
      });

//       test('Convert 32g (invalid input unit)', function(done) {
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '32g'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid unit");
//             done();
//           });
//       });

      test('Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.', done => {
        chai.request(server)
            .get('/api/convert')
            .query({input: '3/7.2/4kg'})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.text, "invalid number");
              done();
            });
      });

//       test('Convert 3/7.2/4kg (invalid number)', function(done) {     
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kg'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number");
//             done();
//           });
//       });

      test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.', done => {
        chai.request(server)
            .get('/api/convert')
            .query({input: '3/7.2/4kilomegagram'})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.text, "invalid number and unit");
              done();
            });
      });

//       test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
//         chai.request(server)
//           .get("/api/convert")
//           .query({input: '3/7.2/4kilomegagram'})
//           .end((req, res) => {
//             assert.equal(res.status, 200);
//             assert.equal(res.text, "invalid number and unit");
//             done();
//           });
//       });

      test('Convert with no number such as kg: GET request to /api/convert.', done => {
        chai.request(server)
            .get('/api/convert')
            .query({input: 'kg'})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.body.initNum, 1);
              assert.equal(res.body.initUnit, 'kg');
              assert.approximately(res.body.returnNum, 2.20462, 0.1);
              assert.equal(res.body.returnUnit, 'lbs');
              done();
            });
      });
    });
  });

});

"use strict";

var should = require("chai").should();
var capitalize = require('../utils/string_utils').capitalize;
// import { capitalize } from '../utils/string_utils';


describe("capitalize()", function() {
  it("should capitalize all strings", function() {
    capitalize("dog").should.equal("Dog");
  });
});

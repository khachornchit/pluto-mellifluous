'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('raspberryPiMeanStack');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('raspberryPiMeanStack.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('raspberryPiMeanStack.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('raspberryPiMeanStack.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('raspberryPiMeanStack.services')).to.be.ok;
  });
  

});
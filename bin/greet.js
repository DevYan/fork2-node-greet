#!/usr/bin/env node
var greet=function greet(name,drunk){
  if(drunk){
    return "hello " + name + ",you look sexy today";
  }else{
    return "hello," + name;
  }
};
var argv = require('minimist')((process.argv),{'--':true});
console.log(greet(process.argv[2],argv.drunk));

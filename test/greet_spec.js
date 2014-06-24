var greet = require('../');
var result = greet('zhangyan',true);
describe('greet',function(){
  it("should greet a person by name",function(){
    expect(result).to.have.string('zhangyan');
  });
  it("should greet a person flirtatiously if drunk",function(){
    expect(result).to.have.string('sexy');
  });
});

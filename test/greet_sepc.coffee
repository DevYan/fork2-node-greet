greet = require '../lib/index.js'
result = greet 'zhangyan',true
describe 'greet',->
  it 'should greet a person by name' , ->
    expect(result).to.have.string('zhangyan')
  it 'should greet a person flirtatiously if drunk', ->
    expect(result).to.have.string('sexy')

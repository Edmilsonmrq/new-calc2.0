const calc = require('./new-calc');
test('Soma -10 e -2 espera -12', () => {
    expect(calc.soma(-10, -2)).toBe(-12);
});
 
const calc2 = require('./new-calc');
test('Soma 10 e 2 espera 12', () => {
    expect(calc.soma(10, 2)).toBe(12);
});
 
const calcSoma3 = require('./new-calc');
test('Soma -10 e 2 espera -8', () => {
    expect(calc.soma(-10, 2)).toBe(-8);
   
});
const calcSoma4 = require('./new-calc');
test('Soma 10 e 0 espera 10', () => {
    expect(calc.soma(10, 0)).toBe(10);
});
//teste subtração
const sub = require('./new-calc');
test('Subtração 10 e 2 espera 8', () => {
    expect(calc.sub(10, 2)).toBe(8);
});
 
const sub2 = require('./new-calc');
test('Subtração -10 e -2 espera -8', () => {
    expect(calc.sub(-10, -2)).toBe(-8);
});
 
const sub3 = require('./new-calc');
test('Subtração -10 e 2 espera -12', () => {
    expect(calc.sub(-10, 2)).toBe(-12);
});
 
const sub4 = require('./new-calc');
test('Subtração 10 e 0 espera 10', () => {
    expect(calc.sub(10, 0)).toBe(10);
});
 
//teste multiplicação
const mult = require('./new-calc');
test('Multiplicação 10 e 2 espera 20', () => {
    expect(calc.mult(10, 2)).toBe(20);
});
 
const mult2 = require('./new-calc');
test('multiplicação -10 e -2 espera 20', () => {
    expect(calc.mult(-10, -2)).toBe(20);
});
 
const mult3 = require('./new-calc');
test('multiplicação -10 e 2 espera -20', () => {
    expect(calc.mult(-10, 2)).toBe(-20);
});
 
const mult4 = require('./new-calc');
test('multiplicação 10 e 0 espera 0', () => {
    expect(calc.mult(10, 0)).toBe(0);
});
 
//teste divisão
const div = require('./new-calc');
test('divisão 10 e 2 espera 5', () => {
    expect(calc.div(10, 2)).toBe(5);
});
 
const div2 = require('./new-calc');
test('divisão -10 e -2 espera 5', () => {
    expect(calc.div(-10, -2)).toBe(5);
});
 
const div3 = require('./new-calc');
test('divisão -10 e 2 espera -5', () => {
    expect(calc.div(-10, 2)).toBe(-5);
});
 
const div4 = require('./new-calc');
test('divisão 0 e 10 espera 0', () => {
    expect(calc.div(0, 10)).toBe(0);
});

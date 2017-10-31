import { counter } from './index.js'

test('increment 1', () => {
  expect(counter(1, {type: 'INCREMENT'})).toBe(2)
})

test('decrement 2', () => {
  expect(counter(2, {type: 'DECREMENT'})).toBe(1)
})

test('decrement 4', () => {
  expect(counter(4, {type: 'DECREMENT'})).toBe(3)
})

test('altro', () => {
  expect(counter(1, {type: 'QUALCOSA_DI_DIVERSO'})).toBe(1)
})

console.log("il test counter è passato")
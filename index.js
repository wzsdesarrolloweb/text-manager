import { replaceKeyWithBold, replaceKeyWithText, replaceMultipleKeysWithText } from './utils.js'

const A = 'This is a {key} example'
const B = 'text'
const C = '{key}'
const D = 'This example {key1} multiple {key2}'
const E = {
	'{key1}': 'manage',
	'{key2}': 'keys',
}

const paragraph1 = document.querySelector('#p1')
paragraph1.innerHTML = replaceKeyWithText(A, B, C)
const paragraph2 = document.querySelector('#p2')
paragraph2.innerHTML = replaceKeyWithBold(A, B, C)
const paragraph3 = document.querySelector('#p3')
paragraph3.innerHTML = replaceMultipleKeysWithText(D, E)

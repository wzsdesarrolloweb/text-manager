This Library is intended to be use to easyly apply dynamic values inside text strings

const A = 'This is a {key} example'
const B = 'text'
const C = '{key}'
const D = 'This example {key1} multiple {key2}'
const E = {
'{key1}': 'manage',
'{key2}': 'keys',
}

replaceKeyWithText(A, B, C)
replaceKeyWithBold(A, B, C)
replaceMultipleKeysWithText(D, E)

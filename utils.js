/**
 *
 * @param {string} copyToChange text that will be edited
 * @param {string} newCopy text to be replaced
 * @param {string} key key or word to replace
 */
export function replaceKeyWithText(copyToChange, newCopy, key) {
	return copyToChange.replace(key, newCopy)
}

/**
 *
 * @param {string} copyToChange text that will be edited
 * @param {string} newCopy text to be replaced
 * @param {string} key key or word to replace
 */
export function replaceKeyWithBold(copyToChange, newCopy, key) {
	const splittedText = copyToChange.split(key)

	return splittedText[0] + '<b>' + newCopy + '</b>' + splittedText[1]
}

/**
 *
 * @param {string} copyToChange
 * @param {object} newCopys
 */
export function replaceMultipleKeysWithText(copyToChange, newCopys) {
	const allKeysToReplace = Object.keys(newCopys)
	let result = copyToChange

	for (const keyWord of allKeysToReplace) {
		result = result.replace(keyWord, newCopys[keyWord])
	}

	return result
}

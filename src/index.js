module.exports = function toReadable (number) {
    if (typeof number != 'number') number = parseInt(number)
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number == 0) return 'zero'
    else if (number < 20) {
        return digits[number]
    } else if (number < 100) {
        const $_num = Math.trunc(number / 10)
        const $_digit = digits[number - $_num * 10]
        return dozens[$_num] + ($_digit.length != 0 ? ' ' + $_digit : '')
    } else if (number < 1000) {
        const $_num = Math.trunc(number / 100)
        const $_digits = toReadable(number - $_num * 100)
        return digits[$_num] + ' hundred' + ($_digits != 'zero' ? ' ' + $_digits : '')
    }
}

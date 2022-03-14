const ms = {}

for (const [prefixes, object] of [
    [['years', 'year', 'yrs', 'yr', 'y'], {
        set: 'setFullYear',
        get: 'getFullYear'
    }],
    [['weeks', 'week', 'w'], {
        set: 'setWeek',
        get: 'getWeek'
    }],
    [['days', 'day', 'd'], {
        set: 'setDate',
        get: 'getDate'
    }],
    [['hours', 'hour', 'hrs', 'hr', 'h'], {
        set: 'setHours',
        get: 'getHours'
    }],
    [['minutes', 'minute', 'mins', 'min', 'm'], {
        set: 'setMinutes',
        get: 'getMinutes'
    }],
    [['seconds', 'second', 'secs', 'sec', 's'], {
        set: 'setSeconds',
        get: 'getSeconds'
    }],
    [['milliseconds', 'millisecond', 'msecs', 'msec', 'ms'], {
        set: 'setMilliseconds',
        get: 'getMilliseconds'
    }]
]) {
    for (const prefix of prefixes) ms[prefix] = object
}

/**
 * 
 * @param {String} string
 */
module.exports = function (string) {
    var D0 = new Date()
    var D1 = new Date(D0)
    
    let n = ''
    let s = string.slice(0, 1)
    while (!isNaN(s) || s === ' ') {
        if (s !== ' ') n += s
        string = string.substring(1)
        s = string.slice(0, 1)
    }

    if (string in ms) {
        D1 = D1[ms[string].set](D1[ms[string].get]() + Number(n))

        return Number(D1) - Number(D0)
    }

    return null
}
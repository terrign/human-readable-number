module.exports = function toReadable (number) {
    let arr = [...number+'']
    const readable = {
        nums: {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10
        },
        teens: {
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            sixteen: 16,
            seventeen: 17,
            eighteen: 18,
            nineteen: 19
        },
        decades: {
            twenty: 20,
            thirty: 30,
            forty: 40,
            fifty: 50,
            sixty: 60,
            seventy: 70,
            eighty: 80,
            ninety: 90
        }
    }
    let resultArr = []
    if (number <= 10) {
        for (let key in readable.nums) {
            readable.nums[key] === number ? resultArr.push(key)  : true
        }
    } else if (number > 10 && number < 20) {
        for (let key in readable.teens) {
            readable.teens[key] === number ? resultArr.push(key)  : true
        }
    } else if (number >= 20 && number < 100) {
        for (let key in readable.decades) {
            readable.decades[key] === arr[0] * 10 ? resultArr.push(key)  : true
        }
        for (let key in readable.nums) {
            readable.nums[key] === +arr[1] && +arr[1] != 0 ? resultArr.push(key)  : true
        }
    } else if (number >= 100) {
        for (let key in readable.nums) {
            readable.nums[key] === +arr[0] ? resultArr.push(key) : true
        }
        resultArr.push('hundred')
        if (arr[1] * 10 >= 20 ) {
            for (let key in readable.decades) {
                readable.decades[key] === arr[1] * 10 ? resultArr.push(key)  : true
            }
            for (let key in readable.nums) {
                readable.nums[key] === +arr[2] && +arr[2] != 0 ? resultArr.push(key)  : true
            }
        } else if (arr[1]*10 + +arr[2] < 20 && arr[1]*10 + +arr[2] > 10) {
            for (let key in readable.teens) {
                readable.teens[key] === arr[1]*10 + +arr[2] ? resultArr.push(key)  : true
            }
        } else if (arr[1] == 0) {
            for (let key in readable.nums) {
                readable.nums[key] === +arr[2] && +arr[2] != 0 ? resultArr.push(key)  : true
            }
        } else if (arr[1]*10 + +arr[2] == 10){
            resultArr.push('ten')
        }
    }

    return resultArr.join(' ')
}

export function getWeekDates(num, user) {
    let ret = [];
    let date = new Date();
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }
    while (num > 0) {
        num--;
        date.setDate(date.getDate() - 7);
    }
    let ptr = 0;
    for (let i = 0; i < 7; i++) {
        if (user != null) {
            for (let j = 0; j < user.days.length; j++) {
                if (user.days[j].date.includes(date.toJSON().slice(0, 10))) {
                    ret[ptr++] = date.toJSON().slice(0, 10);
                }
            }
        }
        date.setDate(date.getDate() + 1);
    }
    return ret;
}

export function getMonthDates(num, user) {
    let date = new Date();
    while (num >= 0) {
        if (date.getDate() === 1) {
            num--;
        }
        if (num === -1) break;
        date.setDate(date.getDate() - 1);
    }
    let ret = [];
    let month = date.getMonth();
    let ptr = 0;
    for (let i = 0; i < 32; i++) {
        date.setDate(date.getDate() + 1);
        if (user != null) {
            for (let j = 0; j < user.days.length; j++) {
                if (user.days[j].date.includes(date.toJSON().slice(0, 10))) {
                    ret[ptr++] = date.toJSON().slice(0, 10);
                }
            }
        }
        if (date.getMonth() !== month) break;
    }
    return ret;
}
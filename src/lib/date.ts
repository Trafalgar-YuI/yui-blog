function parseToDate(dateTimeString: string): (Date) {
    const dateTimeArray = dateTimeString.split(' ');
    const dateArray = dateTimeArray[0].split('-');
    const timeArray = dateTimeArray[1].split(':');

    if (timeArray.length === 3) {
        return new Date(Number(dateArray[0]), Number(dateArray[1]), Number(dateArray[2]), Number(timeArray[0]), Number(timeArray[1]), Number(timeArray[2]));
    }

    return new Date(Number(dateArray[0]), Number(dateArray[1]), Number(dateArray[2]), Number(timeArray[0]), Number(timeArray[1]));
};

function formatDate(date: Date | null): (string) {
    if (!date) {
        return '';
    }

    const year = date.getFullYear();
    const monthOrigin = date.getMonth();
    const dayOrigin = date.getDay();

    let month;
    if (monthOrigin / 10 < 1) {
        month = '0' + monthOrigin;
    } else {
        month = monthOrigin;
    }

    let day;
    if (dayOrigin / 10 < 1) {
        day = '0' + dayOrigin;
    } else {
        day = dayOrigin;
    }

    return `${year}-${month}-${day}`;
};

export { parseToDate, formatDate };
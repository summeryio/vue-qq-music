
export function formatCount(count) {
    return count > 10000 ? (count / 10000).toFixed(2) + '万' : count
}

export function myTrim(str) {
    return str.replace(/^\s+|\s+$/gm,'');
}
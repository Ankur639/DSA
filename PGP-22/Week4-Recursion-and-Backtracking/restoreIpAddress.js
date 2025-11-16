/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let n = s.length;
    if (n > 12) {
        return [];
    }
    let result = []
    function isValid(string) {
        if (string.length>1 && string[0] === '0') return false
        let number = Number(string);
        return number>=0 && number <= 255;
    }
    function restoreIpAddressesHelper(current, idx, parts, n) {
        if (parts === 4 && idx === n) {
            result.push(current.substring(0,current.length-1));
            return;
        }

        if (idx + 1 <= n && isValid(s.substring(idx, idx+1))) {
            restoreIpAddressesHelper(current + s.substring(idx, idx+1)+".", idx + 1, parts + 1, n);
        }

        if (idx + 2 <= n && isValid(s.substring(idx, idx+2))) {
            restoreIpAddressesHelper(current + s.substring(idx, idx+2)+".", idx + 2, parts + 1, n);
        }

        if (idx + 3 <= n && isValid(s.substring(idx, idx+3))) {
            restoreIpAddressesHelper(current + s.substring(idx, idx+3)+".", idx + 3, parts + 1, n);
        }
    }

    restoreIpAddressesHelper("",0,0,n);
    return result;
};
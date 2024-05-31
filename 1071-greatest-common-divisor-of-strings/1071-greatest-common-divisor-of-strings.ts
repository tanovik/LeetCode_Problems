function gcdOfStrings(str1: string, str2: string): string {
    // Check if str1 + str2 equals str2 + str1
    // If not, there is no common divisor string
    // An example would be 'ABAB' + 'AB' = 'ABABAB', no matter which you add first.
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    // Find the GCD of the lengths of str1 and str2
    const gcdLength = gcdIterative(str1.length, str2.length);

    // The GCD string will be the prefix of length equal to the GCD of the lengths of str1 and str2
    return str1.substring(0, gcdLength);
}

// Iterative helper function to compute the GCD of two numbers
function gcdIterative(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b
        a = temp
    }

    return a
}

// Recursive helper function to compute the GCD of two numbers
function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};
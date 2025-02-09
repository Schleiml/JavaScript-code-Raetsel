function prim(x) {
    if (x <= 1) return false;

    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prim(38));
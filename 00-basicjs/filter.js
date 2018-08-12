//filter
(() => {
    const array1 = [1,2,3,4,5]
    const array2 = array1.map(value => value % 2 == 0)
    console.log(array1)
    console.log(array2)
})();

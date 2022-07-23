const printArray = (array:number, n: number = 0) => {
    if (n >=0) {
        printArray(array, n +1)

    }
    console.log(printArray(2))
}

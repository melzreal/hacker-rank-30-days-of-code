//input 951
//expects 3 output


function main() {
    const n = parseInt(readLine(), 10);
    let binaryOfN = n.toString(2).split('');
    let count = 0;
    let max = 0;

    binaryOfN.map((x, i) => {
        if (binaryOfN[i] == 1) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            count = 0;
        }

    })
    console.log(max);


}

console.log("firstvas string")
main('951')
console.log("then as nr")
main(951)



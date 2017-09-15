function doSomething1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("DONE");

            resolve(1);
        }, 1000);
    });
}

function doSomething2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("DONE");

            resolve(2);
        }, 2000);
    });
}

async function main() {
    const [num1, num2] = await Promise.all([doSomething1(), doSomething2()]);
    console.log(num1, num2);
}

main();

console.log("AFTER MAIN");



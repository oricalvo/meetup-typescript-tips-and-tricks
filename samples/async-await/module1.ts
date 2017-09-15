async function module1() {
    const [num1, num2] = await Promise.all([doSomething1(), doSomething2()]);
    console.log(num1, num2);
}

function doSomething1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("DONE");
            resolve(1);
        }, 1000);
    });
}
function doSomething2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("DONE");
            resolve(2);
        }, 2000);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, num1, num2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([doSomething1(), doSomething2()])];
                case 1:
                    _a = _b.sent(), num1 = _a[0], num2 = _a[1];
                    console.log(num1, num2);
                    return [2 /*return*/];
            }
        });
    });
}
main();
console.log("AFTER MAIN");
//# sourceMappingURL=app.js.map
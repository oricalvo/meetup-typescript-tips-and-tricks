function XXX() {
    return function(target, propertyKey, descriptor) {
        return target;
    }
}

class MyClass {
    @XXX()
    run() {
    }
}

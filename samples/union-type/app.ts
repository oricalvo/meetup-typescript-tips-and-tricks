type C = string | number;

function run(obj: C) {
    if (typeof obj == "object") {
        obj.substring(0, 10);
    }
    else {
        let num: number;
        num = obj;
    }
}

class A {
    a() {
    }
}

class B {
    b() {
    }
}

type D = A | B;

function x(d: D) {
    if(d instanceof A) {
        d.a();
    }
}

var z: string[];
z[2] = "qeqew";
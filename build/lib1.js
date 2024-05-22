"use strict";
class animal {
    constructor(maxAge) {
        this.maxAge = maxAge;
    }
    enjoy() {
        console.log('yee');
    }
}
class dog extends animal {
    constructor(name) {
        super(30);
        this.name = name;
    }
    defence() {
        console.log('Minus face');
    }
}
class cat extends animal {
    constructor() {
        super(20);
        this.someProp = 'lala';
    }
    sayMew() {
        console.log('mew');
    }
}
class mainKun extends cat {
    constructor() {
        super();
    }
    sayMew() {
        console.log('rrrr');
    }
}
class bunny extends animal {
    constructor() {
        super(10);
        this.fluffinessLevel = 'incredible';
    }
}
class rabbit extends bunny {
}

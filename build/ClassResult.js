"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassResult = void 0;
class ClassResult {
    constructor(name) {
        this.maxDepth = 0;
        this.childCount = 0;
        this.name = name;
    }
    outputResults() {
        console.log(`
Class name: ${this.name}
Depth of inheritance tree: ${this.maxDepth}
Number of children: ${this.childCount}
    `);
    }
}
exports.ClassResult = ClassResult;

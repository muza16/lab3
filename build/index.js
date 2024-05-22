"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_morph_1 = require("ts-morph");
const ClassResult_1 = require("./ClassResult");
const filePath = './lib1.ts';
const project = new ts_morph_1.Project({
    tsConfigFilePath: './tsconfig.json'
});
const sourceFile = project.getSourceFileOrThrow(filePath);
const classes = sourceFile.getClasses();
const results = [];
let notOwerridenMethodsNumber = 0;
let allMethodsNumber = 0;
let allPrivateMethodsNumber = 0;
let allPropsNumber = 0;
let allPrivatePropsNumber = 0;
let notOwerridenPropsNumber = 0;
let pofDenominator = 0;
let pofNumerator = 0;
classes.forEach(classDeclaration => {
    var _a;
    const result = new ClassResult_1.ClassResult((_a = classDeclaration.getName()) !== null && _a !== void 0 ? _a : '');
    result.childCount = classDeclaration.getDerivedClasses().length;
    const allMethods = classDeclaration.getInstanceMethods().map(method => method.getName());
    const allProps = classDeclaration.getProperties().map(method => method.getName());
    const allInheritedMethods = [];
    const allInheritedProps = [];
    let owerridenMethodsLength = 0;
    allPrivateMethodsNumber += classDeclaration.getInstanceMethods().filter(method => method.getModifiers().some(modifier => modifier.getKind() === ts_morph_1.SyntaxKind.PrivateKeyword)).length;
    let currentClass = classDeclaration;
    allPropsNumber += allProps.length;
    allPrivatePropsNumber += classDeclaration.getProperties().filter(prop => prop.getModifiers().some(modifier => modifier.getKind() === ts_morph_1.SyntaxKind.PrivateKeyword)).length;
    while (currentClass.getBaseClass()) {
        result.maxDepth++;
        const baseClass = currentClass.getBaseClass();
        if (baseClass) {
            allInheritedMethods.push(...baseClass.getInstanceMethods().map(method => method.getName()).filter(method => !allInheritedMethods.includes(method) && !allMethods.includes(method)));
            allInheritedProps.push(...baseClass.getProperties().map(prop => prop.getName()).filter(prop => !allInheritedProps.includes(prop) && !allProps.includes(prop)));
            currentClass = baseClass;
            owerridenMethodsLength += allMethods.filter(method => baseClass.getInstanceMethods().map(method => method.getName()).includes(method)).length;
        }
    }
    notOwerridenMethodsNumber += allInheritedMethods.length;
    notOwerridenPropsNumber += allInheritedProps.length;
    allMethodsNumber += allMethods.length + notOwerridenMethodsNumber;
    pofDenominator += (allMethods.length - owerridenMethodsLength) * result.childCount;
    pofNumerator += owerridenMethodsLength;
    results.push(result);
});
const mif = notOwerridenMethodsNumber / allMethodsNumber;
const mhf = allPrivateMethodsNumber / allMethodsNumber;
const ahf = allPrivatePropsNumber / allPropsNumber;
const aif = notOwerridenPropsNumber / allPropsNumber;
const pof = pofNumerator / pofDenominator;
console.log(`
mif: ${mif}
mhf: ${mhf}
ahf: ${ahf}
aif: ${aif}
pof: ${pof}
`);
results.forEach(result => result.outputResults());

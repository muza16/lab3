export class ClassResult {
  public name: string
  public maxDepth = 0
  public childCount = 0
  public constructor(name: string) {
    this.name = name
  }

  public outputResults() {
    console.log(`
Class name: ${this.name}
Depth of inheritance tree: ${this.maxDepth}
Number of children: ${this.childCount}
    `)
  }
}
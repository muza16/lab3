class animal {
  constructor(maxAge: number) {
    this.maxAge = maxAge
  }

  public enjoy() {
    console.log('yee')
  }

  maxAge: number
}

class dog extends animal {
  constructor(name: string) {
    super(30)
    this.name = name
  }

  private defence() {
    console.log('Minus face')
  }

  name: string
}

class cat extends animal {
  constructor() {
    super(20)
    this.someProp = 'lala'
  }

  private someProp: string

  public sayMew() {
    console.log('mew')
  }
}

class mainKun extends cat {
  constructor() {
    super()
  }

  override sayMew() {
    console.log('rrrr')
  } 
}

class bunny extends animal {
  constructor() {
    super(10)
  }

  private fluffinessLevel = 'incredible'
}

class rabbit extends bunny {}


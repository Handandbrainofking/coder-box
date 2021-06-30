// 类的定义、继承、多态
declare interface Device {
  deviceId: number
  title: string
  homeId: number
  category?: string
  size?: string
}

// 类的定义
export class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run() {
    console.log(`${this.name} is running`)
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
snake.run()

//继承
export class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`)
    return `${this.name} is barking`
  }
}

let xiaobao = new Dog('xiaobao')
xiaobao.bark()

// 多态

export class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'miao,' + super.run()
  }
}

const maomao = new Cat('maomao')
maomao.run()

export let fridge: Device = {
  deviceId: 123,
  homeId: 321,
  title: '冰箱',
}

fridge.category

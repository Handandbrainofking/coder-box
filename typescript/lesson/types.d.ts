declare interface Person {
  readonly id?: number
  name: string
  age: number
  address?: string
}

declare interface Device {
  deviceId: number
  title: string
  homeId: number
  category?: string
  size?: string
}

declare interface Bridge {
  name: string
  lib: string
  canIUse(api: string): object
  showToast(params: Object): void
}

declare interface add {
  (x: number, y: number): number
}

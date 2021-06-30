declare interface Bridge {
  name: string
  lib: string
  canIUse(api: string): object
  showToast(params: Object): void
}

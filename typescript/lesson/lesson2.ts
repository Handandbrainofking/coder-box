let p1: Person = {
  id: 8888,
  name: 'jack',
  age: 22,
}
// p1.id = 999

const sum1: (x: number, y: number) => number = (
  x: number,
  y: number,
): number => {
  return x + y
}

interface ISum {
  (x: number, y: number): number
}

const sum2: ISum = sum1

interface RandomMap {
  [propName: string]: string
}
const p2: Person = {
  name: 'zoiew',
  age: 20,
  address: 'China',
}

const box: RandomMap = {
  shape: 'rect',
  size: '40 * 20',
}

interface LikeArray {
  [index: number]: string
}
const likeArray: LikeArray = ['1', '2']
likeArray[0]

// interface: duck typing
interface FunctionWithProps {
  (x: number): number
  name: string
}
const a: FunctionWithProps = (x: number) => {
  return x
}
a.name = 'abc'

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null
  propTypes?: WeakValidationMap<P>
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<P>
  displayName?: string
}

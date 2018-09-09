import {Node, Data, Literal, Parent} from './index'

const data: Data = {}

const node: Node = {
  type: 'node',
  data: data
}

const literal: Literal = {
  type: 'literal',
  value: 123
}

const parent: Parent = {
  type: 'parent',
  children: [node, literal]
}

console.log(node)
console.log(literal)
console.log(parent)

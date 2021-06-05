export const mutation = {
    increment: state => state.count++
}

import { expect } from 'chai'
import {mutation} from './store'

const { increment } = mutations

describe('mutations', ()=> {
    it('INCREMENT', () => {
        const state = { count: 0 }
        increment(state)
        expect(state.count).to.equal(1)
    })
})

import shop from '../api/shop'

export const getAllProduct = ''
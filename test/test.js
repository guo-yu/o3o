import should from 'should'
import o3o from '../dist/o3o'
import { list } from '../yan.json'

describe('Available', () => {
  it('should return a available list', done => {
    const list = o3o('tags')
    list.should.be.an.instanceof(Array)
    list.length.should.be.equal(list.length)
    done()
  })
})

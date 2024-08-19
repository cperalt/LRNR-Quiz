import { it, expect, describe } from "vitest";
import { checkAnswer, handleSubmit } from "./functions";


describe('handleSubmit()', () => {

it('should be defined when the string inputs are provided', (done) => {

    handleSubmit('aws', 'novice', '5', 'normal', (err, res) => {
        try {
            expect(res).toBeDefined();
            done();
        } catch (error) {
            done(err)
        }
    })

})


it('should throw error when inputs are not provided', () => {

    handleSubmit((err, res) => {
        try {
            expect(res).toThrow();
            done();
        } catch (error) {
            done(error)
        }
    })
})

})

describe('checkAnser()', () => {

it('should be defined when inputs are provided', (done) => {
        
    checkAnswer('amazon web services', 'amazon web services', '2', (err, res) => {
        try {
            expect(res).toBeDefined();
            done();
        } catch (error) {
            done(error);
            
        }
    })
})
    

it('should throw error when no inputs are provided', (done) => {
        
    checkAnswer("",(err, res) => {
        try {
            expect(res).toThrow();
            done();
        } catch (error) {
            done(error);
            
        }
    })
})

})
import { randomBetween } from './randomBetween';

const randomSpy = jest.spyOn(Math, 'random');

const test =  {
    sixteen: function():number{
        return 16;
    }
} 

const testSpy = jest.spyOn(test, 'sixteen');

describe('randomBetween', () => {
    describe('when Math.random() returns 0.999999', () => {
        beforeEach(() => {
          randomSpy.mockReturnValue(0);
          testSpy.mockImplementation(()=>{
            return 13;
          });
        });

        it('tests test fn',() => {
            expect(test.sixteen()).toBe(13);
        })
    
        it('called with min=3 and max=5 returns 5', () => {
          expect(randomBetween(3, 5)).toBe(3);
          expect(Math.random).toHaveBeenCalledTimes(1);
        });
      });

});
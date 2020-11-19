import { StrengthPipe } from './strength.pipe';
describe('StrengthPipe', () => {
  let sut;

  beforeEach(() => {
    sut = { };
  });

  it('Should display weak if strength is 5', () => {

    // arrange

    const pipe = new StrengthPipe();

    // act
    const val = pipe.transform(5);

    // assert
    expect(val).toEqual('5 (weak)');


  })

  it('Should display strong if strength is 10', () =>{
     // arrange

     const pipe = new StrengthPipe();

     // act
     const val = pipe.transform(10);

     // assert
     expect(val).toEqual('10 (strong)');
  })
});

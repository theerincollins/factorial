describe("factorial", function(){
  it('gives the factorial of 1', function(){
    expect(factorial(1)).to.equal(1);
  });

  it('returns the factorial of 3', function(){
    expect(factorial(3)).to.equal(6);
  });

  it('returns 1 as the factorial of 0', function(){
    expect(factorial(0)).to.equal(1);
  });


});

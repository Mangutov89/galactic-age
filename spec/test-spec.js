import { GalacticAge } from './../src/business.js';

describe('GalacticAge', function() {

  it('should test age on Mercury',
  function() {
    const checkMercury = new GalacticAge(30);
    expect(checkMercury.ageOnMercury()).toEqual(124.43181818181819)
  });
  it('should test age on Venus',
  function() {
    const checkVenus = new GalacticAge(30);
    expect(checkVenus.ageOnVenus()).toEqual(48.45132743362832)
  });
  it('should test age on Mars',
  function() {
    const checkMars = new GalacticAge(30);
    expect(checkMars.ageOnMars()).toEqual(15.962099125364432)
  });
  it('should test age on Jupiter',
  function() {
    const checkJupiter = new GalacticAge(30);
    expect(checkJupiter.ageOnJupiter()).toEqual(2.53003696857671)
  });
  it('should fail test',
  function() {
    const checkJupiter = new GalacticAge(30);
    expect(checkJupiter.ageOnJupiter()).not.toEqual(5)
  });
  it('should test age on when selected asian',
  function() {
    this.ethnicity = "Asian";
    const checkAsianAverage = new GalacticAge(30, "Asian");
    expect(checkAsianAverage.lifeExpectancy()).toEqual(92)
  });
});

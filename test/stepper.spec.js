/*global spyOn,console,define,require,describe,afterEach,beforeEach,expect,it,waitsFor,__dirname */
describe('Stepper', function () {

    var Stepper = require('../stepper');

    beforeEach(function () {
        this.stepper = new Stepper();
    });

    it('can accept a function as a listener', function(){
        expect(this.stepper instanceof Stepper).toBe(true);
        expect(this.stepper.on(function(){})).toBe(this.stepper);
    });

    it('can update the number value', function(){
        expect(this.stepper.set(3)).toBe(0);
    });

    it('can get correct step when value is set', function(){
        this.stepper.steps = [100, 200, 300];
        expect(this.stepper.set('220')).toEqual(200);
    });

    it('can trigger an event on a step', function(){
        var triggered = false;
        this.stepper.steps = [100, 200, 300];
        this.stepper.on(function(value){
            triggered = true;
        });
        this.stepper.set(220);
        expect(triggered).toBe(true);
        expect(this.stepper.currentStep).toBe(200);
    });

    it('can trigger event only when a step is changed', function(){
        expect(this.stepper.steps.length).toBe(0);
        var triggered = false;
        this.stepper.steps = [100, 200, 300];
        this.stepper.on(function(value){
            triggered = true;
        });
        this.stepper.set(220);

        expect(triggered).toBe(true);
        expect(this.stepper.currentStep).toBe(200);
        triggered = false;
        this.stepper.set(280);
        expect(triggered).toBe(false);
        expect(this.stepper.currentStep).toBe(200);
        this.stepper.set(380);
        expect(triggered).toBe(true);
        expect(this.stepper.currentStep).toBe(300);
    });

});



/*global window, define, require, exports:true */
(function(global){
    'use strict';

    var Stepper = function(){};
    Stepper.prototype = {
        currentStep: null,
        steps: [],
        events: [],
        set: function(value){
            this.value = value;
            var step = 0,
            ln = this.steps.length, i, itm;
            for (i = 0; i < ln; i+=1) {
                if (value >= this.steps[i]) {
                    step = this.steps[i];
                }
            }
            if (step !== this.currentStep) {
                this.currentStep = step;
                this.trigger(step);
            }
            return step;
        },
        on: function(fn){
            this.events.push(fn);
            return this;
        },
        trigger: function(step){
            for (var i = 0; i < this.events.length; i++) {
                this.events[i].call(this, step);
            }
            return this;
        }

    };

    if (typeof exports !== 'undefined') {
        module.exports = Stepper;
    } else if (global.define && global.define.amd) {
        define(function(){ return Stepper; });
    } else {
        global.Stepper = Stepper;
    }

}(this));



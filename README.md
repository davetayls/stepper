stepper
=======
[![Build Status](https://secure.travis-ci.org/davetayls/stepper.png)](http://travis-ci.org/davetayls/stepper)

simple script to trigger on integer steps

```javascript
var stepper = new Stepper();
stepper.steps = [100, 200, 300];
stepper.on(function(step){
	console.log(step);
});
stepper.set(110);
// console -> 100
```
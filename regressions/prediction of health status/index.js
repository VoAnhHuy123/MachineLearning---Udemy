require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LogisticRegression = require('./logistic-regression');
const plot = require('node-remote-plot');
const _= require('lodash');
// const houseSalesDataset = tf.data.csv("http://10.0.106.159:8080/data/BMI.csv");
// console.log(houseSalesDataset);
module.exports = function allF(gender, height, weight){
const { features, labels, testFeatures, testLabels} = loadCSV("./data/BMI.csv", {
    dataColumns: [
        'Height',
        'Weight',
        
    ],
    labelColumns:['Index'],
    shuffle: true,
    splitTest: 50,
    gender:[gender],
    converters:{ Index: value =>{
        const index = parseFloat(value);
        if(index === 1){
            return [1, 0, 0, 0, 0];
        }else if(index === 2){
            return [0, 1, 0, 0, 0];
        }else if(index === 3){
            return [0, 0, 1, 0, 0];
        }else if(index === 4){
            return [0, 0, 0, 1, 0];
        }else{
            return [0, 0, 0, 0, 1];
        }
        }
    }
});
// console.log(features);

const regression = new LogisticRegression(features, _.flatMap(labels), {
    learningRate: 0.3,
    iterations: 100,
    batchSize: 10,
    // decisionBoundary: 0.6

});

regression.train();

// console.log(regression.test(testFeatures, _.flatMap(testLabels)));
 const f = regression.predict([[height, weight]]).get([0]);
 var a;
 switch(f) {
    case 1:
      a="Weak"
      break;
    case 2:
        a="Normal"
      break;
    case 3:
        a="Overweight"
      break;
    case 4:
        a="Obesity"
      break;
    case 5:
        a="Extreme Obesity"
      break;
    default:
      // code block
  }

// console.log(regression.costHistory)
plot({
    x: regression.costHistory.reverse()
})
 return a;
}


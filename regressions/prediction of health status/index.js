require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LogisticRegression = require('./logistic-regression');
const plot = require('node-remote-plot');
const _= require('lodash');

const { features, labels, testFeatures, testLabels} = loadCSV('../data/BMI.csv', {
    dataColumns: [
        'Height',
        'Weight',
        
    ],
    labelColumns:['Index'],
    shuffle: true,
    splitTest: 50,
    gender:['Male'],
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
console.log(regression.test(testFeatures, _.flatMap(testLabels)));
regression.predict([[185, 76]]).print();
// console.log(regression.costHistory)
plot({
    x: regression.costHistory.reverse()
})

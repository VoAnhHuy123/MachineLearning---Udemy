require("@tensorflow/tfjs-node");
const tf = require('@tensorflow/tfjs');
const loadCSV = require('../load-csv');
const LinearRegression = require('./linear-regression');
const plot = require('node-remote-plot');

let{features, labels, testFeatures, testLabels} = loadCSV('../data/cars.csv', {
    shuffle: true,
    splitTest:50,
    dataColumns: ['horsepower', 'weight', 'displacement'],
    labelColumns: ['mpg']
});
const regression = new LinearRegression(features, labels, {
    learningRate: 0.1,
    iterations:3,
    batchSize: 10
});
regression.train();
plot({
    x: regression.mseHistory.reverse(),
    xLabel:'Iteration #',
    yLabel: 'Mean Squared Error'

});
// const R2 = regression.test(testFeatures, testLabels);
// console.log(R2);
regression.predict([[120, 2, 380]]).print();

// console.log('Udated M is:', regression.weights.get(1, 0), 'Update B is:', regression.weights.get(0, 0));
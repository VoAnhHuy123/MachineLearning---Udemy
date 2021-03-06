/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { Tensor, Tensor1D } from '@tensorflow/tfjs';
import { HistogramStats } from '../types';
/**
 * Returns summary statistics for an array of numbers
 *
 * @param input
 */
export declare function arrayStats(input: number[]): HistogramStats;
/**
 * Returns summary statistics for a numeric tensor. *
 *
 * @param input
 */
export declare function tensorStats(input: Tensor): Promise<HistogramStats>;
/**
 * Computes a confusion matrix from predictions and labels. Each value in
 * labels and predictions should correspond to some output class. It is assumed
 * that these values go from 0 to numClasses - 1.
 *
 * ```js
 * const labels = tf.tensor1d([1, 2, 4]);
 * const predictions = tf.tensor1d([2, 2, 4]);
 * const result = await tfvis.metrics.confusionMatrix(labels, predictions);
 * console.log(JSON.stringify(result, null, 2))
 * ```
 *
 * @param labels 1D tensor of true values
 * @param predictions 1D tensor of predicted values
 * @param numClasses Number of distinct classes. Optional. If not passed in
 *  numClasses will equal the highest number in either labels or predictions
 *  plus 1
 * @param weights 1d tensor that is the same size as predictions.
 *  If weights is passed in then each prediction contributes its corresponding
 *  weight to the total value of the confusion matrix cell.
 *
 */
/**
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
export declare function confusionMatrix(labels: Tensor1D, predictions: Tensor1D, numClasses?: number, weights?: Tensor1D): Promise<number[][]>;
/**
 * Computes how often predictions matches labels
 *
 * ```js
 * const labels = tf.tensor1d([0, 0, 1, 2, 2, 2]);
 * const predictions = tf.tensor1d([0, 0, 0, 2, 1, 1]);
 *
 * const result = await tfvis.metrics.accuracy(labels, predictions);
 * console.log(result)
 * ```
 *
 * @param labels tensor of true values
 * @param predictions tensor of predicted values
 */
/**
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
export declare function accuracy(labels: Tensor, predictions: Tensor): Promise<number>;
/**
 * Computes per class accuracy between prediction and labels. Each value in
 * labels and predictions should correspond to some output class. It is assumed
 * that these values go from 0 to numClasses - 1.
 *
 * ```js
 * const labels = tf.tensor1d([0, 0, 1, 2, 2, 2]);
 * const predictions = tf.tensor1d([0, 0, 0, 2, 1, 1]);
 *
 * const result = await tfvis.metrics.perClassAccuracy(labels, predictions);
 * console.log(JSON.stringify(result, null, 2))
 * ```
 *
 * Returns an array of objects that each have an an `accuracy` and a `count`
 * property for each class.
 *
 *
 * @param labels 1D tensor of true values
 * @param predictions 1D tensor of predicted values
 * @param numClasses Number of distinct classes. Optional. If not passed in
 *  numClasses will equal the highest number in either labels or predictions
 *  plus 1
 */
/**
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
export declare function perClassAccuracy(labels: Tensor1D, predictions: Tensor1D, numClasses?: number): Promise<Array<{
    accuracy: number;
    count: number;
}>>;

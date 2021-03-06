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
import { Logs } from '@tensorflow/tfjs-layers';
import { Drawable, XYPlotOptions } from '../types';
/**
 * Renders a tf.Model training 'History'.
 *
 * ```js
 * const model = tf.sequential({
 *  layers: [
 *    tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
 *    tf.layers.dense({units: 10, activation: 'softmax'}),
 *  ]
 * });
 *
 * model.compile({
 *   optimizer: 'sgd',
 *   loss: 'categoricalCrossentropy',
 *   metrics: ['accuracy']
 * });
 *
 * const data = tf.randomNormal([100, 784]);
 * const labels = tf.randomUniform([100, 10]);
 *
 * function onBatchEnd(batch, logs) {
 *   console.log('Accuracy', logs.acc);
 * }
 *
 * const surface = { name: 'show.history', tab: 'Training' };
 * // Train for 5 epochs with batch size of 32.
 * const history = await model.fit(data, labels, {
 *    epochs: 5,
 *    batchSize: 32
 * });
 *
 * tfvis.show.history(surface, history, ['loss', 'acc']);
 * ```
 *
 * ```js
 * const model = tf.sequential({
 *  layers: [
 *    tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
 *    tf.layers.dense({units: 10, activation: 'softmax'}),
 *  ]
 * });
 *
 * model.compile({
 *   optimizer: 'sgd',
 *   loss: 'categoricalCrossentropy',
 *   metrics: ['accuracy']
 * });
 *
 * const data = tf.randomNormal([100, 784]);
 * const labels = tf.randomUniform([100, 10]);
 *
 * function onBatchEnd(batch, logs) {
 *   console.log('Accuracy', logs.acc);
 * }
 *
 * const surface = { name: 'show.history live', tab: 'Training' };
 * // Train for 5 epochs with batch size of 32.
 * const history = [];
 * await model.fit(data, labels, {
 *    epochs: 5,
 *    batchSize: 32,
 *    callbacks: {
 *      onEpochEnd: (epoch, log) => {
 *        history.push(log);
 *        tfvis.show.history(surface, history, ['loss', 'acc']);
 *      }
 *    }
 * });
 * ```
 *
 * @param history A history like object. Either a tfjs-layers `History` object
 *  or an array of tfjs-layers `Logs` objects.
 * @param metrics An array of strings for each metric to plot from the history
 *  object. Using this allows you to control which metrics appear on the same
 *  plot.
 * @param opts Optional parameters for the line charts.
 */
/**
 * @doc {heading: 'Models & Tensors', subheading: 'Model Training', namespace:
 * 'show'}
 */
export declare function history(container: Drawable, history: HistoryLike, metrics: string[], opts?: HistoryOptions): Promise<void>;
interface HistoryOptions extends XYPlotOptions {
    zoomToFitAccuracy?: boolean;
}
declare type HistoryLike = Logs[] | Logs[][] | {
    history: {
        [key: string]: number[];
    };
};
/**
 * Returns a collection of callbacks to pass to tf.Model.fit. Callbacks are
 * returned for the following events, `onBatchEnd` & `onEpochEnd`.
 *
 * ```js
 * const model = tf.sequential({
 *  layers: [
 *    tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
 *    tf.layers.dense({units: 10, activation: 'softmax'}),
 *  ]
 * });
 *
 * model.compile({
 *   optimizer: 'sgd',
 *   loss: 'categoricalCrossentropy',
 *   metrics: ['accuracy']
 * });
 *
 * const data = tf.randomNormal([100, 784]);
 * const labels = tf.randomUniform([100, 10]);
 *
 * function onBatchEnd(batch, logs) {
 *   console.log('Accuracy', logs.acc);
 * }
 *
 * const surface = { name: 'show.fitCallbacks', tab: 'Training' };
 * // Train for 5 epochs with batch size of 32.
 * await model.fit(data, labels, {
 *    epochs: 5,
 *    batchSize: 32,
 *    callbacks: tfvis.show.fitCallbacks(surface, ['loss', 'acc']),
 * });
 * ```
 *
 * @param metrics List of metrics to plot.
 * @param opts Optional parameters
 */
/**
 * @doc {heading: 'Models & Tensors', subheading: 'Model Training', namespace:
 * 'show'}
 */
export declare function fitCallbacks(container: Drawable, metrics: string[], opts?: FitCallbackOptions): FitCallbackHandlers;
interface FitCallbackHandlers {
    [key: string]: (iteration: number, log: Logs) => Promise<void>;
}
interface FitCallbackOptions extends HistoryOptions {
    /**
     * Array of callback names. Valid options
     * are 'onEpochEnd' and 'onBatchEnd'. Defaults to ['onEpochEnd',
     * 'onBatchEnd'].
     */
    callbacks?: string[];
}
export {};

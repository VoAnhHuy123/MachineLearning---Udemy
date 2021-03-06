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
import * as tf from '@tensorflow/tfjs';
import { Layer } from '@tensorflow/tfjs-layers/dist/engine/topology';
import { Drawable } from '../types';
/**
 * Renders a summary of a tf.Model. Displays a table with layer information.
 *
 * ```js
 * const model = tf.sequential({
 *  layers: [
 *    tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
 *    tf.layers.dense({units: 10, activation: 'softmax'}),
 *  ]
 * });
 *
 * const surface = { name: 'Model Summary', tab: 'Model Inspection'};
 * tfvis.show.modelSummary(surface, model);
 * ```
 *
 */
/**
 * @doc {
 *  heading: 'Models & Tensors',
 *  subheading: 'Model Inspection',
 *  namespace: 'show'
 * }
 */
export declare function modelSummary(container: Drawable, model: tf.LayersModel): Promise<void>;
/**
 * Renders summary information about a layer and a histogram of parameters in
 * that layer.
 *
 * ```js
 * const model = tf.sequential({
 *  layers: [
 *    tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
 *    tf.layers.dense({units: 10, activation: 'softmax'}),
 *  ]
 * });
 *
 * const surface = { name: 'Layer Summary', tab: 'Model Inspection'};
 * tfvis.show.layer(surface, model.getLayer(undefined, 1));
 * ```
 *
 */
/**
 * @doc {
 *  heading: 'Models & Tensors',
 *  subheading: 'Model Inspection',
 *  namespace: 'show'
 * }
 */
export declare function layer(container: Drawable, layer: Layer): Promise<void>;

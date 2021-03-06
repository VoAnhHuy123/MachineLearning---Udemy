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
import { Tensor } from '@tensorflow/tfjs';
import { Drawable } from '../types';
/**
 * Shows a histogram with the distribution of all values in a given tensor.
 *
 * ```js
 * const tensor = tf.tensor1d([0, 0, 0, 0, 2, 3, 4]);
 *
 * const surface = {name: 'Values Distribution', tab: 'Model Inspection'};
 * await tfvis.show.valuesDistribution(surface, tensor);
 * ```
 *
 */
/**
 * @doc {heading: 'Models & Tensors', subheading: 'Model Inspection', namespace:
 * 'show'}
 */
export declare function valuesDistribution(container: Drawable, tensor: Tensor): Promise<void>;

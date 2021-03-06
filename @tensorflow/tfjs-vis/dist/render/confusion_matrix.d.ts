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
import { ConfusionMatrixData, ConfusionMatrixOptions, Drawable } from '../types';
/**
 * Renders a confusion matrix.
 *
 * Can optionally exclude the diagonal from being shaded if one wants the visual
 * focus to be on the incorrect classifications. Note that if the classification
 * is perfect (i.e. only the diagonal has values) then the diagonal will always
 * be shaded.
 *
 * ```js
 * const rows = 5;
 * const cols = 5;
 * const values = [];
 * for (let i = 0; i < rows; i++) {
 *   const row = []
 *   for (let j = 0; j < cols; j++) {
 *     row.push(Math.round(Math.random() * 50));
 *   }
 *   values.push(row);
 * }
 * const data = { values };
 *
 * // Render to visor
 * const surface = { name: 'Confusion Matrix', tab: 'Charts' };
 * tfvis.render.confusionMatrix(surface, data);
 * ```
 *
 * ```js
 * // The diagonal can be excluded from shading.
 *
 * const data = {
 *   values: [[4, 2, 8], [1, 7, 2], [3, 3, 20]],
 * }
 *
 * // Render to visor
 * const surface = {
 *  name: 'Confusion Matrix with Excluded Diagonal', tab: 'Charts'
 * };
 *
 * tfvis.render.confusionMatrix(surface, data, {
 *   shadeDiagonal: false
 * });
 * ```
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function confusionMatrix(container: Drawable, data: ConfusionMatrixData, opts?: ConfusionMatrixOptions): Promise<void>;

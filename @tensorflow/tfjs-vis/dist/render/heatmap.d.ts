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
import { Drawable, HeatmapData, HeatmapOptions } from '../types';
/**
 * Renders a heatmap.
 *
 * ```js
 * const cols = 50;
 * const rows = 20;
 * const values = [];
 * for (let i = 0; i < cols; i++) {
 *   const col = []
 *   for (let j = 0; j < rows; j++) {
 *     col.push(i * j)
 *   }
 *   values.push(col);
 * }
 * const data = { values };
 *
 * // Render to visor
 * const surface = { name: 'Heatmap', tab: 'Charts' };
 * tfvis.render.heatmap(surface, data);
 * ```
 *
 * ```js
 * const data = {
 *   values: [[4, 2, 8, 20], [1, 7, 2, 10], [3, 3, 20, 13]],
 *   xTickLabels: ['cheese', 'pig', 'font'],
 *   yTickLabels: ['speed', 'smoothness', 'dexterity', 'mana'],
 * }
 *
 * // Render to visor
 * const surface = { name: 'Heatmap w Custom Labels', tab: 'Charts' };
 * tfvis.render.heatmap(surface, data);
 * ```
 *
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function heatmap(container: Drawable, data: HeatmapData, opts?: HeatmapOptions): Promise<void>;

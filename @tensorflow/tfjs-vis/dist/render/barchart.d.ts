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
import { BarChartOpts, Drawable } from '../types';
/**
 * Renders a barchart.
 *
 * ```js
 * const data = [
 *   { index: 0, value: 50 },
 *   { index: 1, value: 100 },
 *   { index: 2, value: 150 },
 *  ];
 *
 * // Render to visor
 * const surface = { name: 'Bar chart', tab: 'Charts' };
 * tfvis.render.barchart(surface, data);
 * ```
 *
 * @param data Data in the following format, (an array of objects)
 *    `[ {index: number, value: number} ... ]`
 *
 * @returns Promise - indicates completion of rendering
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function barchart(container: Drawable, data: Array<{
    index: number;
    value: number;
}>, opts?: BarChartOpts): Promise<void>;

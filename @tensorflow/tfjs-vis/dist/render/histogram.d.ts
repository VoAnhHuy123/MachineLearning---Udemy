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
import { Drawable, HistogramOpts, TypedArray } from '../types';
/**
 * Renders a histogram of values
 *
 * ```js
 * const data = Array(100).fill(0)
 *   .map(x => Math.random() * 100 - (Math.random() * 50))
 *
 * // Push some special values for the stats table.
 * data.push(Infinity);
 * data.push(NaN);
 * data.push(0);
 *
 * const surface = { name: 'Histogram', tab: 'Charts' };
 * tfvis.render.histogram(surface, data);
 * ```
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function histogram(container: Drawable, data: Array<{
    value: number;
}> | number[] | TypedArray, opts?: HistogramOpts): Promise<import("vega-embed").Result>;

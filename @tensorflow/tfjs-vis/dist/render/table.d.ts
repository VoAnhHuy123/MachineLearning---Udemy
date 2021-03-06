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
import { Drawable, TableData } from '../types';
/**
 * Renders a table
 *
 * ```js
 * const headers = [
 *  'Col 1',
 *  'Col 2',
 *  'Col 3',
 * ];
 *
 * const values = [
 *  [1, 2, 3],
 *  ['4', '5', '6'],
 *  ['strong>7</strong>', true, false],
 * ];
 *
 * const surface = { name: 'Table', tab: 'Charts' };
 * tfvis.render.table(surface, { headers, values });
 * ```
 *
 * @param opts.fontSize fontSize in pixels for text in the chart.
 *
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function table(container: Drawable, data: TableData, opts?: {
    fontSize?: number;
}): void;

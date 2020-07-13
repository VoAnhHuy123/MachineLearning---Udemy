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
import { Drawable, XYPlotData, XYPlotOptions } from '../types';
/**
 * Renders a line chart
 *
 * ```js
 * const series1 = Array(100).fill(0)
 *   .map(y => Math.random() * 100 - (Math.random() * 50))
 *   .map((y, x) => ({ x, y, }));
 *
 * const series2 = Array(100).fill(0)
 *   .map(y => Math.random() * 100 - (Math.random() * 150))
 *   .map((y, x) => ({ x, y, }));
 *
 * const series = ['First', 'Second'];
 * const data = { values: [series1, series2], series }
 *
 * const surface = { name: 'Line chart', tab: 'Charts' };
 * tfvis.render.linechart(surface, data);
 * ```
 *
 * ```js
 * const series1 = Array(100).fill(0)
 *   .map(y => Math.random() * 100 + 50)
 *   .map((y, x) => ({ x, y, }));
 *
 * const data = { values: [series1] }
 *
 * // Render to visor
 * const surface = { name: 'Zoomed Line Chart', tab: 'Charts' };
 * tfvis.render.linechart(surface, data, { zoomToFit: true });
 * ```
 *
 */
/** @doc {heading: 'Charts', namespace: 'render'} */
export declare function linechart(container: Drawable, data: XYPlotData, opts?: XYPlotOptions): Promise<void>;

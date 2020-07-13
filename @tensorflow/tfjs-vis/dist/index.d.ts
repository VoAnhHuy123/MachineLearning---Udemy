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
import { barchart } from './render/barchart';
import { confusionMatrix } from './render/confusion_matrix';
import { heatmap } from './render/heatmap';
import { histogram } from './render/histogram';
import { linechart } from './render/linechart';
import { scatterplot } from './render/scatterplot';
import { table } from './render/table';
import { fitCallbacks, history } from './show/history';
import { layer, modelSummary } from './show/model';
import { showPerClassAccuracy } from './show/quality';
import { valuesDistribution } from './show/tensor';
import { accuracy, confusionMatrix as metricsConfusionMatrix, perClassAccuracy } from './util/math';
import { version } from './version';
declare const render: {
    barchart: typeof barchart;
    table: typeof table;
    histogram: typeof histogram;
    linechart: typeof linechart;
    scatterplot: typeof scatterplot;
    confusionMatrix: typeof confusionMatrix;
    heatmap: typeof heatmap;
};
declare const metrics: {
    accuracy: typeof accuracy;
    perClassAccuracy: typeof perClassAccuracy;
    confusionMatrix: typeof metricsConfusionMatrix;
};
declare const show: {
    history: typeof history;
    fitCallbacks: typeof fitCallbacks;
    perClassAccuracy: typeof showPerClassAccuracy;
    valuesDistribution: typeof valuesDistribution;
    layer: typeof layer;
    modelSummary: typeof modelSummary;
};
export { visor } from './visor';
export { render };
export { metrics };
export { show };
export { version as version_vis };
export * from './types';

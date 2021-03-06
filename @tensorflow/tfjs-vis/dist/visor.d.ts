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
import { VisorComponent } from './components/visor';
import { SurfaceInfo, SurfaceInfoStrict } from './types';
/**
 * The primary interface to the visor is the visor() function.
 *
 * This returns a singleton instance of the Visor class. The
 * singleton object will be replaced if the visor is removed from the DOM for
 * some reason.
 *
 * ```js
 * // Show the visor
 * tfvis.visor();
 * ```
 *
 */
/** @doc {heading: 'Visor & Surfaces'} */
export declare function visor(): Visor;
/**
 * An instance of the visor. An instance of this class is created using the
 * `visor()` function.
 */
/** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
export declare class Visor {
    private visorComponent;
    private surfaceList;
    private renderVisor;
    /**
     * The underlying html element of the visor.
     */
    el: HTMLElement;
    constructor(visorComponent: VisorComponent, visorEl: HTMLElement, surfaceList: Map<string, SurfaceInfoStrict>, renderVisor: (domNode: HTMLElement, surfaceList: Map<string, SurfaceInfoStrict>) => VisorComponent);
    /**
     * Creates a surface on the visor
     *
     * Most methods in tfjs-vis that take a surface also take a SurfaceInfo
     * so you rarely need to call this method unless you want to make a custom
     * plot.
     *
     * ```js
     * // Create a surface on a tab
     * tfvis.visor().surface({name: 'My Surface', tab: 'My Tab'});
     * ```
     *
     * ```js
     * // Create a surface and specify its height
     * tfvis.visor().surface({name: 'Custom Height', tab: 'My Tab', styles: {
     *    height: 500
     * }})
     * ```
     *
     * @param options
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    surface(options: SurfaceInfo): {
        container: HTMLElement;
        label: HTMLElement;
        drawArea: HTMLElement;
    };
    /**
     * Returns a boolean indicating if the visor is in 'fullscreen' mode
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    isFullscreen(): boolean;
    /**
     * Returns a boolean indicating if the visor is open
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    isOpen(): boolean;
    /**
     * Closes the visor.
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    close(): void;
    /**
     * Opens the visor.
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    open(): void;
    /**
     * Toggles the visor (closed vs open).
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    toggle(): void;
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    toggleFullScreen(): void;
    /**
     * Binds the ~ (tilde) key to toggle the visor.
     *
     * This is called by default when the visor is initially created.
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    bindKeys(): void;
    /**
     * Unbinds the keyboard control to toggle the visor.
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    unbindKeys(): void;
    /**
     * Sets the active tab for the visor.
     */
    /** @doc {heading: 'Visor & Surfaces', subheading: 'Visor Methods'} */
    setActiveTab(tabName: string): void;
}

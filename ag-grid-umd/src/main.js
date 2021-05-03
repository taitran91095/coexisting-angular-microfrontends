export * from "@ag-grid-community/core";
export * from '@ag-grid-community/client-side-row-model';

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-balham.css";

// start of optional block
// if you don't "self-register" the modules then you need to supply them to the grid
// at instantiation time. See https://www.ag-grid.com/javascript-grid-modules/ for more information
import {ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';

ModuleRegistry.register(ClientSideRowModelModule);
// end of optional block

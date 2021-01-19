/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import perspective from "@finos/perspective";

import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";

import "@finos/perspective-viewer/dist/umd/material.css";

import "./index.css";

const websocket = perspective.websocket('ws://localhost:8090/subscribe');
const table = websocket.open_table('remote_table');

window.addEventListener("load", async () => {
    const viewer = document.createElement("perspective-viewer");
    document.body.append(viewer);
    viewer.load(table);
});

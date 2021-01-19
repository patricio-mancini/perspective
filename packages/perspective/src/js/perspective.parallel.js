/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import * as defaults from "./config/constants.js";
const {WebSocketClient} = require("./websocket/client");

const mod = {
    /**
     * Create a new WebSocketClient instance. The `url` parameter is provided,
     * load the worker at `url` using a WebSocket. s
     * @param {*} url Defaults to `window.location.origin`
     * @param {*} [config] An optional perspective config object override
     */
    websocket(url = window.location.origin.replace("http", "ws")) {
        return new WebSocketClient(new WebSocket(url));
    }
};

for (let prop of Object.keys(defaults)) {
    mod[prop] = defaults[prop];
}

export default mod;

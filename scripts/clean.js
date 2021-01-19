/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const {execute, clean} = require("./script_utils.js");

const args = process.argv.slice(2);

function clean_screenshots() {
    if (args.indexOf("--all") !== -1) {
        try {
            execute`lerna exec --scope="@finos/${process.env.PACKAGE}" -- yarn rimraf screenshots`;
        } catch (e) {}
    } else {
        execute`lerna exec --scope="@finos/*" -- mkdirp screenshots`;
        execute`lerna run clean:screenshots --ignore-missing --scope="@finos/${process.env.PACKAGE}"`;
    }
}

try {
    if (!process.env.PSP_PROJECT || args.indexOf("--deps") > -1) {
        clean`packages/perspective/build`;
    }
    clean_screenshots();
} catch (e) {
    console.error(e.message);
    process.exit(1);
}

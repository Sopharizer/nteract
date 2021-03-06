import * as constants from "../../../src/notebook/constants";
import { MetadataRecord } from "../../../src/notebook/records";

import { appendCellToNotebook, emptyCodeCell } from "@nteract/commutable";

import { dummyCommutable } from "dummy-nb";

import reducers from "../../../src/notebook/reducers";

const initialDocument = new Map();
initialDocument.set(
  "notebook",
  appendCellToNotebook(dummyCommutable, emptyCodeCell)
);

describe("changeFilename", () => {
  test("returns the same originalState if filename is undefined", () => {
    const originalState = {
      metadata: new MetadataRecord({
        filename: "original.ipynb"
      })
    };

    const action = { type: constants.CHANGE_FILENAME };

    const state = reducers(originalState, action);
    expect(state.metadata.filename).toBe("original.ipynb");
  });
  test("sets the filename if given a valid one", () => {
    const originalState = {
      metadata: new MetadataRecord({
        filename: "original.ipynb"
      })
    };

    const action = { type: constants.CHANGE_FILENAME, filename: "test.ipynb" };

    const state = reducers(originalState, action);
    expect(state.metadata.filename).toBe("test.ipynb");
  });
});

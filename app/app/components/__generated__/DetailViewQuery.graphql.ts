/**
 * @generated SignedSource<<d88a2107115e8dd8eebf9f76ba3d72e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DetailViewQuery$variables = {
  filmID: string;
};
export type DetailViewQuery$data = {
  readonly film: {
    readonly characterConnection: {
      readonly characters: ReadonlyArray<{
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly created: string | null;
    readonly director: string | null;
    readonly edited: string | null;
    readonly episodeID: number | null;
    readonly id: string;
    readonly producers: ReadonlyArray<string | null> | null;
    readonly releaseDate: string | null;
    readonly title: string | null;
  } | null;
};
export type DetailViewQuery = {
  response: DetailViewQuery$data;
  variables: DetailViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filmID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filmID",
    "variableName": "filmID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "producers",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "edited",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmCharactersConnection",
            "kind": "LinkedField",
            "name": "characterConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "characters",
                "plural": true,
                "selections": [
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmCharactersConnection",
            "kind": "LinkedField",
            "name": "characterConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "characters",
                "plural": true,
                "selections": [
                  (v10/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "26d326e4ba70e31cf58ce88f3c72bf2c",
    "id": null,
    "metadata": {},
    "name": "DetailViewQuery",
    "operationKind": "query",
    "text": "query DetailViewQuery(\n  $filmID: ID!\n) {\n  film(filmID: $filmID) {\n    episodeID\n    title\n    id\n    releaseDate\n    director\n    created\n    producers\n    edited\n    characterConnection {\n      characters {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "022260aaf59bf52e2ef96219d4c99a93";

export default node;

/**
 * @generated SignedSource<<ce8434d36761630704e65f4355ea13e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ListQuery$variables = {};
export type ListQuery$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
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
    } | null> | null;
  } | null;
};
export type ListQuery = {
  response: ListQuery$data;
  variables: ListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "producers",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "edited",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
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
                      (v8/*: any*/)
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
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
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
                      (v8/*: any*/),
                      (v2/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a72a9c3ed434cb7520e826bcb6c0a188",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery {\n  allFilms {\n    films {\n      episodeID\n      title\n      id\n      releaseDate\n      director\n      created\n      producers\n      edited\n      characterConnection {\n        characters {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "79bb09be9602827e7484ea96a203234b";

export default node;

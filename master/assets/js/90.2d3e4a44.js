(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{750:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-020-limiting-txs-size-inside-a-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-020-limiting-txs-size-inside-a-block"}},[e._v("#")]),e._v(" ADR 020: Limiting txs size inside a block")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("13-08-2018: Initial Draft\n15-08-2018: Second version after Dev's comments\n28-08-2018: Third version after Ethan's comments\n30-08-2018: AminoOverheadForBlock => MaxAminoOverheadForBlock\n31-08-2018: Bounding evidence and chain ID\n13-01-2019: Add section on MaxBytes vs MaxDataBytes")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("We currently use MaxTxs to reap txs from the mempool when proposing a block,\nbut enforce MaxBytes when unmarshaling a block, so we could easily propose a\nblock thats too large to be valid.")]),e._v(" "),a("p",[e._v("We should just remove MaxTxs all together and stick with MaxBytes, and have a\n"),a("code",[e._v("mempool.ReapMaxBytes")]),e._v(".")]),e._v(" "),a("p",[e._v("But we can't just reap BlockSize.MaxBytes, since MaxBytes is for the entire block,\nnot for the txs inside the block. There's extra amino overhead + the actual\nheaders on top of the actual transactions + evidence + last commit.\nWe could also consider using a MaxDataBytes instead of or in addition to MaxBytes.")]),e._v(" "),a("h2",{attrs:{id:"maxbytes-vs-maxdatabytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxbytes-vs-maxdatabytes"}},[e._v("#")]),e._v(" MaxBytes vs MaxDataBytes")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3045",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #3045"),a("OutboundLink")],1),e._v(" suggested\nadditional clarity/justification was necessary here, wither respect to the use\nof MaxDataBytes in addition to, or instead of, MaxBytes.")]),e._v(" "),a("p",[e._v('MaxBytes provides a clear limit on the total size of a block that requires no\nadditional calculation if you want to use it to bound resource usage, and there\nhas been considerable discussions about optimizing tendermint around 1MB blocks.\nRegardless, we need some maximum on the size of a block so we can avoid\nunmarshaling blocks that are too big during the consensus, and it seems more\nstraightforward to provide a single fixed number for this rather than a\ncomputation of "MaxDataBytes + everything else you need to make room for\n(signatures, evidence, header)". MaxBytes provides a simple bound so we can\nalways say "blocks are less than X MB".')]),e._v(" "),a("p",[e._v("Having both MaxBytes and MaxDataBytes feels like unnecessary complexity. It's\nnot particularly surprising for MaxBytes to imply the maximum size of the\nentire block (not just txs), one just has to know that a block includes header,\ntxs, evidence, votes. For more fine grained control over the txs included in the\nblock, there is the MaxGas. In practice, the MaxGas may be expected to do most of\nthe tx throttling, and the MaxBytes to just serve as an upper bound on the total\nsize. Applications can use MaxGas as a MaxDataBytes by just taking the gas for\nevery tx to be its size in bytes.")]),e._v(" "),a("h2",{attrs:{id:"proposed-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposed-solution"}},[e._v("#")]),e._v(" Proposed solution")]),e._v(" "),a("p",[e._v("Therefore, we should")]),e._v(" "),a("ol",[a("li",[e._v("Get rid of MaxTxs.")]),e._v(" "),a("li",[e._v("Rename MaxTxsBytes to MaxBytes.")])]),e._v(" "),a("p",[e._v("When we need to ReapMaxBytes from the mempool, we calculate the upper bound as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"RXhhY3RMYXN0Q29tbWl0Qnl0ZXMgPSB7bnVtYmVyIG9mIHZhbGlkYXRvcnMgY3VycmVudGx5IGVuYWJsZWR9ICoge01heFZvdGVCeXRlc30KTWF4RXZpZGVuY2VCeXRlc1BlckJsb2NrID0gTWF4Qnl0ZXMgLyAxMApFeGFjdEV2aWRlbmNlQnl0ZXMgPSBjcy5ldnBvb2wuUGVuZGluZ0V2aWRlbmNlKE1heEV2aWRlbmNlQnl0ZXNQZXJCbG9jaykgKiBNYXhFdmlkZW5jZUJ5dGVzCgptZW1wb29sLlJlYXBNYXhCeXRlcyhNYXhCeXRlcyAtIE1heEFtaW5vT3ZlcmhlYWRGb3JCbG9jayAtIEV4YWN0TGFzdENvbW1pdEJ5dGVzIC0gRXhhY3RFdmlkZW5jZUJ5dGVzIC0gTWF4SGVhZGVyQnl0ZXMpCg=="}}),e._v(" "),a("p",[e._v("where MaxVoteBytes, MaxEvidenceBytes, MaxHeaderBytes and MaxAminoOverheadForBlock\nare constants defined inside the "),a("code",[e._v("types")]),e._v(" package:")]),e._v(" "),a("ul",[a("li",[e._v("MaxVoteBytes - 170 bytes")]),e._v(" "),a("li",[e._v("MaxEvidenceBytes - 364 bytes")]),e._v(" "),a("li",[e._v("MaxHeaderBytes - 476 bytes (~276 bytes hashes + 200 bytes - 50 UTF-8 encoded\nsymbols of chain ID 4 bytes each in the worst case + amino overhead)")]),e._v(" "),a("li",[e._v("MaxAminoOverheadForBlock - 8 bytes (assuming MaxHeaderBytes includes amino\noverhead for encoding header, MaxVoteBytes - for encoding vote, etc.)")])]),e._v(" "),a("p",[e._v("ChainID needs to bound to 50 symbols max.")]),e._v(" "),a("p",[e._v("When reaping evidence, we use MaxBytes to calculate the upper bound (e.g. 1/10)\nto save some space for transactions.")]),e._v(" "),a("p",[e._v("NOTE while reaping the "),a("code",[e._v("max int")]),e._v(" bytes in mempool, we should account that every\ntransaction will take "),a("code",[e._v("len(tx)+aminoOverhead")]),e._v(", where aminoOverhead=1-4 bytes.")]),e._v(" "),a("p",[e._v("We should write a test that fails if the underlying structs got changed, but\nMaxXXX stayed the same.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("one way to limit the size of a block")]),e._v(" "),a("li",[e._v("less variables to configure")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("constants that need to be adjusted if the underlying structs got changed")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{793:function(e,t,i){"use strict";i.r(t);var a=i(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adr-064-batch-verification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adr-064-batch-verification"}},[e._v("#")]),e._v(" ADR 064: Batch Verification")]),e._v(" "),i("h2",{attrs:{id:"changelog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),i("ul",[i("li",[e._v("January 28, 2021: Created (@marbar3778)")])]),e._v(" "),i("h2",{attrs:{id:"context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),i("p",[e._v("Tendermint uses public private key cryptography for validator signing. When a block is proposed and voted on validators sign a message representing acceptance of a block, rejection is signaled via a nil vote. These signatures are also used to verify previous blocks are correct if a node is syncing. Currently, Tendermint requires each signature to be verified individually, this leads to a slow down of block times.")]),e._v(" "),i("p",[e._v("Batch Verification is the process of taking many messages, keys, and signatures adding them together and verifying them all at once. The public key can be the same in which case it would mean a single user is signing many messages. In our case each public key is unique, each validator has their own and contribute a unique message. The algorithm can vary from curve to curve but the performance benefit, over single verifying messages, public keys and signatures is shared.")]),e._v(" "),i("h2",{attrs:{id:"alternative-approaches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),i("ul",[i("li",[e._v("Signature aggregation\n"),i("ul",[i("li",[e._v("Signature aggregation is an alternative to batch verification. Signature aggregation leads to fast verification and smaller block sizes. At the time of writing this ADR there is on going work to enable signature aggregation in Tendermint. The reason why we have opted to not introduce it at this time is because every validator signs a unique message.\nSigning a unique message prevents aggregation before verification. For example if we were to implement signature aggregation with BLS, there could be a potential slow down of 10x-100x in verification speeds.")])])])]),e._v(" "),i("h2",{attrs:{id:"decision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),i("p",[e._v("Adopt Batch Verification.")]),e._v(" "),i("h2",{attrs:{id:"detailed-design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),i("p",[e._v("A new interface will be introduced. This interface will have three methods "),i("code",[e._v("NewBatchVerifier")]),e._v(", "),i("code",[e._v("Add")]),e._v(" and "),i("code",[e._v("VerifyBatch")]),e._v(".")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXRjaFZlcmlmaWVyIGludGVyZmFjZSB7CiAgQWRkKGtleSBjcnlwdG8uUHVia2V5LCBzaWduYXR1cmUsIG1lc3NhZ2UgW11ieXRlKSBlcnJvciAvLyBBZGQgYXBwZW5kcyBhbiBlbnRyeSBpbnRvIHRoZSBCYXRjaFZlcmlmaWVyLgogIFZlcmlmeSgpIGJvb2wgLy8gVmVyaWZ5IHZlcmlmaWVzIGFsbCB0aGUgZW50cmllcyBpbiB0aGUgQmF0Y2hWZXJpZmllci4gSWYgdGhlIHZlcmlmaWNhdGlvbiBmYWlscyBpdCBpcyB1bmtub3duIHdoaWNoIGVudHJ5IGZhaWxlZCBhbmQgZWFjaCBlbnRyeSB3aWxsIG5lZWQgdG8gYmUgdmVyaWZpZWQgaW5kaXZpZHVhbGx5Lgp9Cg=="}}),e._v(" "),i("ul",[i("li",[i("code",[e._v("NewBatchVerifier")]),e._v(" creates a new verifier. This verifier will be populated with entries to be verified.")]),e._v(" "),i("li",[i("code",[e._v("Add")]),e._v(" adds an entry to the Verifier. Add accepts a public key and two slice of bytes (signature and message).")]),e._v(" "),i("li",[i("code",[e._v("Verify")]),e._v(" verifies all the entires. At the end of Verify if the underlying API does not reset the Verifier to its initial state (empty), it should be done here. This prevents accidentally reusing the verifier with entries from a previous verification.")])]),e._v(" "),i("p",[e._v("Above there is mention of an entry. An entry can be constructed in many ways depending on the needs of the underlying curve. A simple approach would be:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBlbnRyeSBzdHJ1Y3QgewogIHB1YktleSBjcnlwdG8uUHVia2V5CiAgc2lnbmF0dXJlIFtdYnl0ZQogIG1lc3NhZ2UgW11ieXRlCn0K"}}),e._v(" "),i("p",[e._v("The main reason this approach is being taken is to prevent simple mistakes. Some APIs allow the user to create three slices and pass them to the "),i("code",[e._v("VerifyBatch")]),e._v(" function but this relies on the user to safely generate all the slices (see example below). We would like to minimize the possibility of making a mistake.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBWZXJpZnkoa2V5cyBbXWNyeXB0by5QdWJrZXksIHNpZ25hdHVyZXMsIG1lc3NhZ2VzW11bXWJ5dGUpIGJvb2wK"}}),e._v(" "),i("p",[e._v("This change will not affect any users in anyway other than faster verification times.")]),e._v(" "),i("p",[e._v("This new api will be used for verification in both consensus and block syncing. Within the current Verify functions there will be a check to see if the key types supports the BatchVerification API. If it does it will execute batch verification, if not single signature verification will be used.")]),e._v(" "),i("h4",{attrs:{id:"consensus"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[e._v("#")]),e._v(" Consensus")]),e._v(" "),i("p",[e._v("The process within consensus will be to wait for 2/3+ of the votes to be received, once they are received "),i("code",[e._v("Verify()")]),e._v(" will be called to batch verify all the messages. The messages that come in after 2/3+ has been verified will be individually verified.")]),e._v(" "),i("h4",{attrs:{id:"block-sync-light-client"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#block-sync-light-client"}},[e._v("#")]),e._v(" Block Sync & Light Client")]),e._v(" "),i("p",[e._v("The process for block sync & light client verification will be to verify only 2/3+ in a batch style. Since these processes are not participating in consensus there is no need to wait for more messages.")]),e._v(" "),i("p",[e._v("If batch verifications fails for any reason, it will not be known which entry caused the failure. Verification will need to revert to single signature verification.")]),e._v(" "),i("p",[e._v("Starting out, only ed25519 will support batch verification.")]),e._v(" "),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),i("p",[e._v("Proposed")]),e._v(" "),i("h3",{attrs:{id:"positive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),i("ul",[i("li",[e._v("Faster verification times, if the curve supports it")])]),e._v(" "),i("h3",{attrs:{id:"negative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),i("ul",[i("li",[e._v("No way to see which key failed verification\n"),i("ul",[i("li",[e._v("A failure means reverting back to single signature verification.")])])])]),e._v(" "),i("h3",{attrs:{id:"neutral"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/hdevalence/ed25519consensus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ed25519 Library"),i("OutboundLink")],1),e._v(" "),i("a",{attrs:{href:"https://ed25519.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ed25519 spec"),i("OutboundLink")],1),e._v(" "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1319",target:"_blank",rel:"noopener noreferrer"}},[e._v("Signature Aggregation for votes"),i("OutboundLink")],1),e._v(" "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2840",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposer-based timestamps"),i("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
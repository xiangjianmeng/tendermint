(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{719:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("h2",{attrs:{id:"protocol-buffers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protocol-buffers"}},[e._v("#")]),e._v(" Protocol Buffers")]),e._v(" "),o("p",[e._v("Tendermint uses "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1),e._v(", specifically proto3, for all data structures.")]),e._v(" "),o("p",[e._v("Please see the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3 language guide"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("h2",{attrs:{id:"byte-arrays"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#byte-arrays"}},[e._v("#")]),e._v(" Byte Arrays")]),e._v(" "),o("p",[e._v("The encoding of a byte array is simply the raw-bytes prefixed with the length of\nthe array as a "),o("code",[e._v("UVarint")]),e._v(" (what proto calls a "),o("code",[e._v("Varint")]),e._v(").")]),e._v(" "),o("p",[e._v("For details on varints, see the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/encoding#varints",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nspec"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For example, the byte-array "),o("code",[e._v("[0xA, 0xB]")]),e._v(" would be encoded as "),o("code",[e._v("0x020A0B")]),e._v(",\nwhile a byte-array containing 300 entires beginning with "),o("code",[e._v("[0xA, 0xB, ...]")]),e._v(" would\nbe encoded as "),o("code",[e._v("0xAC020A0B...")]),e._v(" where "),o("code",[e._v("0xAC02")]),e._v(" is the UVarint encoding of 300.")]),e._v(" "),o("h2",{attrs:{id:"hashing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hashing"}},[e._v("#")]),e._v(" Hashing")]),e._v(" "),o("p",[e._v("Tendermint uses "),o("code",[e._v("SHA256")]),e._v(" as its hash function.\nObjects are always Amino encoded before being hashed.\nSo "),o("code",[e._v("SHA256(obj)")]),e._v(" is short for "),o("code",[e._v("SHA256(ProtoEncoding(obj))")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"public-key-cryptography"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#public-key-cryptography"}},[e._v("#")]),e._v(" Public Key Cryptography")]),e._v(" "),o("p",[e._v("Tendermint uses Protobuf "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#oneof",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oneof"),o("OutboundLink")],1),e._v("\nto distinguish between different types public keys, and signatures.\nAdditionally, for each public key, Tendermint\ndefines an Address function that can be used as a more compact identifier in\nplace of the public key. Here we list the concrete types, their names,\nand prefix bytes for public keys and signatures, as well as the address schemes\nfor each PubKey. Note for brevity we don't\ninclude details of the private keys beyond their type and name.")]),e._v(" "),o("h3",{attrs:{id:"key-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#key-types"}},[e._v("#")]),e._v(" Key Types")]),e._v(" "),o("p",[e._v("Each type specifies it's own pubkey, address, and signature format.")]),e._v(" "),o("h4",{attrs:{id:"ed25519"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ed25519"}},[e._v("#")]),e._v(" Ed25519")]),e._v(" "),o("p",[e._v("The address is the first 20-bytes of the SHA256 hash of the raw 32-byte public key:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YWRkcmVzcyA9IFNIQTI1NihwdWJrZXkpWzoyMF0K"}}),e._v(" "),o("p",[e._v("The signature is the raw 64-byte ED25519 signature.")]),e._v(" "),o("p",[e._v("Tendermint adopted "),o("a",{attrs:{href:"https://zips.z.cash/zip-0215",target:"_blank",rel:"noopener noreferrer"}},[e._v("zip215"),o("OutboundLink")],1),e._v(" for verification of ed25519 signatures.")]),e._v(" "),o("blockquote",[o("p",[e._v("Note: This change will be released in the next major release of Tendermint-Go (0.35).")])]),e._v(" "),o("h4",{attrs:{id:"secp256k1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secp256k1"}},[e._v("#")]),e._v(" Secp256k1")]),e._v(" "),o("p",[e._v("The address is the first 20-bytes of the SHA256 hash of the raw 32-byte public key:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YWRkcmVzcyA9IFNIQTI1NihwdWJrZXkpWzoyMF0K"}}),e._v(" "),o("h2",{attrs:{id:"other-common-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-common-types"}},[e._v("#")]),e._v(" Other Common Types")]),e._v(" "),o("h3",{attrs:{id:"bitarray"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bitarray"}},[e._v("#")]),e._v(" BitArray")]),e._v(" "),o("p",[e._v("The BitArray is used in some consensus messages to represent votes received from\nvalidators, or parts received in a block. It is represented\nwith a struct containing the number of bits ("),o("code",[e._v("Bits")]),e._v(") and the bit-array itself\nencoded in base64 ("),o("code",[e._v("Elems")]),e._v(").")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Type")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("bits")]),e._v(" "),o("td",[e._v("int64")])]),e._v(" "),o("tr",[o("td",[e._v("elems")]),e._v(" "),o("td",[e._v("slice of int64 ("),o("code",[e._v("[]int64")]),e._v(")")])])])]),e._v(" "),o("p",[e._v("Note BitArray receives a special JSON encoding in the form of "),o("code",[e._v("x")]),e._v(" and "),o("code",[e._v("_")]),e._v("\nrepresenting "),o("code",[e._v("1")]),e._v(" and "),o("code",[e._v("0")]),e._v(". Ie. the BitArray "),o("code",[e._v("10110")]),e._v(" would be JSON encoded as\n"),o("code",[e._v('"x_xx_"')])]),e._v(" "),o("h3",{attrs:{id:"part"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part"}},[e._v("#")]),e._v(" Part")]),e._v(" "),o("p",[e._v("Part is used to break up blocks into pieces that can be gossiped in parallel\nand securely verified using a Merkle tree of the parts.")]),e._v(" "),o("p",[e._v("Part contains the index of the part ("),o("code",[e._v("Index")]),e._v("), the actual\nunderlying data of the part ("),o("code",[e._v("Bytes")]),e._v("), and a Merkle proof that the part is contained in\nthe set ("),o("code",[e._v("Proof")]),e._v(").")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Type")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("index")]),e._v(" "),o("td",[e._v("uint32")])]),e._v(" "),o("tr",[o("td",[e._v("bytes")]),e._v(" "),o("td",[e._v("slice of bytes ("),o("code",[e._v("[]byte")]),e._v(")")])]),e._v(" "),o("tr",[o("td",[e._v("proof")]),e._v(" "),o("td",[o("a",{attrs:{href:"#merkle-proof"}},[e._v("proof")])])])])]),e._v(" "),o("p",[e._v("See details of SimpleProof, below.")]),e._v(" "),o("h3",{attrs:{id:"makeparts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#makeparts"}},[e._v("#")]),e._v(" MakeParts")]),e._v(" "),o("p",[e._v("Encode an object using Protobuf and slice it into parts.\nTendermint uses a part size of 65536 bytes, and allows a maximum of 1601 parts\n(see "),o("code",[e._v("types.MaxBlockPartsCount")]),e._v("). This corresponds to the hard-coded block size\nlimit of 100MB.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBNYWtlUGFydHMoYmxvY2sgQmxvY2spIFtdUGFydAo="}}),e._v(" "),o("h2",{attrs:{id:"merkle-trees"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#merkle-trees"}},[e._v("#")]),e._v(" Merkle Trees")]),e._v(" "),o("p",[e._v("For an overview of Merkle trees, see\n"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("wikipedia"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("We use the RFC 6962 specification of a merkle tree, with sha256 as the hash function.\nMerkle trees are used throughout Tendermint to compute a cryptographic digest of a data structure.\nThe differences between RFC 6962 and the simplest form a merkle tree are that:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v('leaf nodes and inner nodes have different hashes.\nThis is for "second pre-image resistance", to prevent the proof to an inner node being valid as the proof of a leaf.\nThe leaf nodes are '),o("code",[e._v("SHA256(0x00 || leaf_data)")]),e._v(", and inner nodes are "),o("code",[e._v("SHA256(0x01 || left_hash || right_hash)")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("When the number of items isn't a power of two, the left half of the tree is as big as it could be.\n(The largest power of two less than the number of items) This allows new leaves to be added with less\nrecomputation. For example:")])])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgU2ltcGxlIFRyZWUgd2l0aCA2IGl0ZW1zICAgICAgICAgICBTaW1wbGUgVHJlZSB3aXRoIDcgaXRlbXMKCiAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqCiAgICAgICAgICAgICAvIFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gXAogICAgICAgICAgIC8gICAgIFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgXAogICAgICAgICAvICAgICAgICAgXCAgICAgICAgICAgICAgICAgICAgICAgIC8gICAgICAgICBcCiAgICAgICAvICAgICAgICAgICAgIFwgICAgICAgICAgICAgICAgICAgIC8gICAgICAgICAgICAgXAogICAgICAqICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAqCiAgICAgLyBcICAgICAgICAgICAgIC8gXCAgICAgICAgICAgICAgICAvIFwgICAgICAgICAgICAgLyBcCiAgICAvICAgXCAgICAgICAgICAgLyAgIFwgICAgICAgICAgICAgIC8gICBcICAgICAgICAgICAvICAgXAogICAvICAgICBcICAgICAgICAgLyAgICAgXCAgICAgICAgICAgIC8gICAgIFwgICAgICAgICAvICAgICBcCiAgKiAgICAgICAqICAgICAgIGg0ICAgICBoNSAgICAgICAgICAqICAgICAgICogICAgICAgKiAgICAgICBoNgogLyBcICAgICAvIFwgICAgICAgICAgICAgICAgICAgICAgICAvIFwgICAgIC8gXCAgICAgLyBcCmgwICBoMSAgaDIgaDMgICAgICAgICAgICAgICAgICAgICAgaDAgIGgxICBoMiAgaDMgIGg0ICBoNQo="}}),e._v(" "),o("h3",{attrs:{id:"merkleroot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#merkleroot"}},[e._v("#")]),e._v(" MerkleRoot")]),e._v(" "),o("p",[e._v("The function "),o("code",[e._v("MerkleRoot")]),e._v(" is a simple recursive function defined as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU0hBMjU2KFtdYnl0ZXt9KQpmdW5jIGVtcHR5SGFzaCgpIFtdYnl0ZSB7CiAgICByZXR1cm4gdG1oYXNoLlN1bShbXWJ5dGV7fSkKfQoKLy8gU0hBMjU2KDB4MDAgfHwgbGVhZikKZnVuYyBsZWFmSGFzaChsZWFmIFtdYnl0ZSkgW11ieXRlIHsKIHJldHVybiB0bWhhc2guU3VtKGFwcGVuZCgweDAwLCBsZWFmLi4uKSkKfQoKLy8gU0hBMjU2KDB4MDEgfHwgbGVmdCB8fCByaWdodCkKZnVuYyBpbm5lckhhc2gobGVmdCBbXWJ5dGUsIHJpZ2h0IFtdYnl0ZSkgW11ieXRlIHsKIHJldHVybiB0bWhhc2guU3VtKGFwcGVuZCgweDAxLCBhcHBlbmQobGVmdCwgcmlnaHQuLi4pLi4uKSkKfQoKLy8gbGFyZ2VzdCBwb3dlciBvZiAyIGxlc3MgdGhhbiBrCmZ1bmMgZ2V0U3BsaXRQb2ludChrIGludCkgeyAuLi4gfQoKZnVuYyBNZXJrbGVSb290KGl0ZW1zIFtdW11ieXRlKSBbXWJ5dGV7CiBzd2l0Y2ggbGVuKGl0ZW1zKSB7CiBjYXNlIDA6CiAgcmV0dXJuIGVtcHRoSGFzaCgpCiBjYXNlIDE6CiAgcmV0dXJuIGxlYWZIYXNoKGl0ZW1zWzBdKQogZGVmYXVsdDoKICBrIDo9IGdldFNwbGl0UG9pbnQobGVuKGl0ZW1zKSkKICBsZWZ0IDo9IE1lcmtsZVJvb3QoaXRlbXNbOmtdKQogIHJpZ2h0IDo9IE1lcmtsZVJvb3QoaXRlbXNbazpdKQogIHJldHVybiBpbm5lckhhc2gobGVmdCwgcmlnaHQpCiB9Cn0K"}}),e._v(" "),o("p",[e._v("Note: "),o("code",[e._v("MerkleRoot")]),e._v(" operates on items which are arbitrary byte arrays, not\nnecessarily hashes. For items which need to be hashed first, we introduce the\n"),o("code",[e._v("Hashes")]),e._v(" function:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBIYXNoZXMoaXRlbXMgW11bXWJ5dGUpIFtdW11ieXRlIHsKICAgIHJldHVybiBTSEEyNTYgb2YgZWFjaCBpdGVtCn0K"}}),e._v(" "),o("p",[e._v("Note: we will abuse notion and invoke "),o("code",[e._v("MerkleRoot")]),e._v(" with arguments of type "),o("code",[e._v("struct")]),e._v(" or type "),o("code",[e._v("[]struct")]),e._v(".\nFor "),o("code",[e._v("struct")]),e._v(" arguments, we compute a "),o("code",[e._v("[][]byte")]),e._v(" containing the protobuf encoding of each\nfield in the struct, in the same order the fields appear in the struct.\nFor "),o("code",[e._v("[]struct")]),e._v(" arguments, we compute a "),o("code",[e._v("[][]byte")]),e._v(" by protobuf encoding the individual "),o("code",[e._v("struct")]),e._v(" elements.")]),e._v(" "),o("h3",{attrs:{id:"merkle-proof"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#merkle-proof"}},[e._v("#")]),e._v(" Merkle Proof")]),e._v(" "),o("p",[e._v("Proof that a leaf is in a Merkle tree is composed as follows:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Type")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("total")]),e._v(" "),o("td",[e._v("int64")])]),e._v(" "),o("tr",[o("td",[e._v("index")]),e._v(" "),o("td",[e._v("int64")])]),e._v(" "),o("tr",[o("td",[e._v("leafHash")]),e._v(" "),o("td",[e._v("slice of bytes ("),o("code",[e._v("[]byte")]),e._v(")")])]),e._v(" "),o("tr",[o("td",[e._v("aunts")]),e._v(" "),o("td",[e._v("Matrix of bytes ([][]byte)")])])])]),e._v(" "),o("p",[e._v("Which is verified as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAocHJvb2YgUHJvb2YpIFZlcmlmeShyb290SGFzaCBbXWJ5dGUsIGxlYWYgW11ieXRlKSBib29sIHsKIGFzc2VydChwcm9vZi5MZWFmSGFzaCwgbGVhZkhhc2gobGVhZikKCiBjb21wdXRlZEhhc2ggOj0gY29tcHV0ZUhhc2hGcm9tQXVudHMocHJvb2YuSW5kZXgsIHByb29mLlRvdGFsLCBwcm9vZi5MZWFmSGFzaCwgcHJvb2YuQXVudHMpCiAgICByZXR1cm4gY29tcHV0ZWRIYXNoID09IHJvb3RIYXNoCn0KCmZ1bmMgY29tcHV0ZUhhc2hGcm9tQXVudHMoaW5kZXgsIHRvdGFsIGludCwgbGVhZkhhc2ggW11ieXRlLCBpbm5lckhhc2hlcyBbXVtdYnl0ZSkgW11ieXRlewogYXNzZXJ0KGluZGV4ICZsdDsgdG90YWwgJmFtcDsmYW1wOyBpbmRleCAmZ3Q7PSAwICZhbXA7JmFtcDsgdG90YWwgJmd0OyAwKQoKIGlmIHRvdGFsID09IDF7CiAgYXNzZXJ0KGxlbihwcm9vZi5BdW50cykgPT0gMCkKICByZXR1cm4gbGVhZkhhc2gKIH0KCiBhc3NlcnQobGVuKGlubmVySGFzaGVzKSAmZ3Q7IDApCgogbnVtTGVmdCA6PSBnZXRTcGxpdFBvaW50KHRvdGFsKSAvLyBsYXJnZXN0IHBvd2VyIG9mIDIgbGVzcyB0aGFuIHRvdGFsCiBpZiBpbmRleCAmbHQ7IG51bUxlZnQgewogIGxlZnRIYXNoIDo9IGNvbXB1dGVIYXNoRnJvbUF1bnRzKGluZGV4LCBudW1MZWZ0LCBsZWFmSGFzaCwgaW5uZXJIYXNoZXNbOmxlbihpbm5lckhhc2hlcyktMV0pCiAgYXNzZXJ0KGxlZnRIYXNoICE9IG5pbCkKICByZXR1cm4gaW5uZXJIYXNoKGxlZnRIYXNoLCBpbm5lckhhc2hlc1tsZW4oaW5uZXJIYXNoZXMpLTFdKQogfQogcmlnaHRIYXNoIDo9IGNvbXB1dGVIYXNoRnJvbUF1bnRzKGluZGV4LW51bUxlZnQsIHRvdGFsLW51bUxlZnQsIGxlYWZIYXNoLCBpbm5lckhhc2hlc1s6bGVuKGlubmVySGFzaGVzKS0xXSkKIGFzc2VydChyaWdodEhhc2ggIT0gbmlsKQogcmV0dXJuIGlubmVySGFzaChpbm5lckhhc2hlc1tsZW4oaW5uZXJIYXNoZXMpLTFdLCByaWdodEhhc2gpCn0K"}}),e._v(" "),o("p",[e._v("The number of aunts is limited to 100 ("),o("code",[e._v("MaxAunts")]),e._v(") to protect the node against DOS attacks.\nThis limits the tree size to 2^100 leaves, which should be sufficient for any\nconceivable purpose.")]),e._v(" "),o("h3",{attrs:{id:"iavl-tree"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iavl-tree"}},[e._v("#")]),e._v(" IAVL+ Tree")]),e._v(" "),o("p",[e._v("Because Tendermint only uses a Simple Merkle Tree, application developers are expect to use their own Merkle tree in their applications. For example, the IAVL+ Tree - an immutable self-balancing binary tree for persisting application state is used by the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),o("p",[e._v("Tendermint has its own JSON encoding in order to keep backwards compatibility with the previous RPC layer.")]),e._v(" "),o("p",[e._v("Registered types are encoded as:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6ICZxdW90OyZsdDt0eXBlIG5hbWUmZ3Q7JnF1b3Q7LAogICZxdW90O3ZhbHVlJnF1b3Q7OiAmbHQ7SlNPTiZndDsKfQo="}}),e._v(" "),o("p",[e._v("For instance, an ED25519 PubKey would look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O3RlbmRlcm1pbnQvUHViS2V5RWQyNTUxOSZxdW90OywKICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7dVo0aDYzT0ZXdVEzNlpaNEJkNk5GKy93OWZXVXdyT25jclFzYWNrcnNUaz0mcXVvdDsKfQo="}}),e._v(" "),o("p",[e._v("Where the "),o("code",[e._v('"value"')]),e._v(" is the base64 encoding of the raw pubkey bytes, and the\n"),o("code",[e._v('"type"')]),e._v(" is the type name for Ed25519 pubkeys.")]),e._v(" "),o("h3",{attrs:{id:"signed-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signed-messages"}},[e._v("#")]),e._v(" Signed Messages")]),e._v(" "),o("p",[e._v("Signed messages (eg. votes, proposals) in the consensus are encoded using protobuf.")]),e._v(" "),o("p",[e._v("When signing, the elements of a message are re-ordered so the fixed-length fields\nare first, making it easy to quickly check the type, height, and round.\nThe "),o("code",[e._v("ChainID")]),e._v(" is also appended to the end.\nWe call this encoding the SignBytes. For instance, SignBytes for a vote is the protobuf encoding of the following struct:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBDYW5vbmljYWxWb3RlIHsKICBTaWduZWRNc2dUeXBlICAgICAgICAgICAgIHR5cGUgICAgICA9IDE7ICAKICBzZml4ZWQ2NCAgICAgICAgICAgICAgICAgIGhlaWdodCAgICA9IDI7ICAvLyBjYW5vbmljYWxpemF0aW9uIHJlcXVpcmVzIGZpeGVkIHNpemUgZW5jb2RpbmcgaGVyZQogIHNmaXhlZDY0ICAgICAgICAgICAgICAgICAgcm91bmQgICAgID0gMzsgIC8vIGNhbm9uaWNhbGl6YXRpb24gcmVxdWlyZXMgZml4ZWQgc2l6ZSBlbmNvZGluZyBoZXJlCiAgQ2Fub25pY2FsQmxvY2tJRCAgICAgICAgICBibG9ja19pZCAgPSA0OwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgdGltZXN0YW1wID0gNTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgIGNoYWluX2lkICA9IDY7Cn0K"}}),e._v(" "),o("p",[e._v("The field ordering and the fixed sized encoding for the first three fields is optimized to ease parsing of SignBytes\nin HSMs. It creates fixed offsets for relevant fields that need to be read in this context.")]),e._v(" "),o("blockquote",[o("p",[e._v("Note: All canonical messages are length prefixed.")])]),e._v(" "),o("p",[e._v("For more details, see the "),o("RouterLink",{attrs:{to:"/spec/consensus/signing.html"}},[e._v("signing spec")]),e._v(".\nAlso, see the motivating discussion in\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1622",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1622"),o("OutboundLink")],1),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);
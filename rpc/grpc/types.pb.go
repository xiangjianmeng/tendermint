// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: rpc/grpc/types.proto

package coregrpc

import (
	bytes "bytes"
	fmt "fmt"
	io "io"
	math "math"
	math_bits "math/bits"

	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	golang_proto "github.com/golang/protobuf/proto"
	types "github.com/tendermint/tendermint/abci/types"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = golang_proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type RequestPing struct {
}

func (m *RequestPing) Reset()         { *m = RequestPing{} }
func (m *RequestPing) String() string { return proto.CompactTextString(m) }
func (*RequestPing) ProtoMessage()    {}
func (*RequestPing) Descriptor() ([]byte, []int) {
	return fileDescriptor_15f63baabf91876a, []int{0}
}
func (m *RequestPing) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RequestPing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RequestPing.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RequestPing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestPing.Merge(m, src)
}
func (m *RequestPing) XXX_Size() int {
	return m.Size()
}
func (m *RequestPing) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestPing.DiscardUnknown(m)
}

var xxx_messageInfo_RequestPing proto.InternalMessageInfo

type RequestBroadcastTx struct {
	Tx []byte `protobuf:"bytes,1,opt,name=tx,proto3" json:"tx,omitempty"`
}

func (m *RequestBroadcastTx) Reset()         { *m = RequestBroadcastTx{} }
func (m *RequestBroadcastTx) String() string { return proto.CompactTextString(m) }
func (*RequestBroadcastTx) ProtoMessage()    {}
func (*RequestBroadcastTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_15f63baabf91876a, []int{1}
}
func (m *RequestBroadcastTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RequestBroadcastTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RequestBroadcastTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RequestBroadcastTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestBroadcastTx.Merge(m, src)
}
func (m *RequestBroadcastTx) XXX_Size() int {
	return m.Size()
}
func (m *RequestBroadcastTx) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestBroadcastTx.DiscardUnknown(m)
}

var xxx_messageInfo_RequestBroadcastTx proto.InternalMessageInfo

func (m *RequestBroadcastTx) GetTx() []byte {
	if m != nil {
		return m.Tx
	}
	return nil
}

type ResponsePing struct {
}

func (m *ResponsePing) Reset()         { *m = ResponsePing{} }
func (m *ResponsePing) String() string { return proto.CompactTextString(m) }
func (*ResponsePing) ProtoMessage()    {}
func (*ResponsePing) Descriptor() ([]byte, []int) {
	return fileDescriptor_15f63baabf91876a, []int{2}
}
func (m *ResponsePing) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ResponsePing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ResponsePing.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ResponsePing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResponsePing.Merge(m, src)
}
func (m *ResponsePing) XXX_Size() int {
	return m.Size()
}
func (m *ResponsePing) XXX_DiscardUnknown() {
	xxx_messageInfo_ResponsePing.DiscardUnknown(m)
}

var xxx_messageInfo_ResponsePing proto.InternalMessageInfo

type ResponseBroadcastTx struct {
	CheckTx   *types.ResponseCheckTx   `protobuf:"bytes,1,opt,name=check_tx,json=checkTx,proto3" json:"check_tx,omitempty"`
	DeliverTx *types.ResponseDeliverTx `protobuf:"bytes,2,opt,name=deliver_tx,json=deliverTx,proto3" json:"deliver_tx,omitempty"`
}

func (m *ResponseBroadcastTx) Reset()         { *m = ResponseBroadcastTx{} }
func (m *ResponseBroadcastTx) String() string { return proto.CompactTextString(m) }
func (*ResponseBroadcastTx) ProtoMessage()    {}
func (*ResponseBroadcastTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_15f63baabf91876a, []int{3}
}
func (m *ResponseBroadcastTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ResponseBroadcastTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ResponseBroadcastTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ResponseBroadcastTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResponseBroadcastTx.Merge(m, src)
}
func (m *ResponseBroadcastTx) XXX_Size() int {
	return m.Size()
}
func (m *ResponseBroadcastTx) XXX_DiscardUnknown() {
	xxx_messageInfo_ResponseBroadcastTx.DiscardUnknown(m)
}

var xxx_messageInfo_ResponseBroadcastTx proto.InternalMessageInfo

func (m *ResponseBroadcastTx) GetCheckTx() *types.ResponseCheckTx {
	if m != nil {
		return m.CheckTx
	}
	return nil
}

func (m *ResponseBroadcastTx) GetDeliverTx() *types.ResponseDeliverTx {
	if m != nil {
		return m.DeliverTx
	}
	return nil
}

func init() {
	proto.RegisterType((*RequestPing)(nil), "tendermint.rpc.grpc.RequestPing")
	golang_proto.RegisterType((*RequestPing)(nil), "tendermint.rpc.grpc.RequestPing")
	proto.RegisterType((*RequestBroadcastTx)(nil), "tendermint.rpc.grpc.RequestBroadcastTx")
	golang_proto.RegisterType((*RequestBroadcastTx)(nil), "tendermint.rpc.grpc.RequestBroadcastTx")
	proto.RegisterType((*ResponsePing)(nil), "tendermint.rpc.grpc.ResponsePing")
	golang_proto.RegisterType((*ResponsePing)(nil), "tendermint.rpc.grpc.ResponsePing")
	proto.RegisterType((*ResponseBroadcastTx)(nil), "tendermint.rpc.grpc.ResponseBroadcastTx")
	golang_proto.RegisterType((*ResponseBroadcastTx)(nil), "tendermint.rpc.grpc.ResponseBroadcastTx")
}

func init() { proto.RegisterFile("rpc/grpc/types.proto", fileDescriptor_15f63baabf91876a) }
func init() { golang_proto.RegisterFile("rpc/grpc/types.proto", fileDescriptor_15f63baabf91876a) }

var fileDescriptor_15f63baabf91876a = []byte{
	// 357 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x3f, 0x4b, 0xc3, 0x40,
	0x18, 0xc6, 0x7b, 0x45, 0xfc, 0x73, 0xad, 0x1d, 0xae, 0x22, 0x92, 0xe1, 0xa8, 0x45, 0x6a, 0xa7,
	0x0b, 0xd4, 0xd1, 0xa9, 0x55, 0x10, 0x71, 0x29, 0xa1, 0x93, 0x08, 0x35, 0xbd, 0x1c, 0x69, 0xd0,
	0xe6, 0xce, 0xcb, 0x55, 0xd2, 0x6f, 0xe1, 0x57, 0x70, 0xf3, 0x23, 0xb8, 0x08, 0x8e, 0x8e, 0x1d,
	0x1d, 0x35, 0xf9, 0x12, 0x8e, 0x72, 0x49, 0x63, 0x6f, 0xd0, 0xba, 0x84, 0x27, 0xc7, 0xf3, 0xfc,
	0x78, 0xde, 0x97, 0x17, 0xee, 0x48, 0x41, 0x6d, 0x5f, 0x7f, 0xd4, 0x4c, 0xb0, 0x88, 0x08, 0xc9,
	0x15, 0x47, 0x75, 0xc5, 0x42, 0x8f, 0xc9, 0x49, 0x10, 0x2a, 0x22, 0x05, 0x25, 0xda, 0x60, 0xb5,
	0xd4, 0x38, 0x90, 0xde, 0x50, 0xb8, 0x52, 0xcd, 0xec, 0xcc, 0x67, 0xfb, 0xdc, 0xe7, 0x4b, 0x95,
	0x87, 0xad, 0x5d, 0x77, 0x44, 0x83, 0x1c, 0x67, 0x42, 0x9b, 0xdb, 0xb0, 0xe2, 0xb0, 0xbb, 0x29,
	0x8b, 0x54, 0x3f, 0x08, 0xfd, 0xe6, 0x01, 0x44, 0x8b, 0xdf, 0x9e, 0xe4, 0xae, 0x47, 0xdd, 0x48,
	0x0d, 0x62, 0x54, 0x83, 0x65, 0x15, 0xef, 0x81, 0x06, 0x68, 0x57, 0x9d, 0xb2, 0x8a, 0x9b, 0x35,
	0x58, 0x75, 0x58, 0x24, 0x78, 0x18, 0xb1, 0x2c, 0xf5, 0x08, 0x60, 0xbd, 0x78, 0x30, 0x73, 0x5d,
	0xb8, 0x49, 0xc7, 0x8c, 0xde, 0x0c, 0x17, 0xe9, 0x4a, 0xa7, 0x45, 0x8c, 0x21, 0x74, 0x25, 0x92,
	0x97, 0x29, 0xd2, 0x27, 0xda, 0x3e, 0x88, 0x9d, 0x0d, 0x9a, 0x0b, 0x74, 0x06, 0xa1, 0xc7, 0x6e,
	0x83, 0x7b, 0x26, 0x35, 0xa4, 0x9c, 0x41, 0xda, 0xff, 0x40, 0x4e, 0xf3, 0xc0, 0x20, 0x76, 0xb6,
	0xbc, 0x42, 0x76, 0x5e, 0x00, 0xac, 0xfe, 0x74, 0xeb, 0xf6, 0xcf, 0xd1, 0x05, 0x5c, 0xd3, 0xe5,
	0x51, 0x83, 0xfc, 0xb2, 0x57, 0x62, 0x2c, 0xc5, 0xda, 0xff, 0xc3, 0xb1, 0xdc, 0x00, 0xba, 0x86,
	0x15, 0x73, 0xf0, 0xc3, 0x55, 0x4c, 0xc3, 0x68, 0xb5, 0x57, 0xa2, 0x0d, 0x67, 0xef, 0xea, 0xeb,
	0x13, 0x83, 0xa7, 0x04, 0x83, 0xe7, 0x04, 0x83, 0xb7, 0x04, 0x83, 0x79, 0x82, 0xc1, 0x47, 0x82,
	0xc1, 0x43, 0x8a, 0x4b, 0xaf, 0x29, 0x06, 0xf3, 0x14, 0x97, 0xde, 0x53, 0x5c, 0xba, 0xec, 0xf8,
	0x81, 0x1a, 0x4f, 0x47, 0x84, 0xf2, 0x89, 0xbd, 0xa4, 0x9b, 0xb2, 0x38, 0xaf, 0x63, 0xca, 0x25,
	0xd3, 0x62, 0xb4, 0x9e, 0x5d, 0xc3, 0xd1, 0x77, 0x00, 0x00, 0x00, 0xff, 0xff, 0xc2, 0x1c, 0xbe,
	0x95, 0x7a, 0x02, 0x00, 0x00,
}

func (this *RequestPing) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RequestPing)
	if !ok {
		that2, ok := that.(RequestPing)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	return true
}
func (this *RequestBroadcastTx) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RequestBroadcastTx)
	if !ok {
		that2, ok := that.(RequestBroadcastTx)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if !bytes.Equal(this.Tx, that1.Tx) {
		return false
	}
	return true
}
func (this *ResponsePing) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ResponsePing)
	if !ok {
		that2, ok := that.(ResponsePing)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	return true
}
func (this *ResponseBroadcastTx) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ResponseBroadcastTx)
	if !ok {
		that2, ok := that.(ResponseBroadcastTx)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if !this.CheckTx.Equal(that1.CheckTx) {
		return false
	}
	if !this.DeliverTx.Equal(that1.DeliverTx) {
		return false
	}
	return true
}
func (m *RequestPing) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RequestPing) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RequestPing) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *RequestBroadcastTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RequestBroadcastTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RequestBroadcastTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Tx) > 0 {
		i -= len(m.Tx)
		copy(dAtA[i:], m.Tx)
		i = encodeVarintTypes(dAtA, i, uint64(len(m.Tx)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ResponsePing) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ResponsePing) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ResponsePing) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *ResponseBroadcastTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ResponseBroadcastTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ResponseBroadcastTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.DeliverTx != nil {
		{
			size, err := m.DeliverTx.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTypes(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.CheckTx != nil {
		{
			size, err := m.CheckTx.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTypes(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTypes(dAtA []byte, offset int, v uint64) int {
	offset -= sovTypes(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedRequestPing(r randyTypes, easy bool) *RequestPing {
	this := &RequestPing{}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedRequestBroadcastTx(r randyTypes, easy bool) *RequestBroadcastTx {
	this := &RequestBroadcastTx{}
	v1 := r.Intn(100)
	this.Tx = make([]byte, v1)
	for i := 0; i < v1; i++ {
		this.Tx[i] = byte(r.Intn(256))
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedResponsePing(r randyTypes, easy bool) *ResponsePing {
	this := &ResponsePing{}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedResponseBroadcastTx(r randyTypes, easy bool) *ResponseBroadcastTx {
	this := &ResponseBroadcastTx{}
	if r.Intn(5) != 0 {
		this.CheckTx = types.NewPopulatedResponseCheckTx(r, easy)
	}
	if r.Intn(5) != 0 {
		this.DeliverTx = types.NewPopulatedResponseDeliverTx(r, easy)
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyTypes interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneTypes(r randyTypes) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringTypes(r randyTypes) string {
	v2 := r.Intn(100)
	tmps := make([]rune, v2)
	for i := 0; i < v2; i++ {
		tmps[i] = randUTF8RuneTypes(r)
	}
	return string(tmps)
}
func randUnrecognizedTypes(r randyTypes, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldTypes(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldTypes(dAtA []byte, r randyTypes, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(key))
		v3 := r.Int63()
		if r.Intn(2) == 0 {
			v3 *= -1
		}
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(v3))
	case 1:
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateTypes(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateTypes(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *RequestPing) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *RequestBroadcastTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Tx)
	if l > 0 {
		n += 1 + l + sovTypes(uint64(l))
	}
	return n
}

func (m *ResponsePing) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *ResponseBroadcastTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.CheckTx != nil {
		l = m.CheckTx.Size()
		n += 1 + l + sovTypes(uint64(l))
	}
	if m.DeliverTx != nil {
		l = m.DeliverTx.Size()
		n += 1 + l + sovTypes(uint64(l))
	}
	return n
}

func sovTypes(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTypes(x uint64) (n int) {
	return sovTypes(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *RequestPing) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RequestPing: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RequestPing: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RequestBroadcastTx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RequestBroadcastTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RequestBroadcastTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tx", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Tx = append(m.Tx[:0], dAtA[iNdEx:postIndex]...)
			if m.Tx == nil {
				m.Tx = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ResponsePing) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ResponsePing: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ResponsePing: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ResponseBroadcastTx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ResponseBroadcastTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ResponseBroadcastTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CheckTx", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.CheckTx == nil {
				m.CheckTx = &types.ResponseCheckTx{}
			}
			if err := m.CheckTx.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeliverTx", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.DeliverTx == nil {
				m.DeliverTx = &types.ResponseDeliverTx{}
			}
			if err := m.DeliverTx.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTypes(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTypes
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTypes
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTypes
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTypes        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTypes          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTypes = fmt.Errorf("proto: unexpected end of group")
)

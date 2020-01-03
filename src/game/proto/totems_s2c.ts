// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_totems_info_request {
		public data: totems_data[]; // tag 0
	}

	function _decode_sc_totems_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_totems_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.data = d.roa("totems_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_totems_info_request(self: sc_totems_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.data != undefined) {
			se.woa ("totems_data", self.data, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_totems_info_request"] = {en: _encode_sc_totems_info_request, de: _decode_sc_totems_info_request}
	export class totems_data {
		public id: number; // tag 0
		public lv: number; // tag 1
		public upNum: number; // tag 2
		public todayNum: number; // tag 3
		public todayId: number; // tag 4
		public breach: number; // tag 5
	}

	function _decode_totems_data(d: SprotoTypeDeserialize) {
		let o = new totems_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.lv = d.ri ();
				break;
			case 2:
				o.upNum = d.ri ();
				break;
			case 3:
				o.todayNum = d.ri ();
				break;
			case 4:
				o.todayId = d.ri ();
				break;
			case 5:
				o.breach = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_totems_data(self: totems_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 1);
		}

		if (self.upNum != undefined) {
			se.wi (self.upNum, 2);
		}

		if (self.todayNum != undefined) {
			se.wi (self.todayNum, 3);
		}

		if (self.todayId != undefined) {
			se.wi (self.todayId, 4);
		}

		if (self.breach != undefined) {
			se.wi (self.breach, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["totems_data"] = {en: _encode_totems_data, de: _decode_totems_data}
}

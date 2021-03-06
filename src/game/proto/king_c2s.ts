// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_king_city_attack_request {
		public camp: number; // tag 0
	}

	function _decode_cs_king_city_attack_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_city_attack_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.camp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_city_attack_request(self: cs_king_city_attack_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.camp != undefined) {
			se.wi (self.camp, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_city_attack_request"] = {en: _encode_cs_king_city_attack_request, de: _decode_cs_king_city_attack_request}
	export class cs_king_city_data_request {
		public camp: number; // tag 0
	}

	function _decode_cs_king_city_data_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_city_data_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.camp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_city_data_request(self: cs_king_city_data_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.camp != undefined) {
			se.wi (self.camp, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_city_data_request"] = {en: _encode_cs_king_city_data_request, de: _decode_cs_king_city_data_request}
	export class cs_king_city_guard_request {
		public camp: number; // tag 0
	}

	function _decode_cs_king_city_guard_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_city_guard_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.camp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_city_guard_request(self: cs_king_city_guard_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.camp != undefined) {
			se.wi (self.camp, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_city_guard_request"] = {en: _encode_cs_king_city_guard_request, de: _decode_cs_king_city_guard_request}
	export class cs_king_get_point_reward_request {
		public pointtype: number; // tag 0
		public index: number; // tag 1
	}

	function _decode_cs_king_get_point_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_get_point_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.pointtype = d.ri ();
				break;
			case 1:
				o.index = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_get_point_reward_request(self: cs_king_get_point_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.pointtype != undefined) {
			se.wi (self.pointtype, 0);
		}

		if (self.index != undefined) {
			se.wi (self.index, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_get_point_reward_request"] = {en: _encode_cs_king_get_point_reward_request, de: _decode_cs_king_get_point_reward_request}
	export class cs_king_join_request {
	}

	function _decode_cs_king_join_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_join_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_join_request(self: cs_king_join_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_join_request"] = {en: _encode_cs_king_join_request, de: _decode_cs_king_join_request}
	export class cs_king_join_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_king_join_response(d: SprotoTypeDeserialize) {
		let o = new cs_king_join_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_join_response(self: cs_king_join_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_join_response"] = {en: _encode_cs_king_join_response, de: _decode_cs_king_join_response}
	export class cs_king_leave_request {
	}

	function _decode_cs_king_leave_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_leave_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_leave_request(self: cs_king_leave_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_leave_request"] = {en: _encode_cs_king_leave_request, de: _decode_cs_king_leave_request}
	export class cs_king_my_guard_city_request {
	}

	function _decode_cs_king_my_guard_city_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_my_guard_city_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_my_guard_city_request(self: cs_king_my_guard_city_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_my_guard_city_request"] = {en: _encode_cs_king_my_guard_city_request, de: _decode_cs_king_my_guard_city_request}
	export class cs_king_pay_revive_request {
	}

	function _decode_cs_king_pay_revive_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_pay_revive_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_pay_revive_request(self: cs_king_pay_revive_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_pay_revive_request"] = {en: _encode_cs_king_pay_revive_request, de: _decode_cs_king_pay_revive_request}
	export class cs_king_pk_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_king_pk_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_pk_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_pk_request(self: cs_king_pk_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_pk_request"] = {en: _encode_cs_king_pk_request, de: _decode_cs_king_pk_request}
	export class cs_king_point_data_request {
	}

	function _decode_cs_king_point_data_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_point_data_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_point_data_request(self: cs_king_point_data_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_point_data_request"] = {en: _encode_cs_king_point_data_request, de: _decode_cs_king_point_data_request}
	export class cs_king_team_recruit_request {
	}

	function _decode_cs_king_team_recruit_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_team_recruit_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_team_recruit_request(self: cs_king_team_recruit_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_team_recruit_request"] = {en: _encode_cs_king_team_recruit_request, de: _decode_cs_king_team_recruit_request}
	export class cs_king_transform_request {
	}

	function _decode_cs_king_transform_request(d: SprotoTypeDeserialize) {
		let o = new cs_king_transform_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_king_transform_request(self: cs_king_transform_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_king_transform_request"] = {en: _encode_cs_king_transform_request, de: _decode_cs_king_transform_request}
}


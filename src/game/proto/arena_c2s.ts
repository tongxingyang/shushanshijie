// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_arena_get_reward_request {
	}

	function _decode_cs_arena_get_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_arena_get_reward_request;
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

	function _encode_cs_arena_get_reward_request(self: cs_arena_get_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_get_reward_request"] = {en: _encode_cs_arena_get_reward_request, de: _decode_cs_arena_get_reward_request}
	export class cs_arena_info_request {
	}

	function _decode_cs_arena_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_arena_info_request;
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

	function _encode_cs_arena_info_request(self: cs_arena_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_info_request"] = {en: _encode_cs_arena_info_request, de: _decode_cs_arena_info_request}
	export class cs_arena_info_response {
		public targets: arena_target_data[]; // tag 0
		public rank: number; // tag 1
		public maxrank: number; // tag 2
		public pkcount: number; // tag 3
		public remaintime: number; // tag 4
		public buycount: number; // tag 5
		public medal: number; // tag 6
	}

	function _decode_cs_arena_info_response(d: SprotoTypeDeserialize) {
		let o = new cs_arena_info_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targets = d.roa("arena_target_data");
				break;
			case 1:
				o.rank = d.ri ();
				break;
			case 2:
				o.maxrank = d.ri ();
				break;
			case 3:
				o.pkcount = d.ri ();
				break;
			case 4:
				o.remaintime = d.ri ();
				break;
			case 5:
				o.buycount = d.ri ();
				break;
			case 6:
				o.medal = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_arena_info_response(self: cs_arena_info_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 7);

		if (self.targets != undefined) {
			se.woa ("arena_target_data", self.targets, 0);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 1);
		}

		if (self.maxrank != undefined) {
			se.wi (self.maxrank, 2);
		}

		if (self.pkcount != undefined) {
			se.wi (self.pkcount, 3);
		}

		if (self.remaintime != undefined) {
			se.wi (self.remaintime, 4);
		}

		if (self.buycount != undefined) {
			se.wi (self.buycount, 5);
		}

		if (self.medal != undefined) {
			se.wi (self.medal, 6);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_info_response"] = {en: _encode_cs_arena_info_response, de: _decode_cs_arena_info_response}
	export class cs_arena_pk_request {
		public rank: number; // tag 0
	}

	function _decode_cs_arena_pk_request(d: SprotoTypeDeserialize) {
		let o = new cs_arena_pk_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.rank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_arena_pk_request(self: cs_arena_pk_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.rank != undefined) {
			se.wi (self.rank, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_pk_request"] = {en: _encode_cs_arena_pk_request, de: _decode_cs_arena_pk_request}
	export class cs_arena_rank_request {
	}

	function _decode_cs_arena_rank_request(d: SprotoTypeDeserialize) {
		let o = new cs_arena_rank_request;
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

	function _encode_cs_arena_rank_request(self: cs_arena_rank_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_rank_request"] = {en: _encode_cs_arena_rank_request, de: _decode_cs_arena_rank_request}
	export class cs_arena_rank_response {
		public ranklist: rank_data[]; // tag 0
	}

	function _decode_cs_arena_rank_response(d: SprotoTypeDeserialize) {
		let o = new cs_arena_rank_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ranklist = d.roa("rank_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_arena_rank_response(self: cs_arena_rank_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ranklist != undefined) {
			se.woa ("rank_data", self.ranklist, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_arena_rank_response"] = {en: _encode_cs_arena_rank_response, de: _decode_cs_arena_rank_response}
	export class cs_buy_pk_request {
	}

	function _decode_cs_buy_pk_request(d: SprotoTypeDeserialize) {
		let o = new cs_buy_pk_request;
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

	function _encode_cs_buy_pk_request(self: cs_buy_pk_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_buy_pk_request"] = {en: _encode_cs_buy_pk_request, de: _decode_cs_buy_pk_request}
	export class cs_buy_pk_response {
		public ret: boolean; // tag 0
		public pkcount: number; // tag 1
		public buycount: number; // tag 2
	}

	function _decode_cs_buy_pk_response(d: SprotoTypeDeserialize) {
		let o = new cs_buy_pk_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.pkcount = d.ri ();
				break;
			case 2:
				o.buycount = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_buy_pk_response(self: cs_buy_pk_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.pkcount != undefined) {
			se.wi (self.pkcount, 1);
		}

		if (self.buycount != undefined) {
			se.wi (self.buycount, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_buy_pk_response"] = {en: _encode_cs_buy_pk_response, de: _decode_cs_buy_pk_response}
}

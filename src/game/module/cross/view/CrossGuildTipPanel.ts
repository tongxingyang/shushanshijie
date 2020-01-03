class CrossGuildTipPanel extends BaseEuiView {

    public static LAYER_LEVEL = LayerManager.UI_Popup

	 ////////////////////////////////////////////////////////////////////////////
    // HavingSkillTipSkin.exml
    /////////////////////////////////////////////////////////////////////////////
    protected descTxt: eui.Label;
    /////////////////////////////////////////////////////////////////////////////

	public constructor() {
		super()
		this.skinName = "HavingSkillTipSkin"
		this._AddClick(this, this.CloseSelf)
	}

	childrenCreated() {

		let str = '被动武功是由童姥法宝洗出武功后获得';
		this.descTxt.text = str;
	}
}
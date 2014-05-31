///<reference path='./../def/defLoader.d.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Class to build entry into Ayodis
*/
var AyodisEntryMember = (function (_super) {
    __extends(AyodisEntryMember, _super);
    /**
    * Basic constructor.
    *
    * @param keyName   Name of Key
    */
    function AyodisEntryMember(keyName) {
        _super.call(this, keyName, Ayodis.__CONST.KEY.SET);
        /**
        * Member is used by "Set". This is an array who contain some value.
        */
        this._member = [];
    }
    /**
    * Adds a value if it has not been found
    *
    * @param value     Value must be added
    */
    AyodisEntryMember.prototype.addIfValueNotExist = function (value) {
        if (_.indexOf(this._member, value) === -1) {
            this._member.push(value);
            return true;
        }
        return false;
    };

    /**
    * Returns all members
    */
    AyodisEntryMember.prototype.getAllMembers = function () {
        var out = [];

        for (var i = 0, ls = this._member.length; i < ls; i++) {
            out.push(this._member[i]);
        }

        return out;
    };

    /**
    * Removes a value if she has been found
    *
    * @param value     Value must be removed
    */
    AyodisEntryMember.prototype.removeValue = function (value) {
        var index = _.indexOf(this._member, value);

        // Check if value has been found found
        if (index === -1) {
            return false;
        }

        // Remove item from member
        this._member.splice(index, 1);

        return true;
    };
    return AyodisEntryMember;
})(AyodisMainEntry);
//# sourceMappingURL=AyodisEntryMember.js.map

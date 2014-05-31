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
var AyodisEntryField = (function (_super) {
    __extends(AyodisEntryField, _super);
    /**
    * Basic constructor.
    *
    * @param keyName   Name of Key
    */
    function AyodisEntryField(keyName) {
        _super.call(this, keyName, Ayodis.__CONST.KEY.HASH);
        /**
        * Field are used by "Hash". They contain some value as member :: this._field['test'] = 10.
        */
        this._field = {};
    }
    /**
    * Returns the number of fields.
    */
    AyodisEntryField.prototype.countField = function () {
        return _.size(this._field);
    };

    /**
    * Returns all the key fields.
    */
    AyodisEntryField.prototype.getAllField = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
        }

        return out;
    };

    /**
    * Returns all fields followed by values.
    */
    AyodisEntryField.prototype.getAllFieldAndValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
            out.push(this._field[key]);
        }

        return out;
    };

    /**
    * Returns all field values.
    */
    AyodisEntryField.prototype.getAllFieldValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(this._field[key]);
        }

        return out;
    };

    /**
    * Return specific fields.
    *
    * @param field     Field must be found
    */
    AyodisEntryField.prototype.getField = function (field) {
        return this._field[field];
    };

    /**
    * Remove specific fields.
    *
    * @param field     Field must be removed
    */
    AyodisEntryField.prototype.removeField = function (field) {
        if (_.isUndefined(this._field[field])) {
            return false;
        }

        delete (this._field[field]);

        return true;
    };

    /**
    * Apply a value to a field and return value.
    *
    * @param field     Field must be found
    * @param value     Value must be apply
    */
    AyodisEntryField.prototype.setField = function (field, value) {
        this._field[field] = value;
        return this._field[field];
    };
    return AyodisEntryField;
})(AyodisMainEntry);
//# sourceMappingURL=AyodisEntryField.js.map

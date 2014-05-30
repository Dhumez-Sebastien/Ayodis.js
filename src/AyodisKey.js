///<reference path='./def/defLoader.d.ts'/>
/**
* Class to build entry into Ayodis
*/
var AyodisKey = (function () {
    function AyodisKey(keyName, keyType) {
        this._field = {};
        this.keyName = keyName;
        this._type = keyType;
    }
    AyodisKey.prototype.countField = function () {
        var length = 0;
        for (var item in this._field) {
            length++;
        }

        return length;
    };

    AyodisKey.prototype.getAllField = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
        }

        return out;
    };

    AyodisKey.prototype.getAllFieldAndValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
            out.push(this._field[key]);
        }

        return out;
    };

    AyodisKey.prototype.getAllFieldValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(this._field[key]);
        }

        return out;
    };

    AyodisKey.prototype.getField = function (field) {
        return this._field[field];
    };

    AyodisKey.prototype.getType = function () {
        return this._type;
    };

    AyodisKey.prototype.getValue = function () {
        return this._value;
    };

    AyodisKey.prototype.removeField = function (field) {
        if (_.isUndefined(this._field[field])) {
            return false;
        }

        delete (this._field[field]);

        return true;
    };

    AyodisKey.prototype.setField = function (field, value) {
        this._field[field] = value;
        return this._field[field];
    };

    AyodisKey.prototype.setValue = function (value) {
        this._value = value;

        return this;
    };
    return AyodisKey;
})();
//# sourceMappingURL=AyodisKey.js.map

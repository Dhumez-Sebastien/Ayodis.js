///<reference path='./../def/defLoader.d.ts'/>
/**
* Class to build main entry into Ayodis
*/
var AyodisMainEntry = (function () {
    /**
    * Basic constructor
    *
    * @param keyName   Name of Key
    * @param keyType   Type of Key
    */
    function AyodisMainEntry(keyName, keyType) {
        this._keyName = keyName;
        this._type = keyType;
    }
    AyodisMainEntry.prototype.getType = function () {
        return this._type;
    };
    return AyodisMainEntry;
})();
//# sourceMappingURL=AyodisMainEntry.js.map

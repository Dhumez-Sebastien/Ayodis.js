///<reference path='./../def/defLoader.d.ts'/>

/**
 * Class to build main entry into Ayodis
 */
class AyodisMainEntry {

    /**
     * ********************************************************
     * ********************* PROTECTED ************************
     * ********************************************************
     */

    /**
     * Name of current Key
     */
    public _keyName : string;

    /**
     * Type of Key :: Hash | Set
     */
    public _type : string;

    /**
     * Basic constructor
     *
     * @param keyName   Name of Key
     * @param keyType   Type of Key
     */
    public constructor(keyName : string, keyType : string) {
        this._keyName = keyName;
        this._type = keyType;
    }

    public getType() : string {
        return this._type;
    }
}

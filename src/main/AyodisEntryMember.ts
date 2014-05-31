///<reference path='./../def/defLoader.d.ts'/>

/**
 * Class to build entry into Ayodis
 */
class AyodisEntryMember extends AyodisMainEntry {

    /**
     * Member is used by "Set". This is an array who contain some value.
     */
    private _member : any[] = [];

    /**
     * Basic constructor.
     *
     * @param keyName   Name of Key
     */
    public constructor(keyName:string) {
        super(keyName, Ayodis.__CONST.KEY.SET);
    }

    /**
     * Adds a value if it has not been found
     *
     * @param value     Value must be added
     */
    public addIfValueNotExist(value : any) : boolean {
        if (_.indexOf(this._member, value) === -1) {
            this._member.push(value);
            return true;
        }
        return false;
    }

    /**
     * Returns all members
     */
    public getAllMembers() : any[] {
        var out : any[] = [];

        for (var i = 0, ls = this._member.length; i < ls; i++) {
            out.push(this._member[i]);
        }

        return out;
    }

    /**
     * Removes a value if she has been found
     *
     * @param value     Value must be removed
     */
    public removeValue(value : any) : boolean {
        var index : number = _.indexOf(this._member, value);

        // Check if value has been found found
        if (index === -1) {
            return false;
        }

        // Remove item from member
        this._member.splice(index, 1);

        return true;
    }
}
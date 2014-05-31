///<reference path='./../def/defLoader.d.ts'/>

/**
 * Class to build entry into Ayodis
 */
class AyodisEntryField extends AyodisMainEntry {

    /**
     * Field are used by "Hash". They contain some value as member :: this._field['test'] = 10.
     */
    private _field : any = {};

    /**
     * Basic constructor.
     *
     * @param keyName   Name of Key
     */
    public constructor(keyName : string) {
        super(keyName, Ayodis.__CONST.KEY.HASH);
    }

    /**
     * Returns the number of fields.
     */
    public countField () : number {
        return _.size(this._field);
    }

    /**
     * Returns all the key fields.
     */
    public getAllField() : string[] {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(key);
        }

        return out;
    }

    /**
     * Returns all fields followed by values.
     */
    public getAllFieldAndValue() : any {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(key);
            out.push(this._field[key]);
        }

        return out;
    }

    /**
     * Returns all field values.
     */
    public getAllFieldValue() : any {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(this._field[key]);
        }

        return out;
    }

    /**
     * Return specific fields.
     *
     * @param field     Field must be found
     */
    public getField(field : string) : any {
        return this._field[field];
    }

    /**
     * Remove specific fields.
     *
     * @param field     Field must be removed
     */
    public removeField(field : string) : boolean {
        if (_.isUndefined(this._field[field])) {
            return false;
        }

        delete (this._field[field]);

        return true;
    }

    /**
     * Apply a value to a field and return value.
     *
     * @param field     Field must be found
     * @param value     Value must be apply
     */
    public setField(field : string, value : any) : any {
        this._field[field] = value;
        return this._field[field];
    }
}
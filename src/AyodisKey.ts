///<reference path='./def/defLoader.d.ts'/>

/**
 * Class to build entry into Ayodis
 */
class AyodisKey {

    private keyName : string;
    private _field : any = {};
    private _type : string;
    private _value : any;

    public constructor(keyName : string, keyType : string) {
        this.keyName = keyName;
        this._type = keyType;
    }

    public countField () : number {
        var length : number = 0;
        for (var item in this._field) {
            length++;
        }

        return length;
    }

    public getAllField() : string[] {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(key);
        }

        return out;
    }

    public getAllFieldAndValue() : any {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(key);
            out.push(this._field[key]);
        }

        return out;
    }

    public getAllFieldValue() : any {
        var out : any[] = [];

        for (var key in this._field) {
            out.push(this._field[key]);
        }

        return out;
    }


    public getField(field : string) : any {
        return this._field[field];
    }

    public getType() : string {
        return this._type;
    }

    public getValue() : string {
        return this._value;
    }

    public removeField(field : string) : boolean {
        if (_.isUndefined(this._field[field])) {
            return false;
        }

        delete (this._field[field]);

        return true;
    }

    public setField(field : string, value : any) : any {
        this._field[field] = value;
        return this._field[field];
    }

    public setValue(value : any) : AyodisKey {
        this._value = value;

        return this;
    }
}
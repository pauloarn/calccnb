
export default class jgSchema{
    static schema = {
        name: 'JG',
        primaryKey: 'id',
        properties:{
            id: {type: 'string', indexed: true},
            champion: 'string',
            kiils: 'int',
            deaths: 'int',
            assists: 'int',
            time: 'int',
            drags: 'int',
            arautos: 'double',
            barons: 'double',
            cc: 'double',
            win: 'int',
            total: 'double'
        },
    };
}

export default class supSchema{
    static schema = {
        name: 'SUP',
        primaryKey: 'id',
        properties:{
            id: {type: 'string', indexed: true},
            champion: 'string',
            kiils: 'int',
            deaths: 'int',
            assists: 'int',
            time: 'int',
            wards: 'int',
            self_connected: 'double',
            damageChamp: 'double',
            vision: 'double',
            cc: 'double',
            win: 'int',
            total: 'double'
        },
    };
}

export default class topSchema{
    static schema = {
        name: 'TOP',
        primaryKey: 'id',
        properties:{
            id: {type: 'string', indexed: true},
            champion: 'string',
            kiils: 'int',
            deaths: 'int',
            assists: 'int',
            time: 'int',
            towers: 'int',
            farm: 'double',
            damageChamp: 'double',
            damageGoals: 'double',
            self_connected: 'double',
            cc: 'double',
            win: 'int',
            total: 'double'
        },
    };
}


export default class midSchema{
    static schema = {
        name: 'MID',
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
            multiKill: 'double',
            killingSpree: 'double',
            win: 'int',
            total: 'double'
        },
    };
}
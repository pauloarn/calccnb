
export default class adcSchema{
    static schema = {
        name: 'ADC',
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
            cc: 'double',
            win: 'int',
            total: 'double'
        },
    };
}
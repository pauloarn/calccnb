
export default class GamesSchema{
    static schema = {
        name: 'Games',
        primaryKey: 'id',
        properties:{
            id: {type: 'string', indexed: true},
            champion: 'string',
            kiils: 'int',
            deaths: 'int',
            assists: 'int',
            time: 'int',
            towers: 'int',
            Farm: 'double',
            damageChamp: 'double',
            damageGoals: 'double',
            cc: 'double',
            win: 'int',
            total: 'double'
        },
    };
}
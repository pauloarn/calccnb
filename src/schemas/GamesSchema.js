import uuid from 'react-native-uuid'
export default class GamesSchema{
    static schema = {
        name: 'Games',
        primaryKey: 'id',
        properties:{
            id: {type: 'string', indexed: true, default: uuid.v1()},
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
            total: 'double'
        },
    };
}
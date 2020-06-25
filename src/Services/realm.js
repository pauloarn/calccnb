import Realm from 'realm';

import GamesSchema from '../schemas/GamesSchema';

export default function getRealm(){
    return Realm.open({
        schema:[GamesSchema],
    })
}
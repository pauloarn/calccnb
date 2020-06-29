import Realm from 'realm';

import adcSchema from '../schemas/ADCSchema';
import jgSchema from '../schemas/JGSchema';
import topSchema from '../schemas/TOPSchema';
import supSchema from '../schemas/SUPSchema';
import midSchema from '../schemas/MIDSchema';

export default function getRealm(){
    return Realm.open({
        schema:[adcSchema, jgSchema, topSchema, supSchema, midSchema],
    })
}
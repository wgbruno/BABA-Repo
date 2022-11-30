/*import Realm from 'realm';
import {AccountSchema, TeamScheam, GameSchema} from './SchemaDao';

const app = new Realm.App({ id: "baba_app-icpqu" });

const credentials = Realm.Credentials.anonymous(); // LoggingIn as Anonymous User. 

const OpenRealmBehaviorConfiguration = {
    type: "openImmediately",
};
  

getRealm = async () => {
    // loggedIn as anonymous user
    const loggedInUser = await app.logIn(credentials);

    // MongoDB RealmConfiguration
    const configuration = {
        schema: [AccountSchema, TeamScheam, GameSchema],
        sync: {
            user: app.currentUser, // loggedIn User
            partitionValue: "myPartition", // should be userId(Unique) so it can manage particular user related documents in DB by userId
            newRealmFileBehavior: OpenRealmBehaviorConfiguration,
            existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
        }
    };
    return Realm.open(configuration);
}

export default getRealm;
*/
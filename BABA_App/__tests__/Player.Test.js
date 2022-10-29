import {expect, jest, test} from '@jest/globals';
import Player from '../Objects/Player';
import { openDatabase } from 'react-native-sqlite-storage';

export var db = openDatabase({name: 'TestDatabase.db'});

test('Add New Player', () => {
    play = new Player("random", "person", 10, 21, 6, null, null);
    expect(play).toBe();
    //not sure how to access the db 
    // also what to pass as navigation?? needed to save into db

})

test('View Player', function(){
// expect that we can view the same player from the db that was added in the previous test

})

test('Update Player', function(){
// update the player previously added and expect that the changes are saved in the db

})

test('Delete Player', function(){
// delete the player previosuly used and expect that they are no longer saved in the db

})
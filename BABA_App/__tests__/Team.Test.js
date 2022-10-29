import {expect, jest, test} from '@jest/globals';
import Team from '../Objects/Team';
import { openDatabase } from 'react-native-sqlite-storage';

/*
let t = null;
beforeEach(function(){
    t = new Team("ballers", "5-0", 1, 9);
})*/

test('Register New Team', function(){
    tempTeam = new Team("Ballers", "5-0", 1, 9, null);
    expect(tempTeam).toBe();
    //similar to player, what to put for navigation arg?
})

test('View Team', function(){
// expect that we can view the same team from the db that was added in the previous test
})

test('Update Team', function(){
// update the team previously added and expect that the changes are saved in the db

})

test('Delete Team', function(){
// delete the team previosuly used and expect that they are no longer saved in the db

})
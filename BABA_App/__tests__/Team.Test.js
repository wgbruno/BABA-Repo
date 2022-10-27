import {expect, jest, test} from '@jest/globals';
import RegisterTeam from "../View/AddTeam";
import EditTeam from "../View/EditTeam";

/*
let t = null;
beforeEach(function(){
    t = new Team("ballers", "5-0", 1, 9);
})*/

test('Register New Team', function(){
// add team
// handleTeam()
// register a new team and expect that it is saved in the db
    
    //expect(t)
})

test('View Team', function(){
// add team
// handleTeam()
// expect that we can view the same team from the db that was added in the previous test

    /*
    expect(t.getName()).toEqual("ballers");
    expect(t.getRecord()).toBe("5-0");
    expect(t.getSeed()).toBe(1);
    expect(t.getPlayers()).toBe(9);
    */
})

test('Update Team', function(){
// edit team
// const updateTeam
// update the team previously added and expect that the changes are saved in the db

})

test('Delete Team', function(){
// edit team
// const deleteTeam
// delete the team previosuly used and expect that they are no longer saved in the db

})

test('View Non-Existant Team', function(){
// not sure if these non-existant tests are needed since those scenarios will never
// occur when using the app, but idea was to test that our structure/program 
// responds to them correctly

})
    
test('Update Non-Existant Team', function(){
// ^^

})

test('Delete Non-Existant Team', function(){
// ^^

})
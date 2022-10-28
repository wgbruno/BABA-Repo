import {expect, jest, test} from '@jest/globals';
import AddPlayer from "../View/AddPlayer";
import EditPlayer from "../View/EditPlayer";
import renderer from "react-test-renderer";

/* example code for reference
import renderer from 'react-test-renderer';
import Link from '../Link';

if('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.facebook.com">Facebook</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})*/

test('Add New Player', () => {
    const temp = renderer.create(<AddPlayer firstName="Random"></AddPlayer>).toJSON();
    expect(temp).toMatchSnapshot();
    /*dont know what to put in between AddPlayer brakcets, if anything even goes there*/
})


test('Add New Player', function(){
// add player
// const insertPlayer
// add a new player and expect that it is present within the db
    //expect(AddPlayer.insertPlayer())
})

test('View Player', function(){
// add player
// const viewPlayer
// expect that we can view the same player from the db that was added in the previous test

})

test('Update Player', function(){
// edit player
// const updatePlayer
// update the player previously added and expect that the changes are saved in the db

})

test('Delete Player', function(){
// edit player
// const deletePlayer
// delete the player previosuly used and expect that they are no longer saved in the db

})

test('View Non-existant Player', function(){
// similar to team tests, not sure if these are needed or practical since users on the app
// can't encounter these scenarios, but might be needed for coverage testing of code itself 
// and its functionality

})

test('Update Non-existant Player', function(){
// ^^

})

test('Delete Non-existant Player', function(){
// ^^

})
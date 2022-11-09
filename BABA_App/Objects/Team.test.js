import {expect, jest, test} from '@jest/globals';
import { Team, getProfile, getName, getPlayers, getTeam, getWins, getLosses, getSeed } from '../Objects/Team.js';

test('Register New Team', function(){
    tempTeam = new Team("Ballers", "5-0", 1, 9, null);
    expect(tempTeam).toBe();
    //similar to player, what to put for navigation arg?
})

test("Return team's name", function(){

    expect(getName(newTeam)).toBe("New Team");

});


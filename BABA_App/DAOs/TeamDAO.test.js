import { insertTeam, getAllTeams, realm, teamSchema } from "../DAOs/AddTeamDao"

const players = [];

test('Insert team into database', function(){
    insertTeam("testTeam", 5, 0, 1, players);
    expect(teamSchema).toContain("testTeam");
})

//insertTeam("team 1", 10, 0, 1, players);

//getAllTeams();
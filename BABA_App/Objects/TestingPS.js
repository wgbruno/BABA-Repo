import { openDatabase } from 'react-native-sqlite-storage'
import {Player} from './Player.js';
import { Stats } from './Stats.js';
let myStats = new Stats(25, 10, 10, 5, 5, 3, 2);
let myPlayer = new Player("Hunter", "Malone", "27", 21, "6\"1\'", myStats);
console.log(myPlayer.stats.rebounds);
myPlayer.stats.rebounds = 15;
console.log(myPlayer.stats.rebounds);
var db = openDatabase({ name: 'UserDatabase.db'});
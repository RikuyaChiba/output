var Forward = /** @class */ (function () {
    function Forward(name, goals) {
        this.name = name;
        this.goals = goals;
    }
    Forward.prototype.getStats = function () {
        return "".concat(this.name, "\u306F").concat(this.goals, "\u30B4\u30FC\u30EB\u3092\u6C7A\u3081\u307E\u3057\u305F!");
    };
    return Forward;
}());
var Midfielder = /** @class */ (function () {
    function Midfielder(name, assists) {
        this.name = name;
        this.assists = assists;
    }
    Midfielder.prototype.getStats = function () {
        return "".concat(this.name, "\u306F").concat(this.assists, "\u30A2\u30B7\u30B9\u30C8\u3092\u3057\u307E\u3057\u305F!");
    };
    return Midfielder;
}());
var Defender = /** @class */ (function () {
    function Defender(name, tackles) {
        this.name = name;
        this.tackles = tackles;
    }
    Defender.prototype.getStats = function () {
        return "".concat(this.name, "\u306F").concat(this.tackles, "\u30BF\u30C3\u30AF\u30EB\u306B\u6210\u529F\u3057\u307E\u3057\u305F!");
    };
    return Defender;
}());
var Goalkeeper = /** @class */ (function () {
    function Goalkeeper(name, saves) {
        this.name = name;
        this.saves = saves;
    }
    Goalkeeper.prototype.getStats = function () {
        return "".concat(this.name, "\u306F").concat(this.saves, "\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F!");
    };
    return Goalkeeper;
}());
var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
    }
    Team.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Team.prototype.getPlayerStats = function (player) {
        return player.getStats();
    };
    return Team;
}());
var forward = new Forward("Messi", 3);
var midfielder = new Midfielder("Iniesta", 2);
var defender = new Defender("Pique", 4);
var goalkeeper = new Goalkeeper("Ter Stegen", 5);
var team = new Team();
team.addPlayer(forward);
team.addPlayer(midfielder);
team.addPlayer(defender);
team.addPlayer(goalkeeper);
console.log(team.getPlayerStats(forward));
console.log(team.getPlayerStats(midfielder));
console.log(team.getPlayerStats(defender));
console.log(team.getPlayerStats(goalkeeper));

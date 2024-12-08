interface Player {
    name: string;
    getStats(): string;
}

class Forward implements Player {
    constructor(public name: string, public goals: number) {}
    getStats(): string {
        return `${this.name}は${this.goals}ゴールを決めました!`;
    }
}

class Midfielder implements Player {
    constructor(public name: string, public assists: number) {}
    getStats(): string {
        return `${this.name}は${this.assists}アシストをしました!`;
    }
}

class Defender implements Player {
    constructor(public name: string, public tackles: number) {}
    getStats(): string {
        return `${this.name}は${this.tackles}タックルに成功しました!`;
    }
}

class Goalkeeper implements Player {
    constructor(public name: string, public saves: number) {}
    getStats(): string {
        return `${this.name}は${this.saves}セーブしました!`;
    }
}

class Team {
    private players: any[] = [];

    addPlayer(player: any) {
        this.players.push(player);
    }

    getPlayerStats(player: any): string {
        return player.getStats();
    }
}

const forward    = new Forward("Messi", 3);
const midfielder = new Midfielder("Iniesta", 2);
const defender   = new Defender("Pique", 4);
const goalkeeper = new Goalkeeper("Ter Stegen", 5);

const team = new Team();
team.addPlayer(forward);
team.addPlayer(midfielder);
team.addPlayer(defender);
team.addPlayer(goalkeeper);

console.log(team.getPlayerStats(forward));
console.log(team.getPlayerStats(midfielder));
console.log(team.getPlayerStats(defender));
console.log(team.getPlayerStats(goalkeeper));





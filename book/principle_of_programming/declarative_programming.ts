interface Player {
    name: string;
    position: string;
    goals: number;
}

const players: Player[] = [
    { name: "Messi", position: "Forward", goals: 3 },
    { name: "Iniesta", position: "Midfielder", goals: 2 },
    { name: "Pique", position: "Defender", goals: 4 },
    { name: "Ter Stegen", position: "Goalkeeper", goals: 5 },
];

players
    .filter(player => player.position === "Forward")
    .forEach(forward => {
        console.log(`${forward.name}は${forward.goals}ゴールを決めました!`);
    });

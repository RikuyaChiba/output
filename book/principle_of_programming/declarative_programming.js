var players = [
    { name: "Messi", position: "Forward", goals: 3 },
    { name: "Iniesta", position: "Midfielder", goals: 2 },
    { name: "Pique", position: "Defender", goals: 4 },
    { name: "Ter Stegen", position: "Goalkeeper", goals: 5 },
];
// フォワードの選手を取得する
var forwards = [];
forwards = players.filter(function (player) { return player.position === "Forward"; });
// フォワードの選手のスタッツを表示する
forwards.forEach(function (forward) {
    console.log("".concat(forward.name, "\u306F").concat(forward.goals, "\u30B4\u30FC\u30EB\u3092\u6C7A\u3081\u307E\u3057\u305F!"));
});

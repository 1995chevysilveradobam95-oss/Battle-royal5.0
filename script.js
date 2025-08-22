const characters = [
  "Kidd (female warrior)",
  "Neal",
  "Smith",
  "Wright",
  "Meeks",
  "Shrew",
  "Shinn",
  "Daughtry",
  "BB",
  "LB"
];

const killLines = [
  "{killer} skewers {victim} with a jagged blade.",
  "{killer} smashes {victim}’s skull against a rusted wall.",
  "{killer} hurls a spear through {victim}’s chest.",
  "{killer} crushes {victim} under a spiked hammer.",
  "{killer} burns {victim} alive with a Molotov.",
  "{killer} tears {victim} apart with sheer brutality.",
  "{killer} ambushes {victim} and slits their throat.",
  "{killer} leaves {victim} bleeding out in the dirt.",
  "{killer} detonates a trap, shredding {victim} to pieces."
];

function startSimulation() {
  let alive = [...characters];
  let log = document.getElementById("log");
  log.innerHTML = "";
  let results = [];

  while (alive.length > 1) {
    let killerIndex = Math.floor(Math.random() * alive.length);
    let victimIndex;
    do {
      victimIndex = Math.floor(Math.random() * alive.length);
    } while (victimIndex === killerIndex);

    let killer = alive[killerIndex];
    let victim = alive[victimIndex];

    let line = killLines[Math.floor(Math.random() * killLines.length)]
      .replace("{killer}", killer)
      .replace("{victim}", victim);

    log.innerHTML += `<p>${line}</p>`;

    // victim eliminated
    alive.splice(victimIndex, 1);
    results.unshift(victim); // loser rank builds from bottom
  }

  results.unshift(alive[0]); // last survivor is the winner

  let finalText = "<h2>Final Rankings</h2>";
  results.forEach((char, i) => {
    finalText += `<p>${i + 1}. ${char}</p>`;
  });

  document.getElementById("results").innerHTML = finalText;
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});

const teams = {
  nst: {
    name: "Team NST",
    logo: "nst.png",
    description: `
      <strong>About Team NST:</strong> Team NST has earned its place as one of the strongest teams in Rocket League through relentless dedication, disciplined teamwork, and a deep understanding of the game. Success at this level comes from countless hours of practice, strategic refinement, and a shared commitment to constant improvement.  
      <br><br>
      <strong>Teamwork:</strong> Rocket League is not won by individual mechanics alone, but by trust, communication, and positioning. Each member of Team NST understands their role on the field, rotating efficiently and supporting teammates in both offense and defense. Their passes are intentional, challenges are calculated, and rotations are disciplined, allowing them to control the pace of matches and adapt quickly to any opponent.  
      <br><br>
      <strong>Dedication:</strong> Team NST treats every match, ranked or scrim, as an opportunity to improve. They review replays to identify weaknesses, refine strategies, and sharpen decision-making. Losses are never excuses—they are lessons that keep the team progressing while others stagnate.
    `,
    players: "Unknown",
    coach: "Unknown",
    sub: "Unknown"
  },
};

function openTeam(teamId) {
  const team = teams[teamId];

  document.getElementById('teamList').style.display = 'none';

  const detailSection = document.getElementById('teamDetail');
  detailSection.style.display = 'block';

  document.getElementById('teamContent').innerHTML = `
    <div class="back-arrow" onclick="showTeams()">
      <i class="fas fa-arrow-left"></i> ← Teams
    </div>

    <img src="${team.logo}" alt="${team.name} Logo" class="team-icon">
    <h2>${team.name}</h2>
    <p>${team.description}</p>
    <br>
    <p>
      <strong>Players:</strong> ${team.players}<br>
      <strong>Coach:</strong> ${team.coach}<br>
      <strong>Substitute:</strong> ${team.sub}
    </p>
  `;

  window.scrollTo(0,0);
}

function showTeams() {
    document.getElementById('teamDetail').style.display = 'none';
    document.getElementById('teamList').style.display = 'block';
}
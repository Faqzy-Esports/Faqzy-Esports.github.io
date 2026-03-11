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

    players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Cored</h3>
        <p>Ranked Grand Champion 2, known for aggressive and precise gameplay in high-pressure situations.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Ivqnoo.</h3>
        <p>Ranked Grand Champion 2, combines mechanical skill with smart rotations to support the team effectively.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/3840px-Flag_of_Croatia.svg.png" alt="Croatia Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Noxium</h3>
        <p>Ranked Grand Champion 1, brings consistency and control to the team’s offensive plays.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/3840px-Flag_of_England.svg.png" alt="England Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Hrx</h3>
        <p>Ranked Grand Champion 1, known for strong positioning and tactical awareness on the field.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/3840px-Flag_of_England.svg.png" alt="England Flag">
      </div>
    </div>
    `,

    coach: `
    <div class="player-card">
      <div class="player-text">
        <h3>Ben</h3>
        <p>The coach of Team NST focuses on strategy, team coordination, and guiding players to maximize their potential.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/3840px-Flag_of_England.svg.png" alt="England Flag">
      </div>
    </div>
    `,

    sub: `
    <div class="player-card">
      <div class="player-text">
        <h3>Xau</h3>
        <p>Ranked Grand Champion 1, prepared to step in with strong mechanics and understanding of team strategies.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png" alt="Brazil Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Dxlta.</h3>
        <p>Ranked Champion 3, capable of supporting the team in critical moments and adapting quickly to match conditions.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/3840px-Flag_of_Croatia.svg.png" alt="Croatia Flag">
      </div>
    </div>
    `
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

    <h2 style="margin-top:3rem;">Main Players</h2>
    ${team.players}

    <h2 style="margin-top:3rem;">Coach</h2>
    ${team.coach}

    <h2 style="margin-top:3rem;">Substitute</h2>
    ${team.sub}
  `;

  window.scrollTo(0,0);
}

function showTeams() {
  document.getElementById('teamDetail').style.display = 'none';
  document.getElementById('teamList').style.display = 'block';
}
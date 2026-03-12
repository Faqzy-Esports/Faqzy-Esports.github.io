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
  kyzen: {
  name: "Team Kyzen",
  logo: "Kyzen.png",

  description: `
    <strong>About Team Kyzen:</strong> Faqzy Esports - Team Kyzen is a competitive Rocket League team focused on synergy, mechanical skill, and adapting quickly during matches. With a mix of experienced players and promising talent, they aim to rise through the ranks while maintaining strong communication and coordination.  
    <br><br>
    <strong>Teamwork:</strong> Each player brings unique strengths to the team, with coordinated rotations, effective passing plays, and well-timed challenges. Team Kyzen thrives on collaboration and smart in-game decisions, ensuring that each match is strategically managed.  
    <br><br>
    <strong>Dedication:</strong> From daily practice sessions to analyzing match replays, Team Kyzen consistently works on improving both individual mechanics and team strategies. They approach every game as an opportunity to learn and refine their performance.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Apple</h3>
        <p>Ranked Grand Champion 2, known for sharp mechanical skills and high-pressure decision making.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Conflictz</h3>
        <p>Ranked Grand Champion 2, brings aggressive plays and strong rotations to control the pace of the match.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Hdotty</h3>
        <p>Ranked Grand Champion 2, excels at positioning and clutch plays during crucial moments.</p>
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
        <h3>Conflictz</h3>
        <p>Coach of Team Kyzen, guiding strategy, rotations, and maximizing player synergy on the field.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>
  `,

  sub: `
    <div class="player-card">
      <div class="player-text">
        <h3>Panda</h3>
        <p>Ranked Grand Champion 1, ready to provide mechanical support and adapt to the main roster’s strategies.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" alt="France Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Dio</h3>
        <p>Ranked Champion 1, substitutes to maintain team stability and effective rotations when required.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/3840px-Flag_of_Portugal.svg.png" alt="Portugal Flag">
      </div>
    </div>
  `
},
ditto: {
  name: "Team Ditto",
  logo: "ditto.png",

  description: `
    <strong>About Team Ditto:</strong> Faqzy Esports - Team Ditto is a rising Rocket League team combining skill, teamwork, and adaptability. They focus on strong rotations, clutch plays, and maintaining communication under pressure.  
    <br><br>
    <strong>Teamwork:</strong> Each player contributes unique strengths, allowing Team Ditto to execute fast-paced offensive plays and disciplined defense. Smart positioning and effective coordination are key to their strategy.  
    <br><br>
    <strong>Dedication:</strong> Team Ditto reviews gameplay consistently to refine strategies and enhance individual mechanics. Every match is an opportunity to learn, adapt, and improve as a cohesive unit.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Quizix</h3>
        <p>Ranked Grand Champion 1, known for precise mechanical plays and consistent performance.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png" alt="Italy Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Jyn</h3>
        <p>Ranked Grand Champion 1, excels at aggressive rotations and supporting teammates in key moments.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/3840px-Flag_of_Peru_%28state%29.svg.png" alt="Peru Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Senna Zalm</h3>
        <p>Ranked Grand Champion 1, known for smart rotations, clutch plays, and maintaining team stability.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>
  `,

  coach: `
    <p>No coach assigned yet.</p>
  `,

  sub: `
    <p>No substitutes assigned yet.</p>
  `
},
shock: {
  name: "Team Shock",
  logo: "shock.png",

  description: `
    <strong>About Team Shock:</strong> Faqzy Esports - Team Shock is a high-level Rocket League team excelling in fast rotations, precise mechanics, and coordinated teamplay. Their goal is to dominate matches through strategic positioning and strong communication.  
    <br><br>
    <strong>Teamwork:</strong> Team Shock emphasizes synergy between all three players, with rotations designed to maintain pressure and secure goals while minimizing mistakes.  
    <br><br>
    <strong>Dedication:</strong> The team studies replays and practices intensively, refining both individual skills and team strategies to stay competitive at the highest levels.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Toni Chris</h3>
        <p>Ranked Grand Champion 3, known for aggressive playstyle and high-level mechanical skill.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png" alt="Iceland Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Tbr</h3>
        <p>Ranked Grand Champion 3, excels in rotations, smart positioning, and supporting teammates under pressure.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Ebo</h3>
        <p>Ranked Grand Champion 3, known for precise mechanics, clutch plays, and maintaining team balance.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png" alt="Italy Flag">
      </div>
    </div>
  `,

  coach: `
    <p>No coach assigned yet.</p>
  `,

  sub: `
    <p>No substitutes assigned yet.</p>
  `
},
optimise: {
  name: "Team Optimise",
  logo: "optimise.png",

  description: `
    <strong>About Team Optimise:</strong> Faqzy Esports - Team Optimise is a Rocket League team focused on high-level mechanics, teamwork, and adaptability. They aim to maximize efficiency in rotations and maintain consistent performance in competitive matches.  
    <br><br>
    <strong>Teamwork:</strong> Both players contribute complementary skills, ensuring fast-paced plays, precise passes, and well-timed challenges. Team Optimise thrives on communication and strategic execution.  
    <br><br>
    <strong>Dedication:</strong> The team analyzes replays, practices intensively, and constantly refines strategies to stay competitive while improving individual mechanics.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Miki</h3>
        <p>Ranked Grand Champion 3, known for sharp mechanics, aggressive plays, and reliable rotations.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png" alt="Poland Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Keybi.</h3>
        <p>Ranked Grand Champion 3, excels at positioning, clutch plays, and supporting team coordination.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png" alt="Poland Flag">
      </div>
    </div>
  `,

  coach: `
    <p>No coach assigned yet.</p>
  `,

  sub: `
    <p>No substitutes assigned yet.</p>
  `
},
gravity: {
  name: "Team Gravity",
  logo: "gravity.png",

  description: `
    <strong>About Team Gravity:</strong> Faqzy Esports - Team Gravity is a Rocket League team combining mechanical skill, strategy, and coordination. They aim to maintain strong rotations, effective communication, and high-pressure performance.  
    <br><br>
    <strong>Teamwork:</strong> Each player brings unique strengths to the team, with precise rotations and well-timed challenges. Team Gravity excels in both offensive plays and defensive stability.  
    <br><br>
    <strong>Dedication:</strong> The team practices rigorously and reviews gameplay to refine strategies, improve mechanics, and ensure peak performance in every match.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Left</h3>
        <p>Ranked Grand Champion 1, known for consistent mechanics, smart rotations, and clutch plays.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/330px-Flag_of_Greece.svg.png" alt="Greece Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>RJ</h3>
        <p>Ranked Grand Champion 1, excels in rotations, defensive positioning, and supporting the team in crucial moments.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/3840px-Flag_of_Ireland.svg.png" alt="Ireland Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Loxky</h3>
        <p>Ranked Grand Champion 1, strong in offensive pressure, precise shots, and maintaining team momentum.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" alt="France Flag">
      </div>
    </div>
  `,

  coach: `
    <div class="player-card">
      <div class="player-text">
        <h3>Extreme</h3>
        <p>Coach of Team Gravity, responsible for strategy, team coordination, and maximizing player synergy.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/3840px-Flag_of_Portugal.svg.png" alt="Portugal Flag">
      </div>
    </div>
  `,

  sub: `
    <div class="player-card">
      <div class="player-text">
        <h3>Jayden</h3>
        <p>Ranked Grand Champion 2, ready to substitute in and support main roster with strong rotations and mechanics.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png" alt="Germany Flag">
      </div>
    </div>
  `
},
realityZone: {
  name: "Team Reality Zone",
  logo: "reality-zone.png",

  description: `
    <strong>About Team Reality Zone:</strong> Faqzy Esports - Team Reality Zone is a competitive Rocket League team focused on precision, rotations, and smart plays. They emphasize teamwork, communication, and adaptability in high-pressure matches.  
    <br><br>
    <strong>Teamwork:</strong> Each player contributes unique strengths, combining strategic positioning with mechanical skill to maintain consistent pressure and defend effectively.  
    <br><br>
    <strong>Dedication:</strong> The team studies matches carefully and practices rigorously to refine their strategies and improve both individual and team performance.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Wtw Kezzai</h3>
        <p>Ranked SSL, known for precise mechanics and consistent rotations.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/960px-Flag_of_Morocco.svg.png" alt="Morocco Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Tytyboy</h3>
        <p>Ranked SSL, excels in smart positioning and supporting teammates under pressure.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/3840px-Flag_of_Suriname.svg.png" alt="Suriname Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Redrum</h3>
        <p>Ranked SSL, known for clutch plays, rotations, and strong game awareness.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>
  `,

  coach: `
    <div class="player-card">
      <div class="player-text">
        <h3>Lukas</h3>
        <p>Coach of Team Reality Zone, responsible for strategy, rotations, and maximizing player synergy on the field.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/3840px-Flag_of_Belgium.svg.png" alt="Belgium Flag">
      </div>
    </div>
  `,

  sub: `
    <p>No substitutes assigned yet.</p>
  `
},
jolteon: {
  name: "Team Jolteon",
  logo: "jolteon.png",

  description: `
    <strong>About Team Jolteon:</strong> Faqzy Esports - Team Jolteon is a competitive Rocket League team that emphasizes strong rotations, team synergy, and precision mechanics. The team combines experienced players with consistent performers to maintain high-level match control.  
    <br><br>
    <strong>Teamwork:</strong> Each player contributes unique strengths to ensure well-timed passes, coordinated rotations, and strategic plays. Team Jolteon thrives on communication and tactical decision-making.  
    <br><br>
    <strong>Dedication:</strong> The team regularly reviews gameplay, refines strategies, and practices intensively to maintain and improve performance across all matches.
  `,

  players: `
    <div class="player-card">
      <div class="player-text">
        <h3>Kalipolis</h3>
        <p>Ranked Grand Champion 2, team captain, known for leadership, strategic rotations, and aggressive plays.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png" alt="Italy Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Ghosts</h3>
        <p>Ranked Grand Champion 2, excels in precision mechanics and maintaining team pressure on opponents.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" alt="France Flag">
      </div>
    </div>

    <div class="player-card">
      <div class="player-text">
        <h3>Juul</h3>
        <p>Ranked Grand Champion 1, reliable in rotations, smart positioning, and defensive support.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" alt="Netherlands Flag">
      </div>
    </div>
  `,

  coach: `
    <div class="player-card">
      <div class="player-text">
        <h3>Ghosts</h3>
        <p>Coach of Team Jolteon, focusing on strategy, rotations, and maximizing team synergy on the field.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" alt="France Flag">
      </div>
    </div>
  `,

  sub: `
    <div class="player-card">
      <div class="player-text">
        <h3>Ben</h3>
        <p>Ranked Grand Champion 2, ready to substitute in and maintain team performance with strong mechanics.</p>
        <a href="#" class="tracker-btn">Tracker Link</a>
      </div>
      <div class="player-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="UK Flag">
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
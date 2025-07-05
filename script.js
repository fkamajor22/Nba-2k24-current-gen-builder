
function generateBuild() {
  const position = document.getElementById('position').value;
  const dunk = parseInt(document.getElementById('dunk').value);
  const three = parseInt(document.getElementById('three').value);
  const handle = parseInt(document.getElementById('handle').value);
  const speed = parseInt(document.getElementById('speed').value);

  let buildName = "All-Around Threat";
  if (three >= 90 && handle >= 90) buildName = "Shot Creator";
  if (dunk >= 92) buildName = "Slasher";
  if (three >= 92 && dunk >= 85) buildName = "3-Level Scorer";
  if (three < 75 && dunk > 85) buildName = "Inside Scorer";

  let badges = [];
  if (dunk >= 93) badges.push("Posterizer (Gold)");
  if (three >= 92) badges.push("Limitless Range (Gold)");
  if (handle >= 92) badges.push("Handles for Days (Gold)");

  let animations = [];
  if (dunk >= 92) animations.push("Elite Contact Dunks");
  if (handle >= 90) animations.push("Stephen Curry Dribble Style");
  if (three >= 85) animations.push("Quick Jump Shot Bases");

  const output = `
    <h2 class="text-xl font-bold mb-2">Your Build: ${buildName}</h2>
    <p><strong>Badges:</strong> ${badges.length > 0 ? badges.join(', ') : 'None unlocked'}</p>
    <p><strong>Animations:</strong> ${animations.length > 0 ? animations.join(', ') : 'None unlocked'}</p>
  `;

  document.getElementById("output").innerHTML = output;
}

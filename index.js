//Textanalyse-Tool

const readlineSync = require("readline-sync");

const text = readlineSync.question(
  "Gib einen belibigen Text ein und ich analysiere ihn dir. "
);
const wörter = text.split(/\s+/);

const gesammtAnzahl = wörterZählen(text);
console.log(`Du hast insgesammt ${gesammtAnzahl} wörter geschrieben`);

const unterschiedlicheWörter = unterschiedlicheWörterZählen(text);
console.log(`Davon waren ${unterschiedlicheWörter} unterschiedliche Wörter`);

const längstesWort = wörter.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
console.log(`und das längste Wort in deinem Text ist: "${längstesWort}"`);

function wörterZählen(text) {
  const wörter = text.split(/\s+/);
  return wörter.length;
}

function unterschiedlicheWörterZählen(text) {
  const wörter = text.split(/\s+/);
  const unterschiedlicheWörter = new Set(wörter);
  return unterschiedlicheWörter.size;
}


//Ohne Chat GPT alleine nicht machbar gewesen.
const wortFrequenz = wortFrequenzZählen(wörter);
console.log(`Wortfrequenz: ${wortFrequenz}`);

function wortFrequenzZählen(wörter) {
    const wortFrequenz = {};
    wörter.forEach(function (wort) {
      if (wort in wortFrequenz) {
        wortFrequenz[wort]++;
      } else {
        wortFrequenz[wort] = 1;
      }
    });
  
    // Formatierung für die Ausgabe
    const frequenzAusgabe = Object.entries(wortFrequenz)
      .map(([wort, anzahl]) => `${wort}: ${anzahl}`)
      .join(", ");
  
    return `{ ${frequenzAusgabe} }`;
  }
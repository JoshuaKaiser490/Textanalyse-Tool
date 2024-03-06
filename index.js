//Textanalyse-Tool

const readlineSync = require('readline-sync');

const text = readlineSync.question("Gib einen belibigen Text ein und ich analysiere ihn dir. ")
const gesammtAnzahl = wörterZählen(text)
console.log(`Du hast insgesammt ${gesammtAnzahl} wörter geschrieben`);

const unterschiedlicheWörter = unterschiedlicheWörterZählen(text)
console.log(`Davon waren ${unterschiedlicheWörter} unterschiedliche Wörter`);

function wörterZählen(text) {
    const wörter = text.split(/\s+/);
    return wörter.length;
}

function unterschiedlicheWörterZählen(text) {
    const wörter = text.split(/\s+/);
    const unterschiedlicheWörter = new Set(wörter);
    return unterschiedlicheWörter.size;
}
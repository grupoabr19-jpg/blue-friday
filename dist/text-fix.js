// Corrige textos antigos que foram gravados com a codificaÃ§Ã£o errada, sem alterar o conteÃºdo semÃ¢ntico.
const replacements = new Map([
  ['ÃƒÂ§','Ã§'],['ÃƒÂ£','Ã£'],['ÃƒÂ¡','Ã¡'],['ÃƒÂ©','Ã©'],['ÃƒÂ­','Ã­'],['ÃƒÂ³','Ã³'],['ÃƒÂº','Ãº'],['ÃƒÂµ','Ãµ'],['ÃƒÂª','Ãª'],['ÃƒÂ§ÃƒÂµ','Ã§Ãµes'],['Ã¢â‚¬â€œ','â€“'],['Ã¢â€ â€”','â†—'],['Ã¢â€ â€œ','â†“'],['Ã¢Å“â€œ','âœ“'],['Ã¢Å“Â¦','âœ¦'],['Ã¢â‚¬Å“','â€œ'],['Ã¢â‚¬Â','â€'],['Ã¢â‚¬â€','â€”'],['Ãƒâ€¡ÃƒÆ’ÃƒÆ’O','Ã‡ÃƒO'],['ÃƒÆ’','Ãƒ']
]);
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
for(const node of nodes){let value=node.nodeValue; for(const [bad,good] of replacements) value=value.split(bad).join(good); node.nodeValue=value;}


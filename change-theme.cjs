const fs = require('fs');
const path = require('path');

const replacements = [
  { old: /#193b68/gi, new: '#0d9488' }, // Royal Blue -> Teal (Primary)
  { old: /#112643/gi, new: '#115e59' }, // Dark Navy -> Dark Teal
  { old: /#D4AF37/gi, new: '#10b981' }, // Gold -> Emerald (Accent/Icons)
  { old: /#b48c1e/gi, new: '#059669' }, // Dark Gold -> Dark Emerald
  { old: /rgba\(212,\s*175,\s*55/gi, new: 'rgba(16, 185, 129' }, // Gold rgba
  { old: /rgba\(25,\s*59,\s*104/gi, new: 'rgba(13, 148, 136' }, // Royal Blue rgba
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      
      for (const rule of replacements) {
        newContent = newContent.replace(rule.old, rule.new);
      }
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Changed colors in:', fullPath);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Theme change complete.');

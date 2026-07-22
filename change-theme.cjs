const fs = require('fs');
const path = require('path');

const replacements = [
  // Standard Tailwind Blues to Teals
  { old: /#1e3a8a/gi, new: '#134e4a' }, // blue-900 -> teal-900
  { old: /#1d4ed8/gi, new: '#0f766e' }, // blue-700 -> teal-700
  { old: /#2563eb/gi, new: '#0d9488' }, // blue-600 -> teal-600
  { old: /#3b82f6/gi, new: '#14b8a6' }, // blue-500 -> teal-500
  { old: /#60a5fa/gi, new: '#2dd4bf' }, // blue-400 -> teal-400
  { old: /#eff6ff/gi, new: '#f0fdfa' }, // blue-50 -> teal-50
  
  // Custom Blues to Teals
  { old: /#0ea5e9/gi, new: '#10b981' }, // sky-500 -> emerald-500
  { old: /#e0e7ff/gi, new: '#ccfbf1' }, // indigo-100 -> teal-100
  { old: /#4338ca/gi, new: '#0f766e' }, // indigo-700 -> teal-700
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
        console.log('Changed more colors in:', fullPath);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Deep theme change complete.');

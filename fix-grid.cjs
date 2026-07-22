const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We are looking for something like <Grid item xs={12} md={6} ...
      // Since it could be multiline, it's easier to use a replacer function on the whole tag.
      const regex = /<Grid\s+item\s+([^>]*?)>/g;
      
      const newContent = content.replace(regex, (match, attrs) => {
        // Find all size props: xs={12}, sm={6}, md={4}, lg={3}, xl={2}
        const sizeProps = {};
        
        let newAttrs = attrs.replace(/(xs|sm|md|lg|xl)=\{([^}]+)\}/g, (m, breakpoint, value) => {
          sizeProps[breakpoint] = value;
          return ''; // Remove the old prop
        });
        
        // If there are any size props, reconstruct them as size={{xs: 12, md: 6}}
        if (Object.keys(sizeProps).length > 0) {
          const sizeStr = Object.entries(sizeProps)
            .map(([k, v]) => `${k}: ${v}`)
            .join(', ');
          newAttrs = `size={{ ${sizeStr} }} ` + newAttrs;
        }
        
        // Clean up double spaces
        newAttrs = newAttrs.replace(/\s+/g, ' ').trim();
        
        return `<Grid item ${newAttrs}>`;
      });
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Fixed:', fullPath);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src', 'components', 'pages'));
console.log('Done');

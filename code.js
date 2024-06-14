const fs = require('fs');
const path = require('path');

// Function to generate project data
function generateProjectData(folderPaths) {
  const projectData = [];

  folderPaths.forEach((folderPath) => {
    const category = path.basename(folderPath);

    // Read all files in the directory
    const files = fs.readdirSync(folderPath);

    files.forEach((file, index) => {
      const extension = path.extname(file).toLowerCase();
      if (['.jpeg', '.jpg', '.png', '.gif'].includes(extension)) {
        const project = {
          image: path.join(folderPath, file).replace(/\\/g, '/'), // Convert to forward slashes for URLs
          category: category,
          name: `${category} ${index + 1}`,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ratione.",
          link: "/",
        };
        projectData.push(project);
      }
    });
  });

  return projectData;
}

// Example usage
const folderPaths = [
  'E:/sonali/public/charcoal',
  'E:/sonali/public/oil_color',
  'E:/sonali/public/soft_pastle',
  'E:/sonali/public/water_color'
];

const projectData = generateProjectData(folderPaths);
console.log(JSON.stringify(projectData, null, 2));

// If you want to save the output to a file
fs.writeFileSync('projectData.json', JSON.stringify(projectData, null, 2));

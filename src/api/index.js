const fs = require('fs');
const matter = require('gray-matter');

export const getAboutData = async () => {
  const aboutFile = 'public/content/about.md';
  if (!fs.existsSync(aboutFile)) {
    console.error('File about.md not found. Data for about section will be missing.');
    return;
  }

  const data = fs.readFileSync(aboutFile);
  const aboutData = matter(data);
  return {
    title: aboutData.data.title,
    content: aboutData.content
  };
};

export const getPortfolioData = async () => {
  const portfolioFolder = './public/content/portfolio';
  if (!fs.existsSync(portfolioFolder)) {
    console.error('Folder portfolio/ not found. Data for about section will be missing.');
    return;
  }

  const data = [];

  fs.readdirSync(portfolioFolder).forEach(file => {
    const fileData = fs.readFileSync(`${portfolioFolder}/${file}`);
    const dataObj = matter(fileData);
    data.push(dataObj.data);
  });

  return data;
}
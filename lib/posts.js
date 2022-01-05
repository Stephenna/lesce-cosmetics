const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const categoryPanelDirectory = path.join(process.cwd(), 'category-panel')



export const getMarkdown = () => {
    //  read file names inside of posts
    const filenames = fs.readdirSync(categoryPanelDirectory);
  
    const allData = filenames.map(file => {
        // replace .md to get file id
        const ID = file.replace('.md', '');

        // Read markdown file as a string
        const fullPath = path.join(categoryPanelDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            ID,
            ...matterResult.data
        }
    });

    return {
        props: {
            allData
        }
    }
}



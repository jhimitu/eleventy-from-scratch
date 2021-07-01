// this is the eleventy config file, the heartbeat of your website ❤️, the command center 🕹...
module.exports = config => {
    return {
        // these three lines tell Eleventy markdown files, data files and HTML files should be processed by Nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };

};
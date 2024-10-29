class Page {
    constructor(options={}) {
        const { title, file } = Object.assign({
            title: 'Page not found',
            file: '404.html'
        }, options);

        this.title = title;
        this.file = file;
    }

    async getHTML() {
        const request = await fetch('views/' + this.file);
        const html = await request.text();

        return html;
    }
}
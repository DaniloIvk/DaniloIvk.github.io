import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	}),
);

async function PackageMarkdownParser({ markdownUrl }: { markdownUrl: string }) {
	const fallbackError = `
Error getting package information from GitHub.
Please try again later.

[Back to homepage](/)`;

	let text = '';

	if (markdownUrl) {
		try {
			text = await fetch(markdownUrl).then(
				async (response: Response) => await response.text(),
			);
		} catch (_: unknown) {
			const message = await marked.parse(fallbackError);
			const error = new Error(message) as Record<string, any>;
			error.code = 503;
			throw error;
		}
	}

	const __html = await marked.parse(text);

	return <article dangerouslySetInnerHTML={{ __html }} />;
}

export default PackageMarkdownParser;

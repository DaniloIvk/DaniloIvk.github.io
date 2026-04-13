import { Child } from 'hono/jsx';
import GitHubLink from './GitHubLink';

function Package({
	title,
	href,
	githubUrl,
	children,
}: {
	title: string;
	href: string;
	githubUrl: string;
	children: Child;
}) {
	return (
		<article className='package'>
			<div className='package-title'>
				<a href={href}>
					<h2>{title}</h2>
				</a>
				<GitHubLink
					title={title}
					href={githubUrl}
				/>
			</div>
			<p>{children}</p>
		</article>
	);
}

export default Package;

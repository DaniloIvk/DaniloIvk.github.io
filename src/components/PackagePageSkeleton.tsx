import GitHubLink from './GitHubLink';
import PackageMarkdownParser from './PackageMarkdownParser';
import PageSkeleton from './PageSkeleton';

function PackagePageSkeleton({
	name,
	githubUrl,
	markdownUrl,
}: {
	name: string;
	githubUrl: string;
	markdownUrl: string;
}) {
	return (
		<PageSkeleton>
			<GitHubLink
				href={githubUrl}
				title={name}
			/>
			<PackageMarkdownParser markdownUrl={markdownUrl} />
		</PageSkeleton>
	);
}

export default PackagePageSkeleton;

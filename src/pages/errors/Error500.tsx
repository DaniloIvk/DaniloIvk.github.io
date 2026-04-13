import PageSkeleton from '../../components/PageSkeleton';

function Error500({ error }: { error: Error }) {
	const fallbackError =
		'Unexpected error has occurred, please try again later.';
	const code = 'code' in error ? error.code : 500;
	const __html = error?.message || fallbackError;

	return (
		<PageSkeleton>
			<h2>{code}</h2>
			<p dangerouslySetInnerHTML={{ __html }} />
		</PageSkeleton>
	);
}

export default Error500;

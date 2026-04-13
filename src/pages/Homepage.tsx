import PageSkeleton from '../components/PageSkeleton';

function Homepage() {
	return (
		<PageSkeleton>
			<article>
				<a
					href='https://danilo.rs'
					title='danilo.rs'
					target='_blank'
					class='plaintext'
				>
					Evo i mene!
				</a>
			</article>
		</PageSkeleton>
	);
}

export default Homepage;

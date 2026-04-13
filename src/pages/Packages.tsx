import GitHubLink from '../components/GitHubLink';
import Package from '../components/Package';
import PageSkeleton from '../components/PageSkeleton';

function Packages() {
	return (
		<PageSkeleton>
			<h1>My packages</h1>

			<Package
				title='TypeScript Backed Enums'
				href='/packages/ts-backed-enum'
				githubUrl='https://github.com/DaniloIvk/ts-backed-enum'
			>
				Strictly typed, object-oriented enums for modern TypeScript.
				<br />
				Inspired by PHP 8.1 Backed Enums.
			</Package>

			<Package
				title='TypeScript Traits'
				href='/packages/ts-traits'
				githubUrl='https://github.com/DaniloIvk/ts-traits'
			>
				A lightweight, strictly typed utility for class composition
				(Traits/Mixins) in TypeScript. It allows you to combine a Base Class
				with multiple Trait Classes.
			</Package>
		</PageSkeleton>
	);
}

export default Packages;

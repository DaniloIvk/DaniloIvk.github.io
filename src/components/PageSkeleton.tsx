import { PropsWithChildren } from 'hono/jsx';
import GitHubLink from './GitHubLink';

export default function PageSkeleton({ children }: PropsWithChildren) {
	return (
		<html
			lang='en'
			class='dark system'
		>
			<head>
				<meta charset='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					http-equiv='Content-Security-Policy'
					content="default-src 'self'; style-src 'self'"
				/>
				<meta
					http-equiv='X-Content-Type-Options'
					content='nosniff'
				/>
				<meta
					name='referrer'
					content='no-referrer'
				/>
				<meta
					name='google'
					content='notranslate'
				/>
				<meta
					name='theme-color'
					content='#808080'
				/>
				<meta
					name='application-name'
					content='Danilo.Ivk'
				/>
				<meta
					name='description'
					content="Danilo.Ivk's personal website"
				/>
				<link
					rel='icon'
					type='image/svg+xml'
					href='/assets/favicon.svg'
					media='(prefers-color-scheme: light), (prefers-color-scheme: no-preference)'
				/>
				<link
					rel='icon'
					type='image/svg+xml'
					href='/assets/favicon_light.svg'
					media='(prefers-color-scheme: dark)'
				/>
				<meta
					http-equiv='Permissions-Policy'
					content='interest-cohort=()'
				/>
				<title>Danilo.Ivk</title>
				<link
					rel='stylesheet'
					href='/assets/style.css'
				/>
			</head>
			<body>
				<header>
					<nav>
						<a
							id='home'
							href='/#'
							title='Danilo.Ivk'
						>
							<img
								id='logo'
								src='/assets/images/logo.png'
								alt='Danilo.Ivk logo'
								decoding='async'
							/>
							<span>Danilo.Ivk</span>
						</a>
						<div id='menu'>
							<div id='desktop-menu'>
								<div id='pages'>
									<a href='/packages#'>packages</a>
								</div>
								<div
									id='theme'
									title='System'
								></div>
							</div>
							<div id='mobile-menu'>
								<a href='/packages#'>packages</a>
							</div>
						</div>
					</nav>
				</header>
				<main>{children}</main>
				<footer>
					<GitHubLink
						href='https://www.github.com/DaniloIvk'
						title='GitHub/DaniloIvk'
					/>
					<span id='copyright'>© {new Date().getFullYear()} Danilo.Ivk</span>
				</footer>
				<script
					src='/assets/js/theme.js'
					defer
				></script>
				<script
					src='/assets/js/copy-code.js'
					defer
				></script>
			</body>
		</html>
	);
}

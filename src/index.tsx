import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { serveStatic } from '@hono/node-server/serve-static';
import Homepage from './pages/Homepage';
import Packages from './pages/Packages';
import Error404 from './pages/errors/Error404';
import TsBackedEnum from './pages/packages/TsBackedEnum';
import Error500 from './pages/errors/Error500';
import TsTraits from './pages/packages/TsTraits';

const app = new Hono();

app
	.use(logger())
	.use(
		secureHeaders({
			contentSecurityPolicy: {
				defaultSrc: ["'self'"],
				scriptSrc: ["'self'"],
				styleSrc: ["'self'"],
				imgSrc: ["'self'"],
				fontSrc: ["'self'"],
				connectSrc: ["'self'"],
				frameAncestors: ["'none'"],
				baseUri: ["'self'"],
				formAction: ["'self'"],
			},
			referrerPolicy: 'no-referrer',
			permissionsPolicy: {
				accelerometer: [],
				autoplay: [],
				camera: [],
				chUa: [],
				chUaArch: [],
				chUaBitness: [],
				chUaFullVersion: [],
				chUaFullVersionList: [],
				chUaMobile: [],
				chUaModel: [],
				chUaPlatform: [],
				chUaPlatformVersion: [],
				chUaWow64: [],
				computePressure: [],
				crossOriginIsolated: [],
				displayCapture: [],
				encryptedMedia: [],
				fullscreen: [],
				geolocation: [],
				gyroscope: [],
				hid: [],
				identityCredentialsGet: [],
				idleDetection: [],
				keyboardMap: [],
				magnetometer: [],
				microphone: [],
				midi: [],
				payment: [],
				pictureInPicture: [],
				publickeyCredentialsGet: [],
				screenWakeLock: [],
				serial: [],
				storageAccess: [],
				syncXhr: [],
				usb: [],
				windowManagement: [],
				xrSpatialTracking: [],
				clipboardRead: [],
				clipboardWrite: ['self'],
				gamepad: [],
				capturedSurfaceControl: [],
				localFonts: [],
				unload: [],
			},
		}),
	)
	.use('/assets/*', async (c, next) => {
		await next();
		c.header('Cache-Control', 'public, max-age=604800, immutable');
	})
	.use('/assets/*', serveStatic({ root: './' }))
	.use('/favicon.ico', serveStatic({ path: './assets/favicon.svg' }))
	.notFound((c) => c.html(<Error404 />))
	.onError((error, c) => c.html(<Error500 error={error} />))
	.use('*', async (c, next) => {
		await next();
		if (!c.res.headers.has('Cache-Control')) {
			c.header('Cache-Control', 'public, max-age=604800');
		}
	})
	.get('/', (c) => c.html(<Homepage />))
	.get('/packages', (c) => c.html(<Packages />))
	.get('/packages/ts-backed-enum', (c) => c.html(<TsBackedEnum />))
	.get('/packages/ts-traits', (c) => c.html(<TsTraits />));

export default app;

import localFont from "next/font/local"; // Fuentes locales

//Las fuentes son llamadas de la carpter /app/fonts

// Definicion de la fuente workSans
export const workSans = localFont({
    src: [
        {
            path: './fonts/WorkSans-Black.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Thin.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-ExtraLight.ttf',
            weight: '100',
            style: 'normal'
        },
    ],
    variable: '--font-work-sans',
})
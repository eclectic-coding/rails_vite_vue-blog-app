// NOTE: Optimize the SSR bundle by not splitting by page.
const pages = import.meta.env.SSR
    ? import.meta.globEagerDefault('../UI/pages/**/*.vue')
    : import.meta.glob('../UI/pages/**/*.vue')

export async function resolvePage (name) {
    const page = pages[`../UI/pages/${name}.vue`]

    if (!page)
        throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`)

    return import.meta.env.SSR
        ? page
        : (await page()).default
}
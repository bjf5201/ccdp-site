let loaded = false;

/**
 * Loads Preact DevTools in development mode, in the browser, once.
 * Safe to call from any component or module.
 */

const ENABLED =
    import.meta.env.DEV &&
    import.meta.env.PUBLIC_PREACT_DEVTOOLS === "true";

export async function ensurePreactDevtools(): Promise<void> {
    // Do not load if PUBLIC_PREACT_DEVTOOLS is explicitly set to "false"
    if (!ENABLED) return;

    // Only load in dev builds
    if (!import.meta.env.DEV) return;

    // Only load in the browser to prevent SSR/server import issues
    if (typeof window === "undefined") return;

    // Only load once
    if (loaded) return;
    loaded = true;

    // Safely attempt to dynamically import Preact DevTools and display the proper console message
    try {
        await import("preact/devtools");
    } catch (err) {
        // Don"t crash dev if devtools can"t load for whatever reason
        // eslint-disable-next-line no-console
        console.warn("Failed to load Preact DevTools:", err);
    }
}
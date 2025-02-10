
import pantheon from "./pantheon.js";

// Check if running in a browser environment
if (typeof window !== 'undefined') {
  pantheon();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  pantheon();
}

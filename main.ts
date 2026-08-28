import pantheon from "./pantheon.js";

// Check if running in a browser environment
if (typeof window !== 'undefined') {
  pantheon();
} else {
  // We are in a terminal context (Deno or Node.js)
  const port = 8000;
  console.log(`\n🏛️  Starting Pantheon Game Web Server on http://localhost:${port} ...`);

  // Browser launcher helper
  const openBrowser = () => {
    const url = `http://localhost:${port}`;
    if (typeof Deno !== 'undefined') {
      const command = Deno.build.os === "windows" ? "cmd" : Deno.build.os === "darwin" ? "open" : "xdg-open";
      const args = Deno.build.os === "windows" ? ["/c", "start", url] : [url];
      try {
        new Deno.Command(command, { args }).spawn();
      } catch (_err) {
        console.log(`Please open ${url} in your browser manually.`);
      }
    } else {
      // Node.js
      import("node:child_process").then(({ exec }) => {
        const startCmd = process.platform === "win32" ? `start ${url}` : process.platform === "darwin" ? `open ${url}` : `xdg-open ${url}`;
        exec(startCmd, (err) => {
          if (err) console.log(`Please open ${url} in your browser manually.`);
        });
      });
    }
  };

  // Start HTTP server in Deno or Node.js
  if (typeof Deno !== 'undefined') {
    // Deno static file server
    import("jsr:@std/http/file-server").then(({ serveDir }) => {
      Deno.serve({ port }, (req) => {
        return serveDir(req, { fsRoot: "." });
      });
      openBrowser();
    });
  } else {
    // Node.js static file server
    Promise.all([
      import("node:http"),
      import("node:fs"),
      import("node:path"),
      import("node:url")
    ]).then(([http, fs, path, url]) => {
      const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
      
      const mimeTypes: Record<string, string> = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".ts": "application/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
      };

      const server = http.createServer((req, res) => {
        let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url || "");
        const extname = String(path.extname(filePath)).toLowerCase();
        const contentType = mimeTypes[extname] || "application/octet-stream";

        fs.readFile(filePath, (error, content) => {
          if (error) {
            if (error.code === 'ENOENT') {
              res.writeHead(404, { 'Content-Type': 'text/html' });
              res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
              res.writeHead(500);
              res.end(`Server Error: ${error.code} ..\n`);
            }
          } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
          }
        });
      });

      server.listen(port, () => {
        openBrowser();
      });
    });
  }

  // Run the command-line game simulation in parallel
  pantheon();
}

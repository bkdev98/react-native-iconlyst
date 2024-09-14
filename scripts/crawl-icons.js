/**
 * Ask for bearer token
 * Fetch /icons, 500 entries at a time and save to tmp-icons.json
 * Scan through tmp-icons.json and fetch svg_content from icon.svg_url
 * Write back to icons.json and delete tmp-icons.json
 */

const ICONLY_API = "https://prod.iconly.pro/api/v1";

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const undici = require("undici");

undici.setGlobalDispatcher(new undici.Agent({ connect: { timeout: 20_000 } }));

const ICONS_FILE = path.join(__dirname, "../icons.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your Iconly bearer token: ", async (token) => {
  rl.close();
  if (!token) {
    console.error("Bearer token is required");
    process.exit(1);
  }

  console.log("⬇️  Fetching icons...");
  const PER_PAGE = 500;
  let lastPageSize = PER_PAGE;
  let page = 1;
  let totalRecords = 0;
  while (lastPageSize === PER_PAGE) {
    try {
      const response = await undici.fetch(
        `${ICONLY_API}/icons?page=${page}&page_size=${PER_PAGE}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data?.data?.icons?.length) {
        console.log("⬇️  Fetching SVG content...");
        const icons = data?.data?.icons;
        const updatedIcons = await Promise.all(
          icons.map(async (icon, index) => {
            if (!icon.svg_url) {
              return;
            }
            const svgResponse = await fetch(icon.svg_url);
            const svgContent = await svgResponse.text();
            return {
              ...icon,
              svg_content: svgContent,
            };
          })
        );
        // push icons to tmp-icons.json
        let tmpIcons = [];
        if (fs.existsSync(ICONS_FILE)) {
          tmpIcons = JSON.parse(fs.readFileSync(ICONS_FILE, "utf8"));
        }
        tmpIcons.push(...updatedIcons);
        fs.writeFileSync(ICONS_FILE, JSON.stringify(tmpIcons, null, 2));
      }
      lastPageSize = data?.data?.icons?.length || 0;
      totalRecords += lastPageSize;
      console.log(`↡ Page: ${page}, ${totalRecords} icons`);
      page += 1;
    } catch (error) {
      console.error(error);
    }
  }
  console.log(`☑️  Fetched ${totalRecords} icons`);
  process.exit(0);
});

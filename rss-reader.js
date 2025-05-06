function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = [
    { label: 'año', seconds: 31536000 },
    { label: 'mes', seconds: 2592000 },
    { label: 'semana', seconds: 604800 },
    { label: 'día', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 's', seconds: 1 }
  ];

  for (const i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count > 0) {
      return `${count}${i.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  return 'ahora';
}

const feeds = [
  {
    name: "Krebs on Security",
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://krebsonsecurity.com/feed")
  },
  {
    name: "Threatpost",
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://threatpost.com/feed")
  },
  {
    name: "BleepingComputer",
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://www.bleepingcomputer.com/feed/")
  },
  {
    name: "Naked Security (Sophos)",
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://nakedsecurity.sophos.com/feed")
  },
  {
    name: "Microsoft Security Blog",
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://www.microsoft.com/en-us/security/blog/feed")
  }
];

const container = document.getElementById("rss-feed");

feeds.forEach(feed => {
  fetch(feed.url)
    .then(res => res.json())
    .then(data => {
      const contents = JSON.parse(data.contents);
      const section = document.createElement("section");
      const title = document.createElement("h3");
      title.textContent = feed.name;
      section.appendChild(title);

      const grid = document.createElement("div");
      grid.style.display = "grid";
      grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
      grid.style.gap = "20px";

      contents.items.slice(0, 5).forEach(item => {
        const card = document.createElement("div");
        card.style.border = "1px solid #00ff88";
        card.style.borderRadius = "8px";
        card.style.padding = "1rem";
        card.style.backgroundColor = "#111";
        card.style.boxShadow = "0 0 12px #00ff88";

        if (item.thumbnail || item.enclosure?.link) {
          const img = document.createElement("img");
          img.src = item.thumbnail || item.enclosure.link;
          img.alt = item.title;
          img.style.width = "100%";
          img.style.borderRadius = "5px";
          img.style.marginBottom = "10px";
          card.appendChild(img);
        }

        const link = document.createElement("a");
        link.href = item.link;
        link.target = "_blank";
        link.textContent = item.title;
        link.style.display = "block";
        link.style.color = "#00ff88";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
        link.style.marginBottom = "6px";

        const date = document.createElement("span");
        date.textContent = timeAgo(item.pubDate);
        date.style.fontSize = "0.8rem";
        date.style.color = "#999";

        card.appendChild(link);
        card.appendChild(date);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    })
    .catch(err => {
      console.error("Error cargando feed:", feed.name, err);
    });
});

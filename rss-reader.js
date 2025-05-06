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
  "https://krebsonsecurity.com/feed",
  "https://www.bleepingcomputer.com/feed/",
  "https://nakedsecurity.sophos.com/feed",
  "https://www.microsoft.com/en-us/security/blog/feed",
  "https://cybersecuritynews.es/feed/",
  "https://www.welivesecurity.com/es/feed"
];

const allItems = [];
const container = document.getElementById("rss-feed");

Promise.all(
  feeds.map(feed =>
    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=" + feed))
      .then(res => res.json())
      .then(data => {
        const parsed = JSON.parse(data.contents);
        return parsed.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          thumbnail: item.thumbnail || item.enclosure?.link || "",
          source: parsed.feed.title
        }));
      })
      .catch(err => {
        console.error("Error cargando feed:", feed, err);
        return [];
      })
  )
).then(results => {
  results.forEach(feedItems => {
    allItems.push(...feedItems);
  });

  const sorted = allItems
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .slice(0, 25);

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
  grid.style.gap = "20px";

  sorted.forEach(item => {
    const card = document.createElement("div");
    card.style.border = "1px solid #00ff88";
    card.style.borderRadius = "8px";
    card.style.padding = "1rem";
    card.style.backgroundColor = "#111";
    card.style.boxShadow = "0 0 12px #00ff88";

    if (item.thumbnail) {
      const img = document.createElement("img");
      img.src = item.thumbnail;
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

    const source = document.createElement("small");
    source.textContent = item.source;
    source.style.color = "#aaa";
    source.style.display = "block";

    const date = document.createElement("span");
    date.textContent = timeAgo(item.pubDate);
    date.style.fontSize = "0.8rem";
    date.style.color = "#999";

    card.appendChild(link);
    card.appendChild(source);
    card.appendChild(date);
    grid.appendChild(card);
  });

  container.appendChild(grid);
});

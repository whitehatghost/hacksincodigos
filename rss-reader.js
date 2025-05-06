const feeds = [
  {
    name: "Krebs on Security",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://krebsonsecurity.com/feed"
  },
  {
    name: "Threatpost",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://threatpost.com/feed"
  },
  {
    name: "BleepingComputer",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.bleepingcomputer.com/feed/"
  },
  {
    name: "Naked Security (Sophos)",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://nakedsecurity.sophos.com/feed"
  },
  {
    name: "Microsoft Security Blog",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.microsoft.com/en-us/security/blog/feed"
  }
];

const container = document.getElementById("rss-feeds");

feeds.forEach(feed => {
  fetch(feed.url)
    .then(response => response.json())
    .then(data => {
      const section = document.createElement("div");
      section.className = "feed";
      section.innerHTML = `<h3>${feed.name}</h3><ul></ul>`;

      const ul = section.querySelector("ul");

      data.items.slice(0, 5).forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        ul.appendChild(li);
      });

      container.appendChild(section);
    })
    .catch(error => {
      console.error("Error cargando feed:", feed.name, error);
    });
});

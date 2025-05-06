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

      const ul = document.createElement("ul");

      contents.items.slice(0, 5).forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    })
    .catch(err => {
      console.error("Error cargando feed:", feed.name, err);
    });
});

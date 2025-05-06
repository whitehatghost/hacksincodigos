document.addEventListener("DOMContentLoaded", function () {
  const feeds = [
    { name: "Krebs on Security", url: "https://krebsonsecurity.com/feed" },
    { name: "Threatpost", url: "https://threatpost.com/feed" },
    { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/feed/" },
    { name: "Naked Security (Sophos)", url: "https://nakedsecurity.sophos.com/feed" },
    { name: "Microsoft Security Blog", url: "https://www.microsoft.com/en-us/security/blog/feed" }
  ];

  const container = document.getElementById("rss-feed");

  feeds.forEach(feed => {
    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`)}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        const parsed = JSON.parse(data.contents);
        if (!parsed.items || !parsed.items.length) throw new Error("No hay contenido.");

        const section = document.createElement("section");
        section.innerHTML = `<h3>${feed.name}</h3>`;

        const list = document.createElement("ul");
        parsed.items.slice(0, 5).forEach(item => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
          list.appendChild(li);
        });

        section.appendChild(list);
        container.appendChild(section);
      })
      .catch(error => {
        console.error(`Error cargando feed: ${feed.name}`, error);
      });
  });
});

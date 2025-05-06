document.addEventListener("DOMContentLoaded", () => {
  const feeds = [
    { name: "Krebs", url: "https://krebsonsecurity.com/feed" },
    { name: "Threatpost", url: "https://threatpost.com/feed" },
    { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/feed/" },
    { name: "Sophos", url: "https://nakedsecurity.sophos.com/feed" },
    { name: "Microsoft", url: "https://www.microsoft.com/en-us/security/blog/feed" }
  ];

  const container = document.getElementById("rss-output");
  if (!container) return;

  feeds.forEach(feed => {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (!data.items || !data.items.length) {
          throw new Error("No se pudo obtener contenido del feed.");
        }

        const section = document.createElement("section");
        section.classList.add("feed-section");

        const title = document.createElement("h2");
        title.textContent = `📰 ${feed.name}`;
        section.appendChild(title);

        const ul = document.createElement("ul");

        data.items.slice(0, 5).forEach(item => {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = item.title;
          li.appendChild(link);
          ul.appendChild(li);
        });

        section.appendChild(ul);
        container.appendChild(section);
      })
      .catch(error => {
        console.error(`Error cargando feed: ${feed.name}`, error);
      });
  });
});

// URL del feed que querés mostrar
const feedUrl = encodeURIComponent("https://www.bleepingcomputer.com/feed/");
const feedUrl = encodeURIComponent("https://www.krebsonsecurity.com/feed);
const feedUrl = encodeURIComponent("https://www.krebsonsecurity.com/feed);
const feedUrl = encodeURIComponent("https://www.krebsonsecurity.com/feed);
                                  

// URL del API que convierte RSS a JSON
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("rss-feed");
    container.innerHTML = "";

    if (data.items && data.items.length > 0) {
      data.items.slice(0, 8).forEach(item => {
        const entry = document.createElement("div");
        entry.className = "rss-item";

        entry.innerHTML = `
          <h3><a href="${item.link}" target="_blank" style="color:#00ff88;">${item.title}</a></h3>
          <p>${item.pubDate ? new Date(item.pubDate).toLocaleString() : ''}</p>
          <p>${item.description || ''}</p>
        `;

        container.appendChild(entry);
      });
    } else {
      container.innerHTML = "No se encontraron noticias.";
    }
  })
  .catch(error => {
    console.error("Error al cargar el feed:", error);
    document.getElementById("rss-feed").innerHTML = "Hubo un error al cargar las noticias.";
  });

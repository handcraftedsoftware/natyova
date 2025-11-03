---
layout: default
title: Главная
---
<section class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
  <p>
    <a class="btn" href="{{ '/songs/' | relative_url }}">Все песни</a>
    <a class="btn ghost" href="{{ site.artist.youtube }}">YouTube</a>
    <a class="btn ghost" href="{{ site.artist.spotify }}">Spotify</a>
    <a class="btn ghost" href="{{ site.artist.apple_music }}">Apple Music</a>
  </p>
</section>

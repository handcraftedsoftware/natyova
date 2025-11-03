---
layout: default
title: Песни
permalink: /songs/
---
<h1>Песни</h1>
<ul class="song-list">
  {% assign sorted = site.songs | sort: 'date' | reverse %}
  {% for song in sorted %}
  <li>
    <a href="{{ song.url | relative_url }}">{{ song.title }}</a>
    {% if song.year %}<span class="meta">({{ song.year }})</span>{% endif %}
  </li>
  {% endfor %}
</ul>

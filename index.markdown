---
layout: default
title: Singles
permalink: /
---

<ul class="song-grid">
  {% assign sorted = site.songs | sort: 'date' | reverse %}
  {% for song in sorted %}
    {% assign cover = song.cover | default: song.image | default: "/assets/img/cover-placeholder.jpg" %}
    <li class="song-card">
      <a class="song-link" href="{{ song.url | relative_url }}" aria-label="{{ song.title }}">
        <figure>
          <div class="thumb">
            <img
              src="{{ cover | relative_url }}"
              alt="Cover: {{ song.title }}"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption class="song-caption">
            {{ song.title }}
          </figcaption>
        </figure>
      </a>
    </li>
  {% endfor %}
</ul>

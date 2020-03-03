---
title: "Posts by html"
layout: archive
permalink: /html/
author_profile: true
---

{% assign posts = site.categories.html| sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

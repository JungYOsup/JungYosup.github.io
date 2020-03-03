---
title: "Posts by Algorithm"
layout: archive
permalink: /algorithm/
author_profile: true
---

{% assign posts = site.categories.algorithm | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

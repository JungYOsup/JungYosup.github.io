---
title: "Posts by diary"
layout: archive
permalink: /diary/
author_profile: true
---

{% assign posts = site.categories.diary | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

---
title: "Posts by next"
layout: archive
permalink: /next/
author_profile: true
---

{% assign posts = site.categories.next | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

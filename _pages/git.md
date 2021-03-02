---
title: "Posts by git"
layout: archive
permalink: /git/
author_profile: true
---

{% assign posts = site.categories.git | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

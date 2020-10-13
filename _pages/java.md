---
title: "Posts by java"
layout: archive
permalink: /java/
author_profile: true
---

{% assign posts = site.categories.java | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

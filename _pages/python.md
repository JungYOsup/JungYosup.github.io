---
title: "Posts by python"
layout: archive
permalink: /python/
author_profile: true
---

{% assign posts = site.categories.python | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

---
title: "Posts by etc"
layout: archive
permalink: /etc/
author_profile: true
---

{% assign posts = site.categories.etc | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

---
title: "Posts by Project"
layout: categories
permalink: /project/
author_profile: true
---

#### 이미지를 누르면 코드를 확인하실수 있습니다.

{% assign posts = site.categories.project | sort:"date" %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}

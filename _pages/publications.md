---
layout: page
permalink: /publications/
title: publications
description: My single and co-authored publications.
years: [2023, 2022, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2008]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

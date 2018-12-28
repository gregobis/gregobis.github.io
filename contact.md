---
layout: default
title: contact
background-color: kournikova
---

<article class="{{ page.background-color }}--bg py-5">
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <header>
          <h1 class="text-center">{{ page.title | escape }}</h1>
        </header>
      </div>
    </div>
  </div>
</article>

<article class="py-5">
  <div class="container my-5">
    <div class="row">
      <div class="col-6 mx-auto">
      {%- if site.email -%}
          <a href="mailto:{{ site.email }}">
            {{ site.email }}
          </a>
      {%- endif -%}
      </div>
    </div>
  </div>
</article>

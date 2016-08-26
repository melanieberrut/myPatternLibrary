
{% extend 'path to file 1' %}
{% block input %}
    <label for="{{id}}">{{text}}</label>
    {{ input.inline() }}
 {% endblock %}

{# file 1 #}
  <div class="form-group">
  	{% block input %}
  	nhjgjhgh
	{% endblock %}
  </div>
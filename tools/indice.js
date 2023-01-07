

var classes = {

    'first-steps': {
        'title': 'First Steps in Javascript',
        'url': '01-first-steps.html',
        'section_start': 'Section 1 - Javascript Basics' 
    },
    'sintaxe': {
        'title': 'Javascript Syntax',
        'url': '02-javascript-syntax.html'   
    },
    'dom': {
        'title': 'DOM - Document Object Model',
        'url': '03-dom.html'  
    },
    'working_dom': {
        'title': 'Working With the DOM',
        'url': '04-working-with-the-dom.html'   
    },
    'variaveis': {
        'title': 'Variables',
        'url': '05-variables.html' 
    },
    'tipos_dados_strings': {
        'title': 'Data Types - Strings',
        'url': '06-data-types-strings.html'   
    },
    'tipos_dados_numbers': {
        'title': 'Data Types - Numbers',
        'url': '07-data-types-numbers.html'   
    },
    'tipos_dados_booleans': {
        'title': 'Data Types - Booleans',
        'url': '08-data-types-booleans.html'   
    },
    'tipos_dados_null': {
        'title': 'Data Types - Null and Undefined',
        'url': '09-data-types-null-undefined.html'   
    },
    'exercicio1': {
        'title': 'List of Exercises # 1',
        'url': '10-exercise1.html'   
    },
    
    'funcoes': {
        'title': 'Functions',
        'url': '11-functions.html'   
    },
    'tipos_arrays': {
        'title': 'Data Types - Arrays',
        'url': '12-data-types-arrays.html'   
    },
    'tipos_objetos': {
        'title': 'Data Types - Objects',
        'url': '13-data-types-objects.html'   
    },
    'metodos_objetos': {
        'title': 'Objects Methods',
        'url': '14-objects-methods.html'   
    },
    'exercicio2': {
        'title': 'List of Exercises # 2',
        'url': '15-exercise2.html'   
    },
    'events': {
        'title': 'Events',
        'url': '16-events.html'  ,
        'section_start': 'Section 2 - Diving Deeper into Javascript'    
    },
    'manipulacao_css': {
        'title': 'CSS Manipulation',
        'url': '17-css-manipulation.html'   
    },
    'outros_get_element': {
        'title': 'More getElement Methods',
        'url': '18-more-get-element.methods.html'   
    },
    'loop-for': {
        'title': 'For and For/In Loops',
        'url': '19-loops-for-for-in.html'   
    },
    'loop-while': {
        'title': 'While and do/while loops',
        'url': '20-loops-while-do-while.html'   
    },
    'condicionais': {
        'title': 'Conditionals',
        'url': '21-conditionals.html'   
    },
    'aninhamento': {
        'title': 'Nesting loops and conditionals',
        'url': '22-nesting-conditionals.html'   
    },
    'escopo': {
        'title': 'Variable Scope',
        'url': '23-variable-scope.html'   
    },
    'exercicio3': {
        'title': 'List of Exercises # 3',
        'url': '24-exercise3.html'   
    },
    'bom': {
        'title': 'BOM - Browser Object Model',
        'url': '25-bom.html',
    },
    'data-hora': {
        'title': 'Date & Time',
        'url': '26-date-time.html'   
    },
    'metodos-tempo': {
        'title': 'Time Methods',
        'url': '27-time-methods.html'   
    },
    'break-continue': {
        'title': 'Break & Continue',
        'url': '28-break-continue.html'   
    },
    'formularios': {
        'title': 'Forms',
        'url': '29-forms.html'   
    },
    'evento-onchange': {
        'title': 'The onchange event',
        'url': '30-onchange-event.html'   
    },
    'exercicio4': {
        'title': 'List of Exercises # 4',
        'url': '31-exercise4.html'   
    },
    'jquery_intro': {
        'title': 'jQuery - Introduction',
        'url': '32-jquery-intro.html'  ,
        'section_start': 'Section 3 - jQuery'    
    },
    'jquery_syntax': {
        'title': 'jQuery - Syntax',
        'url': '33-jquery-syntax.html'    
    },
    'jquery_dom_manip': {
        'title': 'jQuery - DOM Manipulation',
        'url': '34-jquery-dom-manipulation.html'    
    },
    'jquery_forms': {
        'title': 'jQuery - Forms',
        'url': '35-jquery-forms.html'    
    },
    'jquery_class_manip': {
        'title': 'jQuery - CSS Classes Manipulation',
        'url': '36-jquery-css-classes-manipulation.html'    
    },
    'jquery_events': {
        'title': 'jQuery - Events',
        'url': '37-jquery-events.html'    
    },
    'jquery_effects': {
        'title': 'jQuery - Effects',
        'url': '38-jquery-effects.html'    
    },
    'jquery_animate': {
        'title': 'jQuery - Animate',
        'url': '39-jquery-animate.html'    
    },
    'callback_functions': {
        'title': 'Callback Functions',
        'url': '40-callback-functions.html'  ,
        'section_start': 'Section 4 - Advanced Javascript'    
    },
    'error_handling': {
        'title': 'Error Handling',
        'url': '41-error-handling.html'    
    },
    'namespaces': {
        'title': 'Namespaces',
        'url': '42-namespaces.html'    
    },
    'json': {
        'title': 'JSON - Javascript Object Notation',
        'url': '43-json.html'    
    },
    'localstorage': {
        'title': 'Local Storage & Session Storage',
        'url': '44-local-storage.html'    
    },
    'ajax_intro': {
        'title': 'Ajax - Intro',
        'url': '45-ajax-intro.html'  ,
        'section_start': 'Section 5 - Ajax'    
    },
    'ajax_request': {
        'title': 'Ajax - Request',
        'url': '46-ajax-request.html'  
    },
    'ajax_response': {
        'title': 'Ajax - Response',
        'url': '47-ajax-response.html'  
    },
    'ajax_jquery': {
        'title': 'Ajax - jQuery',
        'url': '48-ajax-jquery.html'  
    },
    'exercicio5': {
        'title': 'List of Exercises # 5',
        'url': '49-exercise5.html'   
    },
};

var classes_names = Object.keys(classes);


document.addEventListener('DOMContentLoaded', function(){ 

    var index_element = document.getElementById("class_index");
    var prev_class = document.getElementById("prev_class");
    var next_class = document.getElementById("next_class");

    if (current_class != classes_names[0]) {
        
        the_prev_url = classes[classes_names[classes_names.indexOf(current_class)-1]].url;
        prev_class.innerHTML = "<a href='" + the_prev_url + "'>" + "&lt;&lt; Previous Lesson" + "</a>";
    }

    if (current_class != classes_names[classes_names.length-1]) {
        the_next_url = classes[classes_names[classes_names.indexOf(current_class)+1]].url;
        next_class.innerHTML = "<a href='" + the_next_url + "'>" + "Next Lesson &gt;&gt;" + "</a>";
    }

    for ( a = 0 ; a < classes_names.length ; a++) {
        
        if (classes[classes_names[a]].section_start) {

            index_element.innerHTML +=     "<div class='section-index'>" + classes[classes_names[a]].section_start + "</div>";

        } 
                
        if (current_class != classes_names[a]) {
            index_element.innerHTML +=     "<li>" + "<a href='" + classes[classes_names[a]].url + "'>" + classes[classes_names[a]].title + "</a>" + "</li>";
        } else {
            index_element.innerHTML +=     "<li>" + classes[classes_names[a]].title + "</li>";
        }

    }

    if (document.getElementById("user_greeting_confirm")) {
        document.getElementById("user_greeting_confirm").onclick = function(){
            var username = document.getElementById("user_greeting_input").value;
            
            if (!username) {
                username = "guest user";
            }
    
            document.getElementById("user_greeting_message").innerHTML = "Welcome " + username + "!"
            document.getElementById("user_greeting_input").value = "";
        };
    }

}, false);






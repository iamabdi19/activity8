$(document).ready(function() {
    var availableLanguages = [
        'Erlang', 'Julia', 'Clojure', 'Python', 'Dart', 'C++', 'Perl', 'Kotlin', 
        'JavaScript', 'Ruby', 'Scala', 'TypeScript', 'Lua', 'Shell', 'Java', 'SQL', 
        'Swift', 'PL/SQL', 'Pascal', 'MATLAB', 'R', 'Go', 'Prolog', 'F#', 
        'Racket', 'Haskell', 'PowerShell', 'C#', 'PHP', 'OCaml', 'Objective-C', 'Groovy',
        'Delphi', 'HTML', 'Bash', 'CSS', 'Assembly', 'Fortran', 'Rust', 'VBScript', 
        'Ada', 'COBOL', 'Crystal', 'VB.NET', 'Scheme', 'Tcl', 'Lisp', 'Elixir'
    ];

    $('#languages').autocomplete({
        source: availableLanguages
    });

    $("#birthday").datepicker({
        changeMonth: true, 
        changeYear: true,   
        yearRange: "1900:2024", 
        showButtonPanel: true  
    });
});

console.log('here')


$(document).ready(function (){
    let inputText = $('input').val();

    $('button').click(function() {
        let inputText = $('input').val();
        console.log(inputText);
        addTodo(inputText);
    })

    function addTodo(text) {
        $.post("/add-todo", {
            "todo-text": text,
        }, function(data, status) {
            console.log('post: ', data, ":::", status);
        })
    }

    console.log('inner html',$('input').innerHTML)
})
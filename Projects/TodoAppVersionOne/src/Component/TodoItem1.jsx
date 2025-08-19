function TodoItem1(){
    let name="Buy Milk"
    let date="4/10/25"
    return(<div class="row">
          <div class="col-6">{name}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button class="btn btn-sucess btn-danger">Delete</button>
          </div>
        </div>)
}

export default TodoItem1;
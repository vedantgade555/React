function TodoItem2(){
    let name="Go To Collage"
    let date="4/10/25"
    return(<div class="row vgrow">
          <div class="col-6">{name}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button class="btn btn-sucess btn-danger vgbtn">Delete</button>
          </div>
        </div>)
}

export default TodoItem2;
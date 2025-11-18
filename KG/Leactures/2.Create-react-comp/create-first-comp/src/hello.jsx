// Dynamic Component

function Hello(){

    let no=453;
    let myName = 'Vedant'
    let fullname=()=>{
        return 'Vedant Gade';
    }

    return <h3>
        My name id :{myName}<br/>
        MessageNo: {no} <br/> Hello ! Welcome to HOOD, My name is {fullname()};
    </h3>
}

export default Hello;
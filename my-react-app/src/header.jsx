function Header({log_in = true}){
return( 
    (log_in)?
    <div>
        <h1>Hello there, Logged in user</h1>
    </div>:
    <div> <h1>You are not logged in but anyways, Welcome </h1></div>

)

}

export default Header;
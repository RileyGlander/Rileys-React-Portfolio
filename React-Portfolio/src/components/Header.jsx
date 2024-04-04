function Header(props) {
return(
<div>
    <h1>Header!!!</h1>
    <h1>{props.name} at {props.location}</h1>
</div>
)
}

// Need to include
// developer's name and navigation with titles 
// corresponding to different sections of the portfolio

export default Header;
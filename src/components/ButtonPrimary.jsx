const ButtonPrimary = ({children, className, onClick, backgroundColor, id}) => {
    
    const style = {
        padding: '0.75rem 1.5rem', 
        backgroundColor: '#3a7dff', 
        color: 'white',
        textDecoration: 'none', 
        borderRadius: '8px', 
        minWidth: '150px', 
        fontWeight: '600', 
        textAlign: 'center',
        border: 'solid 2px white',
    }

    if (backgroundColor) {
        style.backgroundColor = backgroundColor
    }

    return (
        <div className = "button-primary-container d-flex justify-content-center">
            <button id = {id} onClick = {onClick} className = {`button-primary ${className}`} style = {style}>
                {children}
            </button>
        </div>
    )
}

export default ButtonPrimary
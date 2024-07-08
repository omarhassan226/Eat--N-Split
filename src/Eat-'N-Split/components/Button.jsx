/* eslint-disable react/prop-types */

const Button = ({children, show}) => {
    return (
        <div className="buttonDiv">
            <button className="button" onClick={show}>{children}</button>
        </div>
    )
}

export default Button

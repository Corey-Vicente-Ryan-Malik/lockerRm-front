import holup from '../images/holup.jpeg'

function Error() {
    return(
        <div>
            <img src={holup}/>

            <h1>
                404...That page doesn't exist big fella.
            </h1>
        </div>

    )
}

export default Error
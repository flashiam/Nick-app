import { useEffect, useState } from "react"
import { Card, Spinner } from "react-bootstrap"

const SaveSpotify = () => {
    
    const [spotifyToken, setSpotifyToken] = useState<string>("")

    useEffect(()=>{

        const code = new URLSearchParams(window.location.search).get('code')
        setSpotifyToken(code?code:"")
        localStorage.setItem("spotifyToken", code?code:"")
        window.close()
    
    }, [spotifyToken])

    return (
        <Card>
            <div>
                <Spinner animation="grow">
                </Spinner>
                <p>{spotifyToken}</p>
            </div>
        </Card>
        
        
    )


}

export default SaveSpotify
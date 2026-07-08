export const UserDetails = ({ name, isOnline, hideOffline }) => {

    if (hideOffline && !isOnline) {
        return null
    }

    // if (isOnline) {
    //     return (
    //         <div>
    //             <h3>{name}</h3>
    //             <p>Online</p>
    //             <p>Available for chat</p>
    //             <button>Send Message</button>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h3>{name}</h3>
            <p>{isOnline ? "Online" : "Offline"}</p>
            <p>{isOnline ? "Available for chat" : "Not Availble for chat"}</p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <p>Check back later</p>
                )
            }
            <p>Check back later</p>
        </div>
    )
}
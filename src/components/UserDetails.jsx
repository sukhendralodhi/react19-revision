export const UserDetails = ({
    name, isOnline, hideOffline, isPremium, isNewUser, role
}) => {

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

    let roleBadge = null;

    if (role === 'Admin') {
        roleBadge = <span>Admin</span>
    } else if (role === 'Moderator') {
        roleBadge = <span>Moderator</span>
    } else if (role === 'Vip') {
        roleBadge = <span>Vip</span>
    }

    return (
        <div>
            <h3>
                {name}
                {isPremium && <span> Premium Member </span>}
                {isNewUser && <span>New User </span>}
                {roleBadge}
            </h3>
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
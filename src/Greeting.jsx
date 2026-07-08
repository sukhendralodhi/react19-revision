export const Greeting = ({ name = "Guest", message = "Hello" }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    );
};
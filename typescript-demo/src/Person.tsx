

interface Props {
    name:string;
    email:string;
    membership:string;
    favouriteNumber: number;
    languages: string[];
    // country: Country;
}
// export enum Country {
//     Brazil="Brazil",
//     India = "India",
//     USA = "USA",
// }

export const Person = (props: Props) =>{
    
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>MemberShip: {props.membership}</h1>
            <h1>Favourite languages are</h1>
            {props.languages.map((friend: string)=>(
                <h1>{friend}</h1>
            ))}
            {/* <h1>Country: {props.country}</h1> */}
        </div>
    )
}
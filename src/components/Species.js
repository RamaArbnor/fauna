import { useEffect, useState } from "react"

export default function Species(){

    const [species, setSpecies] = useState([])

    // fetch the data from a google sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SHEET_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSpecies(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
        {species.toString()}
        </>
    )
}
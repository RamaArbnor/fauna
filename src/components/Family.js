import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Nav from "./Nav";
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import './Family.css'; // Import CSS for styling
import Footer from "./Footer";

export default function Family() {
    const [families, setFamilies] = useState([
        'Amfibet dhe Reptilet', 'Coleoptera', 'Ephemeroptera', 
        'Gjitaret', 'Hemiptera Diptera Mecoptera', 'Lepidoptera', 
        'Merimangat', 'Odonata', 'Pakurrizoret tjerë', 
        'Peshqit', 'Plecoptera', 'Shpendet', 'Trichoptera'
    ]);
    
    const [data, setData] = useState([]); // State for CSV data
    const { name } = useParams();
    const [loading, setLoading] = useState(true); // Add loading state

    // Fetch and parse CSV on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../data/' + name + '.csv');
                const contentType = response.headers.get('content-type');
                if (!contentType.includes('text/csv')) {
                    throw new Error('Response is not in CSV format');
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const reader = response.body.getReader();
                const result = await reader.read(); // Raw bytes
                const decoder = new TextDecoder('utf-8');
                const csv = decoder.decode(result.value); // Decode bytes to string
                Papa.parse(csv, {
                    header: true, // If the CSV has a header row
                    skipEmptyLines: true,
                    complete: (results) => {
                        setData(results.data); // Set the parsed data
                        // console.log(results.data);
                    },
                });
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error:', error);
                window.location.href = '/error';
            }
        };

        fetchData();
    }, [name]); // Add 'name' to the dependency array

    return (
        <div>
            <Nav />
            <h1>{name}</h1>
            {loading ? ( // Show spinner while loading
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '24px',
                    color: '#007bff' // Change color as needed
                }}>
                    Loading...
                </div>
            ) : (
                <table className="family-table">
                    <thead>
                        <tr>
                            <th>Nr</th>
                            {data.length > 0 && data[0].hasOwnProperty('Klasa') && <th>Klasa</th>}
                            <th>Rendi</th>
                            <th>Familja</th>
                            <th>Lloji</th>
                            <th>Referenca</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? ( // Check if data is available
                            data.map((item, index) => (
                                <tr key={index}>    
                                    <td>{item.Nr}</td>
                                    {data.length > 0 && data[0].hasOwnProperty('Klasa') && <td>{item.Klasa}</td>}
                                    <td>{item.Rendi}</td>
                                    <td>{item.Familja}</td> 
                                    <td>
                                        <span>
                                            <i style={{fontFamily: 'Times-New-Roman'}}>{item.Lloji.split(' ').slice(0, -2).join(' ')}</i> {item.Lloji.split(' ').slice(-2).join(' ')}
                                        </span>
                                    </td>
                                    <td>{item.Referenca}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No data available</td> {/* Fallback message */}
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
            <Footer />
        </div>
    );
}

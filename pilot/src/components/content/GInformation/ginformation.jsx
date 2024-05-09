import { useState, useContext, useEffect } from 'preact/hooks';
import { FcApproval } from "react-icons/fc";
import { SearchContext } from '../../../app';
import { IoCopy } from "react-icons/io5";

const GInformation = () => {
    const [input, updateInput] = useContext(SearchContext);
    const [data, setData] = useState(null);
    const [copiedField, setCopiedField] = useState({ field: '', index: -1 });

    useEffect(() => {
        if (!input) return;
        fetch(`http://internal.agmarketingfloridausa.com/claimendpoint.php?claim=${input}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [input]);

    const copyToClipboard = (text, field, index) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedField({ field, index });
            setTimeout(() => {
                setCopiedField({ field: '', index: -1 });
            }, 1500); // Message will disappear after 1.5 seconds
        });
    };

    const fields = ['FirstName', 'LastName', 'Phone', 'Address1', 'Address2', 'City', 'State', 'ZipCode'];

    return (
        <>
            <ol>
                {data?.leads.map((lead, leadIndex) => (
                    fields.map((field, fieldIndex) => (
                        <li key={field + leadIndex}>
                            <FcApproval /> {field.replace(/([A-Z])/g, ' $1').trim()}: {lead[field] || 'N/A'}
                            <IoCopy onClick={() => copyToClipboard(lead[field] || '', field, leadIndex)} />
                            {copiedField.field === field && copiedField.index === leadIndex && <span> Copied!</span>}
                        </li>
                    ))
                ))}
            </ol>
        </>
    );
}

export default GInformation;

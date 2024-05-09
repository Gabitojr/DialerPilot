import './content.css';
import { FcApproval } from "react-icons/fc";
import Notes from './notes/notes';
import CRMhistory from './CRM/crmhistory';
import GInformation from './GInformation/ginformation';


function Content(props) {



    switch (props.type) {
        case 'Information':
            return (
                <div className="GInformation">
                    <GInformation />    
                </div>
            );
        case 'History':
            return (
                <div className="GInformation">
                </div>
            );
        case 'Notes':
            return (
                <div className="">
                    <Notes />
                </div>
            );
            case 'Sales':
                return (
                    <div className="">
                        <CRMhistory />
                    </div>
                );
        default:
            return <div>Unsupported type</div>;
    }
}

export default Content;

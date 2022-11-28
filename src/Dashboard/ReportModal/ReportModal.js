import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { toast } from 'react-toastify';

const ReportModal = ({report}) => {
    const{user}=useContext(AuthContext)
    console.log(report)
    const{name,reseleprice,location,img}=report
    const handleBooking=event=>{
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const report = form.report.value;
       
        const name=form.name.value;
        const reports={
            email,
            report,
            username,
            name
          

        }
        fetch('https://server-to-side.vercel.app/report',{
            method:"POST",
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(reports)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Report Done')
                form.resset()
            }
            else{
                toast.error('Try AGIN')
            }
        })

    }
    return (
      
<>
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
    <div className="modal-box relative">
        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{name}</h3>
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> 
            <input name="username" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
            <input name="name" type="email" defaultValue={name} disabled placeholder="Email Address" className="input w-full input-bordered" />
            <input name="report" type="text" placeholder="Type Report" className="input w-full input-bordered" />
            <br />
            <input className='btn btn-outline btn-success w-full' type="submit" value="Submit" />
        </form>
    </div>
</div>
</> 
        
        
    );
};

export default ReportModal;
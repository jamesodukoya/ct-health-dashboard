import { JESSICASDATA } from '../(data)/Templates'
    
function PatientSummary({patientsData}:JESSICASDATA) {

    return (
        <div >
            <div className='flex flex-col items-center'>
            <img src='/jess_avatar.png'
                className='h-[200px] w-[200px] rounded-full mt-8' />
                <h2 className='mt-6'>{patientsData?.name}</h2>
            </div>
            <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center pl-5 mt-8'>
                <div className='flex justify-start gap-4'>
                <img src='/dob.png' className='h-[42px] w-[42px]' />
                <div className='flex flex-col gap-1'>
                    <h4 className='right_card_title'>date of birth</h4>
                    <p className='right_card_info'>{patientsData?.date_of_birth}</p>
                    </div>
                </div>
                </div>
            <div className='flex gap-4 items-center pl-5'>
                <div className='flex justify-start gap-4'>
                <img src='/dob.png' className='h-[42px] w-[42px]' />
                <div className='flex flex-col gap-1'>
                    <h4 className='right_card_title'>gender</h4>
                    <p className='right_card_info'>{patientsData?.gender}</p>
                    </div>
                </div>
                </div>
                <div className='flex gap-4 items-center pl-5'>
                <div className='flex justify-start gap-4'>
                <img src='/dob.png' className='h-[42px] w-[42px]' />
                <div className='flex flex-col gap-1'>
                    <h4 className='right_card_title'>contact info.</h4>
                    <p className='right_card_info'>{patientsData?.phone_number}</p>
                    </div>
                </div>
                </div>
                <div className='flex gap-4 items-center pl-5'>
                <div className='flex justify-start gap-4'>
                <img src='/dob.png' className='h-[42px] w-[42px]' />
                <div className='flex flex-col gap-1'>
                    <h4 className='right_card_title'>emergency contacts</h4>
                    <p className='right_card_info'>{patientsData?.emergency_contact}</p>
                    </div>
                </div>
                </div>
                <div className='flex gap-4 items-center pl-5'>
                <div className='flex justify-start gap-4'>
                <img src='/dob.png' className='h-[42px] w-[42px]' />
                <div className='flex flex-col gap-1'>
                    <h4 className='right_card_title'>insurance provider</h4>
                    <p className='right_card_info'>{patientsData?.insurance_type}</p>
                    </div>
                </div>
                </div>
            </div>
            <button className='emphasized px-10 py-[11px] rounded-[41px] bg-activeState_1 ml-[73px] mb-8 mt-10'>Show All Information</button>
    </div>
    )
}

export default PatientSummary
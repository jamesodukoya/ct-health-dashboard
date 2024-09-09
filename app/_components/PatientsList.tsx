import { PATIENTSDATA } from "../(data)/Templates";

function PatientsList({patientsData}:PATIENTSDATA) {

  return (
    <div className="">
    <div className='px-5 flex justify-between mb-5'>
            <h2>Patients</h2>
            <img src='/search.svg' />
        </div>
    <div className="overflow-y-scroll max-h-[941px] mt-5">
      {patientsData.map((patient, index) => (
        <div key={index} id='container' className={`flex justify-between items-center py-4 pl-5 pr-4 hover:bg-activeState_2 ${patient.name==="Jessica Taylor"&&'bg-activeState_2'}`}>
          <div className="flex gap-3 items-center">
            <img src={`${patient?.profile_picture}`} className="h-12 rounded-full" />
              <div className='flex flex-col'>
                  <div id='username'>
                      <h4 className='emphasized'>{patient.name}</h4>
                      <h4 className='secondary'> {`${patient.gender}, ${patient.age}`}</h4>
                  </div>
            </div>
            </div>
                  <img src='/patient_options.svg' alt='options' className='w-[18px] color-kebab' />
              </div>
      ))}
      </div>
      </div>
  )
}

export default PatientsList
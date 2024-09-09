import React from 'react'
import { JESSICASDATA } from '../(data)/Templates'

function DiagnosisHistory({patientsData}:JESSICASDATA) {
  return (
    <div>
        {/* <h2>{patientsData?.diagnosis_history?.[0]?.heart_rate?.value}</h2> */}
        <h2>Diagnosis History</h2>
        <div className='h-[298px] w-full bg-[#F4F0FE] rounded-xl mt-10'>
            
        </div>
        <div className='mt-5 flex gap-[21px] h-[242px] w-full'>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#E0F3FA]'>
                <img src='/respiratory_rate.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Respiratory Rate</h3>
                <p className='diagnosis_info'>{`${patientsData.diagnosis_history?.[0].respiratory_rate.value===undefined?'':patientsData.diagnosis_history?.[0].respiratory_rate.value} bpm`}</p>
                <p className='mt-[17px]'>{patientsData.diagnosis_history?.[0].respiratory_rate.levels}</p>
            </div>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#FFE6E9]'>
                <img src='/temperature.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Temperature</h3>
                <p className='diagnosis_info'>{`${patientsData.diagnosis_history?.[0].temperature.value===undefined?'':patientsData.diagnosis_history?.[0].temperature.value} \u00B0F`}</p>
                <p className='mt-[17px]'>{patientsData.diagnosis_history?.[0].temperature.levels}</p>
            </div>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#FFE6F1]'>
                <img src='/heartBPM.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Heart Rate</h3>
                <p className='diagnosis_info'>{`${patientsData.diagnosis_history?.[0].heart_rate.value===undefined?'':patientsData.diagnosis_history?.[0].heart_rate.value} bpm`}</p>
                <div className='flex gap-2 mt-[17px]'>
                    <img src='/ArrowDown.svg' className='h-auto w-2.5' />
                    <p>{patientsData.diagnosis_history?.[0].heart_rate.levels}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiagnosisHistory
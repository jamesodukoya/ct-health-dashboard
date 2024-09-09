import React from 'react'
import { JESSICASDATA } from '../(data)/Templates'

function LabResults({patientsData}:JESSICASDATA) {
  return (
    <div>
        <div className='mb-4'>
            <h2>Lab Results</h2>
        </div>
          <div className="overflow-y-scroll max-h-[207px]">
              <div className='pl-0.5'>
              {patientsData?.lab_results?.map((result: string, index: number) => (
                <div key={index} className='flex flex-col gap-[5px]'>
                    <div className={`flex justify-between items-center px-4 py-[11px] hover:bg-[#F6F7F8] ${index===1&&'bg-[#F6F7F8]'} `}>
                        <p>{result}</p>
                        <img src='/download_icon.svg' className='h-4'/>
                    </div>
                </div>
              ))}
                {patientsData?.lab_results?.map((result: string, index: number) => (
                <div key={index}>
                <div className='flex flex-col gap-[5px]'>
                    <div className={`flex justify-between items-center px-4 py-[11px] hover:bg-[#F6F7F8]`}>
                        <p>{result}</p>
                        <img src='/download_icon.svg' className='h-4'/>
                    </div>
                </div>
                </div>
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default LabResults
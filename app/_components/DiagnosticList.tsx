import React from 'react'
import { JESSICASDATA } from '../(data)/Templates'

function DiagnosticList({patientsData}:JESSICASDATA) {
  return (
    <div>
        <h2 className='mb-8'>Diagnostic List</h2>
        <table className='w-full text-left'>
            <thead className='mb-2.5 bg-[#F6F7F8] flex w-full rounded-3xl px-4'>
                <tr className='flex w-full '>
                    <th className='emphasized py-3.5 w-2/6'>Problem/Diagnosis</th>
                    <th className='emphasized py-3.5 w-3/6'>Description</th>
                    <th className='emphasized py-3.5 w-1/6 mr-2.5'>Status</th>
                </tr>
            </thead>
            
                <tbody className='flex flex-col items-center justify-start overflow-y-scroll max-h-[178px] w-full divide-y devide-gray-400 px-4' >
                    {patientsData?.diagnostic_list?.map((item, index:number) => (
                    <tr key={index} className='flex w-full items-center'>
                        <td className={`${index === 0 ? 'pb-2.5 ':'py-[11px]'} w-1/3`}>{item.name}</td>
                        <td className={`${index === 0 ? 'py-5':'py-[14.5px]'} w-1/2`}>{item.description}</td>
                        <td className={`${index === 0 ? 'py-5':'py-[11px]'} w-1/6`}>{item.status}</td>
                    </tr>
                    ))}
                    {patientsData?.diagnostic_list?.map((item, index:number) => (
                    <tr key={index} className='flex w-full items-center'>
                        <td className={`${index === 0 ? 'pb-2.5 ':'py-[11px]'} w-1/3`}>{item.name}</td>
                        <td className={`${index === 0 ? 'py-5':'py-[14.5px]'} w-1/2`}>{item.description}</td>
                        <td className={`${index === 0 ? 'py-5':'py-[11px]'} w-1/6`}>{item.status}</td>
                    </tr>
                    ))}
                </tbody>
        </table>
        </div>
  )
}

export default DiagnosticList
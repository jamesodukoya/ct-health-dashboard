import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
    scales,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales
)

import React from 'react'
import { JESSICASDATA } from '../(data)/Templates'


function DiagnosisHistory({ patientsData }: JESSICASDATA) {

    const options = {
        font: {
            family: 'Manrope',
            size: 24,
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#072635',
                    font: {
                        family: "'Manrope', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                    }
                }
            },
            y: {
                ticks: {
                    color: '#072635',
                    font: {
                        family: "'Manrope', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                    }
                }
            }
        }
    };

    const data = {
        labels: patientsData?.diagnosis_history?.map((item, index) => (
            `${item.month?.substring(0,3)}, ${item.year}`
        ))?.slice(0,6).reverse(),
        
        datasets: [
            {
                data: patientsData?.diagnosis_history?.map((item, index) => (
                    item.blood_pressure?.systolic?.value
                ))?.slice(0,6).reverse(),
                borderColor: "#C26EB4",
                pointBackgroundColor: "#C26EB4",
                pointBorderColor: "white",
                pointRadius: 7,
                tension: 0.4,
                borderWidth: 2,
            },
            {
                data: patientsData?.diagnosis_history?.map((item, index) => (
                    item.blood_pressure?.diastolic?.value
                ))?.slice(0,6).reverse(),
                borderColor: "#7E6CAB",
                pointBackgroundColor: "#7E6CAB",
                pointBorderColor: "white",
                pointRadius: 7,
                tension: 0.4,
                borderWidth: 2,
            }
        ]
    }
    
  return (
    <div>
        <h2>Diagnosis History</h2>
        <div className='h-[298px] w-full bg-[#F4F0FE] px-4 py-4 rounded-xl mt-10 gap-2 flex relative'>
            <div className='w-[70%]'>
            <div className='mb-6 max-w-full flex justify-between'>
                <h3>Blood Pressure</h3>
                <div className='flex gap-4 items-center mt-[5px] mr-8'>
                    <p>Last 6 months</p>
                    <img src='/expand.svg' alt='expand' className='h-1.5 w-auto' />
                </div>
            </div>
            <div className='h-full w-full relative' >
                <Line options={options} data={data} />
            </div>
            </div>
            <div className='w-[30%]'>
                <div className='flex flex-col flex-wrap w-full divide-y devide-[#CBC8D4]'>
                    <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <div className='h-3.5 w-3.5 rounded-full bg-[#E66FD2] border border-white'></div>
                        <p className='font-bold'>Systolic</p>
                    </div>
                    <p className='text-bp font-bold'>{patientsData?.diagnosis_history?.[0].blood_pressure?.systolic?.value}</p>
                    <div className='flex gap-2 mb-4'>
                        <img src='/ArrowUp.svg' alt='high blood pressure' className='w-2.5' />
                        <p>{patientsData?.diagnosis_history?.[0].blood_pressure?.systolic?.levels}</p>
                    </div>
                    </div>
                    <div className='flex flex-col gap-2 pt-4'>
                    <div className='flex items-center gap-1'>
                        <div className='h-3.5 w-3.5 rounded-full bg-[#8C6FE6] border border-white'></div>
                        <p className='font-bold'>Diastolic</p>
                    </div>
                    <p className='text-bp font-bold'>{patientsData?.diagnosis_history?.[0].blood_pressure?.diastolic?.value}</p>
                    <div className='flex gap-2 mb-4'>
                        <img src='/ArrowDown.svg' alt='high blood pressure' className='w-2.5'/>
                        <p>{patientsData?.diagnosis_history?.[0].blood_pressure?.diastolic?.levels}</p>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className='mt-5 flex gap-[21px] h-[242px] w-full'>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#E0F3FA]'>
                <img src='/respiratory_rate.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Respiratory Rate</h3>
                <p className='diagnosis_info'>{`${patientsData?.diagnosis_history?.[0].respiratory_rate.value===undefined?'':patientsData?.diagnosis_history?.[0].respiratory_rate.value} bpm`}</p>
                <p className='mt-[17px]'>{patientsData?.diagnosis_history?.[0].respiratory_rate.levels}</p>
            </div>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#FFE6E9]'>
                <img src='/temperature.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Temperature</h3>
                <p className='diagnosis_info'>{`${patientsData?.diagnosis_history?.[0].temperature.value===undefined?'':patientsData?.diagnosis_history?.[0].temperature.value} \u00B0F`}</p>
                <p className='mt-[17px]'>{patientsData?.diagnosis_history?.[0].temperature.levels}</p>
            </div>
            <div className='w-1/3 p-4 h-full rounded-xl bg-[#FFE6F1]'>
                <img src='/heartBPM.svg' className='h-24 w-24 bg-contain rounded-full'/>
                <h3 className='diagnosis_heading mt-4'>Heart Rate</h3>
                <p className='diagnosis_info'>{`${patientsData?.diagnosis_history?.[0].heart_rate.value===undefined?'':patientsData?.diagnosis_history?.[0].heart_rate.value} bpm`}</p>
                <div className='flex gap-2 mt-[17px]'>
                    <img src='/ArrowDown.svg' className='h-auto w-2.5' />
                    <p>{patientsData?.diagnosis_history?.[0].heart_rate.levels}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiagnosisHistory
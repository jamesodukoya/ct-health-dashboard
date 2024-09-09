export const MenuItems = [
    {
        name: 'Overview',
        icon: '/home_overview.png',
        path:'#1'
    },
    {
        name: 'Patients',
        icon: '/patients.png',
        path:'/'
    },
    {
        name: 'Schedule',
        icon: '/calendar.png',
        path:'#2'
    },
    {
        name: 'Message',
        icon: '/messages.png',
        path:'#3'
    },
    {
        name: 'Transactions',
        icon: '/transactions.png',
        path:'#4'
    }
]

export interface PATIENTSDATA{
    patientsData: {
        [key: string]: number | string | string[]
    }[]
}

export interface JESSICASDATA{
    patientsData: {
        lab_results?: string[]
        diagnostic_list?: {
            name: string
            description: string
            status: string
        }[]
        name?: ''
        date_of_birth?: ''
        age?: ''
        gender?: ''
        phone_number?: ''
        emergency_contact?: ''
        insurance_type?: ''
        diagnosis_history?: {
            month?: ''
            year?: ''
            blood_pressure?: {
                systolic?: {
                    value: number
                    levels: ''
                }
                diastolic?: {
                    value: number
                    levels: ''
                }
            }
            heart_rate: {
                value: number
                levels: ''
            }
            respiratory_rate: {
                value: number
                levels: ''
            }
            temperature: {
                value: number
                levels: ''
            }
        }[]
    }
}

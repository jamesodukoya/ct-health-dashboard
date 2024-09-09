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
        [key: string]: number | string | string[]
    }
}
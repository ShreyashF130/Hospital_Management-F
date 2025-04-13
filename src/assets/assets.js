import doctor1 from './doctor1.png'
import doctor2 from './doctor2.png'
import doctor3 from './doctor3.png'
import doctor4 from './doctor4.png'
import doctor5 from './doctor5.png'
import Gynecologist from './Gynecologist.png'

export const assets=
[
    doctor1,
    doctor2,
    doctor3,
    doctor4,
    doctor5

]
 

export const specialityData=
[
    
    {
        speciality:'General Physician',
        image:doctor1
        
    },
    
    {
        speciality:'Gynecologist',
        image:doctor2
    },
    
    {
        speciality:'Dermatologis',
        image:doctor3
    },
    {
        speciality:'Pediatriicians',
        image:doctor4
    },
    {
        speciality:'Neurologist',
        image:doctor5
    },
    {
        speciality:'Gastroentrologist',
        image:doctor1
    }
]

export const doctorsInfo=[
    
    {
        _id:'doc1',
        name:'Dr.Richard James',
        image:doctor1,
        speciality:'General physician',
        degree:'MBBS',
        experiance:'4  years',
        about:'Dr. Richard has a strong commitment to delivering comprehensive medical care.',
        fees:100 ,
        address:
        {
            line1:'17th cross,Richmond',
            line2:'Circle,Ring Road,London'
        }

    },
    {
        _id:'doc2',
        name:'Dr. Emily Larson',
        image:doctor2,
        speciality:'Gynecologist',
        degree:'MBBS',
        experiance:'3  years',
        about:'Dr. Emily has a strong commitment to delivering comprehensive medical care.',
        fees:100 ,
        address:
        {
            line1:'17th cross,Richmond',
            line2:'Circle,Ring Road,London'
        }

    },
    {
        _id:'doc3',
        name:'Dr. Sarah Patel',
        image:doctor3,
        speciality:'Dermatologist',
        degree:'MBBS',
        experiance:'1  years',
        about:'Dr. Sarah has a strong commitment to delivering comprehensive medical care.',
        fees:100 ,
        address:
        {
            line1:'17th cross,Richmond',
            line2:'Circle,Ring Road,London'
        }

    },
    {
        _id:'doc4',
        name:'Dr. Gwen Stacy',
        image:doctor4,
        speciality:'Pediatricians',
        degree:'MBBS',
        experiance:'2 years',
        about:'Dr. Emily has a strong commitment to delivering comprehensive medical care.',
        fees:100 ,
        address:
        {
            line1:'17th cross,Richmond',
            line2:'Circle,Ring Road,London'
        }

    },
    {
        _id:'doc5',
        name:'Dr. Emily Larson',
        image:doctor5,
        speciality:'Neurologist',
        degree:'MBBS',
        experiance:'5  years',
        about:'Dr. Emily has a strong commitment to delivering comprehensive medical care.',
        fees:100 ,
        address:
        {
            line1:'17th cross,Richmond',
            line2:'Circle,Ring Road,London'
        }

    }
]

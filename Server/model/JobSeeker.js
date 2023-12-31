import mongoose from "mongoose";


const jobseeker = new mongoose.Schema({

    FirstName : {
        type:String,
        require:true
    },
    LastName :{
        type:String,
        require:true
    },
    Mail :{
        type:String,
        require:true
    },
    PhoneNumber : {
        type:Number,
        require:true
    },
    Qualifation:{
        type:String,
        require:true
    },
    Experince :{
        type:String,
        require:true
    },
    Resume :{
        data : Buffer,
        contentType : String
    },
    DateOfApply:{
        type:String
    }

    
},{ timestamps: true });

export const JobSeeker = new mongoose.model('JobSeekerDetails',jobseeker);

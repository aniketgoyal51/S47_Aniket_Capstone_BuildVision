const mongoose = require('mongoose')

const DesignSchema=new mongoose.Schema({
    ArchitectId: String,
    ArchitectEmail: String,
    ArchitectName: String,
    ArchitectExperience: Number,
    AreaOfPlot:Number,
    AreaOfMap: Number,
    DetailsOfMap: String,
    Price: Number,
    ImageOfDesign: [{type:String}]
})
const DesignDetail = mongoose.model('design_detail', DesignSchema)
module.exports = DesignDetail
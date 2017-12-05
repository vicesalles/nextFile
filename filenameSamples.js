/*

Filename samples:

DJI MAVIC PRO: DJI_0121.MOV
GOPRO 5: GOPR9802.MP4
CANON XA30: MVI_0863.MP4
OLYMPUS OMD:

Model:

name: of the camera
file: filename to sample
solution: result test should return

{
    name:'',
    file:'',
    solution:''
}

*/

const filenames = [
    {
        name:'GOPRO',
        file:'GOPR9802.MP4',
        solution:'GOPR9803.MP4'
    },
    {
        name:'GOPRO',
        file:'GOPR0099.MP4',
        solution:'GOPR0100.MP4'
    },
    {
        name:'DJI Mavic Pro',
        file:'DJI_0121.MOV',
        solution:'DJI_0122.MOV'
    },
    {
        name:'DJI Mavic Pro',
        file:'DJI_1021.MOV',
        solution:'DJI_1022.MOV'
    },
    {
        name:'CANON XA30',
        file:'MVI_0863.MP4',
        solution:'MVI_0864.MP4'
    }
]

module.exports = filenames;
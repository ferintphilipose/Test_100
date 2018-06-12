// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "Ferin", 
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "GriffinLim vs WaveNet",
      "TestID": "id1",
      "Files": {
        "A": "audio/Sample1_GL.wav",
      }
    },   
	//    
    {
      "Name": "GriffinLim vs WaveNet",
      "TestID": "id2",
      "Files": {
        "A": "audio/Sample2_GL.wav",
 //      "B": "audio/castanets_2.wav",
      }
    },
	//    
    {
      "Name": "GriffinLim vs WaveNet",
      "TestID": "id3",
      "Files": {
        "A": "audio/Sample3_GL.wav",
//        "B": "audio/castanets_2.wav",
      }
    },
  ]
}

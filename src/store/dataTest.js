const fakeSegments = [
    {
        date:'20-11-2002',
        airline:{
          name:'Avianca',
          id: 2
        },
        airport:{
          name:'El Dorado',
          id:3
        },
        destinyAirport:{
          name:'Colombia',
          id:6
        },
        flightNumber: '321',
    },

]
const fakeConexions = [
  {
      date:'20-11-2002',
      airline:{
        name:'Avianca',
        id: 2
      },
      airport:{
        airportname:'El Dorado',
        idplace:'COL'
      },
      flightNumber: '321',
  },
  {
    date:'20-11-2002',
    airline:{
      name:'Avianca',
      id: 2
    },
    airport:{
      airportname:'El Dorado',
      idplace:'COL'
    },
    flightNumber: '321',
},
 
]
const fakeList = (size) =>{
  let temp = []
  for(let i=0;i<size;i++){
    temp.push({
      segments:fakeSegments,
      conexions:fakeConexions
    });
  }
  return temp;
}
export default  fakeList;
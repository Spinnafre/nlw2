export default function(time:string){
    //14:30
    // Separo por : e gera um array, em seguira irá criar um novo array
    // com os valores separado e nesse array irá pegar somente a hora e o minuto
    const [hour,minutes]=time.split(':').map(Number)

    const TimeInMinutes=(hour*60)+minutes
    return TimeInMinutes
}
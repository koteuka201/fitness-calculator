
// interface IFuncIMB

export function GetIMB(weight: number, height: number){
    let IMB: number
    IMB=weight/(height/100)**2
    return (IMB.toFixed(1))
}
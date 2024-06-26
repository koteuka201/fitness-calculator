import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { Card, CardTitle } from '@/components/ui/card';
import { INutric } from '@/pages/foodCalculationPage/mainTable/mainTable';

Chart.register(ArcElement, Tooltip, Legend);

interface CircleChartProps {
    result: INutric;
}

export const CircleChart: React.FC<CircleChartProps> = ({ result }) => {
    return (
        <Card className='mt-[20px] p-5 shadow-md border-0' style={{position: 'relative'}}>
            
            <CardTitle className="text-center text-[17px]">
                Ваша индивидуальная суточная норма калорий: <span className="text-slate-500">{result.kcal.toFixed(2)}</span> кКал <br></br>
                Из которых:
            </CardTitle>
            <div>
                <Doughnut
                    
                    data={{
                        labels: [`Белки: ${result.protein.toFixed(2)} г`, `Жиры: ${result.fat.toFixed(2)} г`, `Углеводы: ${result.carb.toFixed(2)} г`],
                        datasets: [{
                            data: [result.protein, result.fat, result.carb],
                            backgroundColor: ['#FFCE56', '#FF6384', '#df91f2'],
                        }],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '65%',
                        
                        
                    }}
                    
                    
                />
            </div>
        </Card>
    )
}
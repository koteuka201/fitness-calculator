import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { TypeCalculate } from '../selfForm';
import { Card } from '@/components/ui/card';

Chart.register(ArcElement, Tooltip, Legend);

interface CircleChartProps {
    result: TypeCalculate;
}

export const CircleChart: React.FC<CircleChartProps> = ({ result }) => {
    return (
        <Card className='mt-[20px] p-5 shadow-md border-0' style={{position: 'relative'}}>
            
            <div className="text-center text-gray-600">
                        Ваша индивидуальная суточная норма калорий: <span className="text-slate-500">{result.calories.toFixed(2)}</span> кКал <br></br>
                        Из которых:
                    </div>
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
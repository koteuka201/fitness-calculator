import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { TypeCalculate } from '../selfForm';

Chart.register(ArcElement, Tooltip, Legend);

interface CircleChartProps {
    result: TypeCalculate;
}

export const CircleChart: React.FC<CircleChartProps> = ({ result }) => {
    return (
        <>
            <Doughnut
                
                data={{
                    labels: [`белки: ${result.protein.toFixed(2)} г`, `Жиры: ${result.fat.toFixed(2)} г`, `Углеводы: ${result.carb.toFixed(2)} г`],
                    datasets: [{
                        data: [result.protein, result.fat, result.carb],
                        backgroundColor: ['#FFCE56', '#FF6384', '#df91f2'],
                    }],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }}
                
            />
        </>
    )
}
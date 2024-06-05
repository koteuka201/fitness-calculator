import React from 'react';
import { Dialog, DialogOverlay,DialogTrigger, DialogHeader, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
interface IMBInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IMBModal: React.FC<IMBInfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle className='text-center'>Информация об ИМТ (Индекс массы тела) </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <span className='text-center text-[15px] w-[460px]'>ИМТ=Вес(кг)/Рост (м)²</span>
                <br></br>
                <span>Интерпретация показателей ИМТ:</span>
                <br></br>
                <span>&#8226; 16 и менее - выраженный дефицит массы</span>
                <br></br>
                <span>&#8226; 16-17.9 - недостаточная масса тела</span>
                <br></br>
                <span>&#8226; 18-24.9 - нормальный вес</span>
                <br></br>
                <span>&#8226; 25-29.9 избыточная масса тела</span>
                <br></br>
                <span>&#8226; 30-34.9 - ожирение 1 степени</span>
                <br></br>
                <span>&#8226; 35-39.9 - ожирение 2 степени</span>
                <br></br>
                <span>&#8226; 40 и более - ожирение 3 степени</span>
                
            </DialogDescription>
        </DialogContent>
    </Dialog>
  );
};

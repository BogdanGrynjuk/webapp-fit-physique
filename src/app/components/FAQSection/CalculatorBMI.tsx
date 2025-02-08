'use client';

import React, { useEffect, useRef, useState } from 'react';
import CustomButton from '../UI/CustomButton';

import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';
import CountUp from 'react-countup';

const CalculatorBMI = () => {
  const calculationBMI = (weight: number, height: number): number => {
    return weight / ((height / 100) * (height / 100));
  };

  const getBMICategory = (bmi: number): void => {
    if (bmi < 16) {
      setBmiCategory('Critical Underweight');
    } else if (bmi >= 16 && bmi < 17) {
      setBmiCategory('Severe Thinness');
    } else if (bmi >= 17 && bmi < 18.5) {
      setBmiCategory('Moderate Thinness');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory('Normal Weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory('Overweight');
    } else if (bmi >= 30 && bmi < 34.9) {
      setBmiCategory('Obesity Class I');
    } else if (bmi >= 35 && bmi < 39.9) {
      setBmiCategory('Obesity Class II');
    } else if (bmi >= 40) {
      setBmiCategory('Obesity Class III');
    }
  };

  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const refResultBox = useRef(null);
  const isInView = useInView(refResultBox);

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setHeight('');
      return;
    }

    const value = Number(val);
    if (value > 0 && value <= 220 && Number.isInteger(value)) {
      setHeight(val);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setWeight('');
      return;
    }

    const value = Number(val);
    if (value > 0 && value <= 200) {
      setWeight(val);
    }
  };

  const handleClickBtnCalculate = () => {
    const bmi = calculationBMI(Number(weight), Number(height));
    const roundedBMI = Math.round(bmi * 10) / 10;
    setBmi(roundedBMI);
    getBMICategory(bmi);
  };

  useEffect(() => {
    if (height === '' || weight === '') {
      setBmiCategory('');
      setBmi(0);
    }
  }, [height, weight]);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="h4 text-center">Calculator IBM</h4>
      <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6">
        <form className="flex flex-col items-center justify-between h-[200px] md:h-[220px]">
          <div className="flex flex-col gap-[2px]">
            <input
              type="number"
              min="0"
              max="200"
              step="0.1"
              placeholder="Your Weight in kg"
              value={weight}
              onChange={handleWeightChange}
              className="p-3 w-[200px] h-[40px] md:w-[220px] md:h-[56px] border border-primary-100/50 text-center"
            />
            <span className="text-xs">Weight (up to 200 kg)</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <input
              type="number"
              min="0"
              max="220"
              step="1"
              placeholder="Your Height in cm"
              value={height}
              onChange={handleHeightChange}
              className="p-3 w-[200px] h-[40px] md:w-[220px] md:h-[56px] border border-primary-100/50 text-center"
            />
            <span className="text-xs">Height (up to 220 cm)</span>
          </div>

          <CustomButton
            text="Calculate it"
            containerStyles={'w-[200px] h-[40px] md:w-[220px] md:h-[56px]'}
            onClick={handleClickBtnCalculate}
          />
        </form>

        <div
          ref={refResultBox}
          className="flex flex-col items-center justify-center gap-4 mx-auto p-3 w-[200px] h-[200px] md:w-[220px] md:h-[220px] bg-white border border-primary-100/50"
        >
          {bmi === 0 || height === '' || weight === '' ? (
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="text-xl font-medium"
            >
              Result will be here
            </motion.p>
          ) : (
            <div className="text-center flex flex-col gap-4 w-full overflow-hidden">
              <motion.h5
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="h5"
              >
                Your BMI
              </motion.h5>
              <span className="text-5xl font-black">
                {isInView && (
                  <CountUp start={0} end={bmi} duration={1} decimals={1} />
                )}
              </span>

              <motion.span
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-sm mobile:text-base font-roboto font-semibold text-primary-100/50 tracking-[2px] uppercase"
              >
                {bmiCategory}
              </motion.span>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm mobile:text-base text-primary-100/50">
        *However, keep in mind that BMI does not account for factors such as
        muscle mass, bone density, or fat distribution, so it may not fully
        reflect your overall health.
      </p>
    </div>
  );
};

export default CalculatorBMI;

import InputForm from '../components/Form';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const CalcScreen = () => {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-10 sm:py-6">
        <div className="flex items-center py-3 px-5 w-full top-0 z-40 backdrop-blur bg-white/30 rounded-md border border-slate-900/10">
          <span className='mr-3'><AiOutlineExclamationCircle size={30} style={{color: "black"}}/></span>
          <p className='font-extralight'>
            While the app may provide some initial indications, it is not yet
            accurate enough to make a definitive diagnosis.
          </p>
        </div>
        <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 xl:top-8"></div>
        <div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Risk Predictor
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            To find out your risk of developing diabetes within the next five
            years, complete the following short questions.
          </p>
          <div className="mt-10 justify-center gap-x-6">
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcScreen;

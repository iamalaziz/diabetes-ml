import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeaderLogo from '../assets/img/diabetes.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface IMYData{
  pragnancies :number
  Glucose :number
  BloodPressure :number
  SkinSickness :number
  Insulin :number
  BMI :number
  DiabestesPedfn :number
  Age : number
  Result : boolean
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Predictor', href: '/calculator' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Features', href: '/features' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const [data,setData ] =  useState<IMYData[]>([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api')
      .then(response => response.json())
      .then(data=>setData(data))
      .catch(error =>console.log(error))
      console.log(data)
  },[])
  console.log(data)
  return (
    <header className="w-full inset-x-0 top-0">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <img
              className="h-8 mr-3 w-auto sm:h-10"
              src={HeaderLogo}
              alt="Diabetes Logo"
            />
            <span>Diabetes Predictor</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={
                pathname === item.href
                  ? 'py-1 border rounded-md border-slate-300 px-2 text-sm font-semibold leading-6 text-gray-900'
                  : 'py-1 px-2 text-sm font-semibold leading-6 text-gray-900'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/inprogress"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Diabetes Predictor</span>
              <img className="h-8 w-auto" src={HeaderLogo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/inprogress"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

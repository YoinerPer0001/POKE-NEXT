import { SimpleWidget } from '../../../components/SimpleWidget';

export default function MainPage() {
  return (
    <div className="p-2 flex flex-grow justify-center">
      <div className="flex flex-col text-center">
        <h1 className="text-center text-5xl">Dashboard</h1>
        <span className="text-xl">Informacion general</span>
        <div className='p-4 flex flex-wrap gap-2 justify-center items-center'>
          <SimpleWidget />
        
        </div>
      </div>

    </div>
  );
}
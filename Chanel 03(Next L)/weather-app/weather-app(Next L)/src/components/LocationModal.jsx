import { X } from 'lucide-react';

export default function LocationModal({onClose}){
  return(
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] p-5 w-[400px] rounded-2xl bg-gray-100 shadow-2xl">
        <div className='flex justify-between items-center'>
            <h2 className="text-xl font-medium">
              Where are you from
            </h2>
            <button >
              <X onClick={onClose} className='cursor-pointer' />
            </button>
        </div>
      </div>
    </div>
  )
}
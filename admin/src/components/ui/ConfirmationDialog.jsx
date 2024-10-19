import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import RoundIconButton from './ROundIconButton';
import Button from '../form-components/Button';

const ConfirmationDialog = ({ close, onConfirm, message,title = "Are you Sure ?" }) => {
    return (
        <div className='w-full fixed top-0 left-0 h-screen  z-50 flex items-center justify-center bg-gray-800  bg-opacity-50'>
            <div className=' bg-white border border-gray-400 overflow-hidden shadow-md rounded-md relative'>
                <div className='absolute top-3 right-3'>
                    <RoundIconButton color={'red'} onClick={close}>
                        <div className='w-4'>
                            <CloseIcon />
                        </div>
                    </RoundIconButton>
                </div>
                <h6 className='w-full border-b p-2 shadow'>{title}</h6>
                <div className='p-5'>

                <div className='mb-4'>
                    <p className='text-gray-700'>{message}</p>
                </div>
                <div className='flex justify-end space-x-4'>
                    <Button color={'gray'} onClick={close} text="Cancel">
                        Cancel
                    </Button>
                    <Button color={'blue'} onClick={onConfirm} text="Confirm" variant='error'>
                        Confirm
                    </Button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;

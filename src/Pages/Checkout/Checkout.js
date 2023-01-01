import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'
import ReviewHouse from '../../Components/ChectOut/ReviewHouse';
import WhosComing from '../../Components/ChectOut/WhosComing';
import Payment from '../../Components/ChectOut/Payment';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { savebooking } from '../../Api/bookingData';
import { toast } from 'react-hot-toast';



const Checkout = () => {
    let totalNights = 0
    let sub_total = 0
    let total = 0
    const { user } = useContext(AuthContext)

    const homeData = {
        _id: '0909123',
        locaton: 'Dhaka,bangladesh',
        title: '4 bed room a large apartment',
        From: '31/12/2022',
        to: '1/1/2023',
        host: {
            name: 'Suvo',
            image: '',
            email: 'suvo@gmail.com'
        },
        price: '30303',
        bedroom: '4',
        total_gust: '5'

    }
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [bookingData, setBookinData] = useState({
        homeId: homeData._id,
        email: homeData?.host?.email,
        message: '',
        totalPrice: parseFloat(homeData.price) + 30303,
        gustemail: user?.email
    })
    const handleBooking = () => {
        console.log(bookingData)

        savebooking(bookingData)
            .then(data => {
                console.log(data)
                toast.success('save booking is successful')
            })
            .catch(err => {
                console.log(err);
                toast.error(err?.message)
            })
    }
    return (
        <div className='md:flex justify-between    pl-16 '>

            <div className='w-1/2'>

                <Tab.Group
                    selectedIndex={selectedIndex}
                    onChange={setSelectedIndex}
                    defaultIndex={1}
                >
                    <Tab.List className={'gap-10 justify-center'}>
                        <div className=' text-xl flex'>
                            <div>

                                <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">


                                    <Tab as={Fragment}>
                                        {({ selected }) => (

                                            <button
                                                className={
                                                    selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                }
                                            >
                                                (1)Review about the Product
                                            </button>
                                        )}
                                    </Tab>
                                    <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            /* Use the `selected` state to conditionally style the selected tab. */
                                            <button
                                                className={
                                                    selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                }
                                            >
                                                (2)who's buy the Product
                                            </button>
                                        )}
                                    </Tab>

                                    <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            /* Use the `selected` state to conditionally style the selected tab. */
                                            <button
                                                className={
                                                    selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                }
                                            >
                                                (3) Conform and Pay
                                            </button>
                                        )}
                                    </Tab>

                                </div>

                            </div>


                        </div>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <ReviewHouse></ReviewHouse>
                        </Tab.Panel>
                        <Tab.Panel>
                            <WhosComing
                                host={homeData?.host}
                                bookingData={bookingData}
                                setBookinData={setBookinData}
                            ></WhosComing>
                        </Tab.Panel>
                        <Tab.Panel>
                            <Payment
                                handleBooking={handleBooking} ></Payment>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className='flex-1 w-1/2 pl-16'>
                <div className='p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg'>
                    <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
                        $35/ <span className='font-thin'>Pcs</span>
                    </h1>
                    <div className='flex gap-1 mb-2'>
                        <StarIcon className='h4 w-4 text-green-500' />{' '}
                        <span>4.8 (10 reviews)</span>
                    </div>

                    <p>Dates</p>
                    <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
                        <div>13/11/2022</div>
                        <div>
                            <ArrowRightIcon className='h5 w-5' />
                        </div>
                        <div>15/11/2022</div>
                    </div>

                    <div className='flex border-t border-gray-200 py-2'>
                        <span className='text-gray-500'>$34 x {totalNights} pcs</span>
                        <span className='ml-auto text-gray-900'>${sub_total}</span>
                    </div>
                    <div className='flex border-t border-gray-200 py-2'>
                        <span className='text-gray-500'>packgaing Fee</span>
                        <span className='ml-auto text-gray-900'>$10</span>
                    </div>
                    <div className='flex border-t border-gray-200 py-2'>
                        <span className='text-gray-500'>Service Fee</span>
                        <span className='ml-auto text-gray-900'>$21</span>
                    </div>
                    <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                        <span className='text-gray-900 font-bold'>Total</span>
                        <span className='ml-auto text-gray-900'>${total}</span>
                    </div>

                    <p className='text-center text-gray-400 mb-6'>
                        You won't be charged yet!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
import type { NextPage } from 'next'
import Image from 'next/image'
import Card from '../../components/card'
import Ques from '../../assets/images/question.png'
import Button from '../../components/button'
const Page: NextPage = () => {
    const answers = ['A', 'B', 'C', 'D']
    const textAwers = [
        {
            label: 'A',
            content: 'Kính lúp là dụng cụ quang bổ trợ cho mắt làm tăng góc trông quan sát các vật nhỏ'
        },
        {
            label: 'B',
            content: 'Kính lúp là dụng cụ quang bổ trợ cho mắt làm tăng góc trông quan sát các vật nhỏ'
        },
        {
            label: 'C',
            content: 'Kính lúp là dụng cụ quang bổ trợ cho mắt làm tăng góc trông quan sát các vật nhỏ'
        },
        {
            label: 'D',
            content: 'Kính lúp là dụng cụ quang bổ trợ cho mắt làm tăng góc trông quan sát các vật nhỏ'
        },
    ]
    return (
        <div className='bg-white min-h-screen p-10'>
            <h5>Hi The Anh</h5>
            <h2>Đề thi thử môn vật lý</h2>
            <div className='flex mt-8'>
                <Card className='mr-8'>
                    <h6>Câu hỏi</h6>
                    <div className='group  flex mt-4 items-start px-4 py-8 rounded-xl hover:bg-[#6C5DD3] cursor-pointer'>
                        <Image src={Ques} />
                        <div className='ml-6'>
                            <p className='caption1 group-hover:text-white'>Câu 1</p>
                            <p className='text-[#808191] group-hover:text-white'>Khi nói về kính lúp, phát biểu nào sau đây là đúng ?</p>
                            <div className='flex mt-4'>
                                {
                                    answers.map(ans =>
                                        <div className='flex w-10 h-10 mr-4 justify-between items-center rounded-full border cursor-pointer group-hover:text-white'>
                                            <p className='font-medium w-full text-center group-hover:text-white'>{ans}</p>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className='group  flex mt-4 items-start px-4 py-8 rounded-xl hover:bg-[#6C5DD3]'>
                        <Image src={Ques} />
                        <div className='ml-6'>
                            <p className='caption1 group-hover:text-white'>Câu 1</p>
                            <p className='text-[#808191] group-hover:text-white'>Khi nói về kính lúp, phát biểu nào sau đây là đúng ?</p>
                            <div className='flex mt-4'>
                                {
                                    answers.map(ans =>
                                        <div className='flex w-10 h-10 mr-4 justify-between items-center rounded-full border cursor-pointer group-hover:text-white'>
                                            <p className='font-medium w-full text-center group-hover:text-white'>{ans}</p>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className='group  flex mt-4 items-start px-4 py-8 rounded-xl hover:bg-[#6C5DD3]'>
                        <Image src={Ques} />
                        <div className='ml-6'>
                            <p className='caption1 group-hover:text-white'>Câu 1</p>
                            <p className='text-[#808191] group-hover:text-white'>Khi nói về kính lúp, phát biểu nào sau đây là đúng ?</p>
                            <div className='flex mt-4'>
                                {
                                    answers.map(ans =>
                                        <div className='flex w-10 h-10 mr-4 justify-between items-center rounded-full border cursor-pointer group-hover:text-white'>
                                            <p className='font-medium w-full text-center group-hover:text-white'>{ans}</p>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>

                        <Button >Submit</Button>
                    </div>
                </Card>

                <Card>
                    <div>
                        <Image src={Ques} />
                        <div className='ml-6'>
                            <p className='caption1 '>Câu 1</p>
                            <p className='text-[#808191] '>Khi nói về kính lúp, phát biểu nào sau đây là đúng ?</p>
                            <div className='mt-8'>
                                {
                                    textAwers.map(ans =>
                                        <div className='flex mb-8 max-w-xl items-center group cursor-pointer'>
                                            <div className='flex w-[40px] group h-[40px] mr-4 justify-between items-center rounded-full border cursor-pointer group-hover:bg-[#5F75EE]'>
                                                <p className='w-[40px] font-medium text-center group-hover:text-white '>{ans.label}</p>
                                            </div>
                                            <div>
                                                <p className=''>{ans.content} {ans.content}</p>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default Page
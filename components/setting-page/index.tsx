import NavSideBar from "../nav-sidebar"
import Avatar from '../../assets/images/avatar.png'
import Image from 'next/image'
import Button from "../button"

const SettingPage = () => {

    const formdata = [
        {
            label: 'Your full name',
            value: 'Huỳnh Thế Anh'
        },
        {
            label: 'Display Name',
            value: 'Captain Zero',
        },
        {
            label: 'Roles',
            value: 'Ho Chi Minh city',
        },
        {
            label: 'Location',
            value: ''
        }
    ]
    return (
        <div className="bg-white flex">
            <NavSideBar />
            <div className="p-12">
                <h3>Cài đặt tài khoản</h3>
                <div className="mt-12 border-b-2 pb-8">
                    <p className="caption2">Ảnh đại diện</p>
                    <div className="mt-8 flex items-center">
                        <Image className="bg-[#FFCE73] w-fit rounded-full " src={Avatar} />
                        <div className="ml-10">
                            <div className="text-white mb-1 bg-[#6C5DD3] w-fit px-6 py-2 rounded-full font-semibold cursor-pointer">Upload new</div>
                        </div>
                    </div>


                </div>
                <div className="mt-8">
                    {formdata.map(item =>
                        <div className="mr-12 mb-8">
                            <p className="mb-2 caption2">{item.label}</p>
                            <input className="rounded-lg p-4 w-96 font-medium bg-[#dacbcb30] focus:outline outline-offset-2 outline-2  focus:outline-[#6C5DD3]" 
                            placeholder={item.label} value={item.value}></input>
                        </div>)}
                </div>
                <Button type="secondary">Update Profile</Button>
            </div>
        </div>
    )
}

export default SettingPage
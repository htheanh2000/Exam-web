
const ScanRegistrationPage = () => {
    return (
        <div className="">
            <div>
                <div>
                    Đăng ký tự động thông qua quét thẻ
                </div>
                <div>Chuẩn bị những tài liệu sau để tiến hành đăng ký:</div>
            </div>
            <div>
                <table style={{ border: "1px solid black" }}>
                    <tr>
                        <th>Xác thực danh tính</th>
                        <th>Xác thực địa chỉ</th>
                        <th>Xác thực sinh trắc</th>
                        <th>Trạng thái</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="file" id="upload-nat-id" value="Tải"/>
                        </td>
                        <td>
                            <input type="file" id="upload-address-proof" value="Tải"/>
                        </td>
                        <td>
                            <input type="file" id="init-face-scan" value="Quét mặt"/>    
                            <input type="file" id="init-email-verif" value="Gửi email"/>
                        </td>
                        <td>
                            <ul style={{ listStyleType: 'circle' }}>
                                <li>Xác nhận sinh trắc</li>
                                <li>Xác nhận danh tính</li>
                                <li>Xác thực địa chỉ</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ScanRegistrationPage
export function FirstComp(){
    return <div>
        <table border={"1px"}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Nick  Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Venkatesh</td>
                    <td>Venky</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kavya</td>
                    <td>Sweety</td>
                </tr>
            </tbody>
        </table>
        <br></br>
    </div>
}

export default function FirstSubComp(){
    return <img src="https://cdn.pixabay.com/photo/2018/07/21/03/55/woman-3551832__340.jpg" alt="" />
}
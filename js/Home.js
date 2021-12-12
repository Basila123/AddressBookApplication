window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>Basila</td>
        <td>Madukoliparambil Hussain Manizil Wallardie vandiperiyar</td>
        <td>Kottayam</td>
        <td>Kerala</td>
        <td>9544994156</td>
        <td>68553366</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/create-black-18dp.svg">
        </td>
    </tr>
    <tr>
        <td>Fathima Sabila</td>
        <td>Any Random Place</td>
        <td>Kochi</td>
        <td>Kerala</td>
        <td>84374711239</td>
        <td>685533</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}
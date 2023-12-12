import { Helmet } from 'react-helmet-async';
const MySoldProperty = ({ soldProperty, index }) => {

    const { title, location, buyer_email, buyer_name, sold_price } = soldProperty
    return (
        <>
            <Helmet>
                <title>
                    Sold Properties
                </title>
            </Helmet>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div className='text-sm font-semibold'>{title}
                    </div>
                </td>
                <td>
                    <h1 className='text-sm font-semibold'>{location}</h1>
                </td>

                <td>
                    <h2 className='text-sm font-semibold'>{buyer_email}</h2>
                </td>

                <td>
                    <h1 className='text-sm font-semibold'>{buyer_name}</h1>
                </td>

                <td>
                    <h2 className='text-sm font-semibold'>${sold_price}</h2>
                </td>

            </tr>
        </>
    );
};

export default MySoldProperty;
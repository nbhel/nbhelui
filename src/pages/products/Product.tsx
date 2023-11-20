import { useEffect, useState } from 'react'
import { submenuDetails } from '../../helper/menuItems'
import { useNavigate, useParams } from 'react-router-dom'

interface IProductDetails {
    id: string;
    title: string;
    images: string[];
    description: {
      brand: string;
      minimun_Order_quantity: string;
      color: string;
      material: string;
      length: string;
      conductor_type: string;
      packaging_type: string;
      surface_treatment: string;
      temperature_range: string;
      voltage: string;
      power: string;
      diameter: string;
    };
  }
  

const Product = () => {
    const { id: urlId } = useParams<{ id?: string }>();
    const [productDetails, setProductDetails] = useState<IProductDetails | any>(null);
    const navigate = useNavigate()
    const defaultId = submenuDetails[0]?.id;

    useEffect(() => {
        const initialId = urlId || defaultId;
        // Simulate fetching product details based on the id
        const product = submenuDetails.find((item) => item.id === initialId);
        // Set product details to state
        setProductDetails(product);
        // Update URL only if the id in the URL is different from the default
        if (urlId !== defaultId) {
            navigate(`/products/${initialId}`);
        }
    }, [urlId, defaultId, navigate]);

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className='mb-3'>
            <p className='sm:text-2xl text-md font-semibold  bg-[#F79D2B] text-white shadow-md p-3'>{productDetails?.title}</p>
        </div>
        <div className="flex justify-center gap-x-12 py-6">
          {productDetails?.images.map((image:any, index:number) => (
            <div key={index} className="max-w-xl rounded-lg">
              <img src={image} alt={`Product ${index + 1}`} className="h-full w-full object-cover object-center border p-2 shadow-lg" />
            </div>
          ))}
        </div>

        {/* Product form */}
        <div className="">
          <div className='flex justify-center items-center'>
            <button className='p-3 bg-[#F79D2B] text-white hover:bg-orange-400'>Get Quotation</button>
          </div>
          <div>
            <div className="mt-8 flow-root">
                <p>Product Details: </p>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <>
                                {productDetails ? (
                                     <>
                                        <thead>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Brand
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.brand}
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white" >
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Minimun Order Quantity
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.minimun_Order_quantity}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Color
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.color}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Material
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.material}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Length
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.length}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Conductor Type
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.conductor_type}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Packaging Type
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.packaging_type}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Surface Treatment
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.surface_treatment}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Temperature Range (Degree Celsius)
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.temperature_range}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Voltage (Volt)
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.voltage}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Power
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.power}
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                    Diameter
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    {productDetails.description.diameter}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                ) : null}
                            </>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
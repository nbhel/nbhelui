import { useEffect, useState } from 'react'
import { submenuDetails } from '../../helper/menuItems'
import { useNavigate, useParams } from 'react-router-dom'

interface IProductDetails {
    id: string;
    title: string;
    images: string[];
    description: {
      brand: string;
      minimum_Order_quantity: string;
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
      tensile_strength: string;
      insulation_material: string;
      reference_standards: string;
      available_sizes: string;
      insulation_class: string;
      size:string;
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
    }, [urlId, defaultId]);

    if (!productDetails) {
        // Handle case when productDetails is not available
        return <div className='flex justify-center items-center h-full'>
                    <p className='text-2xl font-semibold text-primary'>No product details available.</p>
                </div>;
      }

  return (
    <div className="bg-white">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className='mb-3'>
            <p className='sm:text-2xl text-md font-semibold  bg-primary text-white shadow-md p-3 rounded-sm'>{productDetails?.title}</p>
        </div>
        <div className="sm:flex sm:justify-center gap-10 sm:px-0 px-6 py-6 border border-gray-100 shadow-sm my-3 bg-gray-100">
          {productDetails?.images.map((image:any, index:number) => (
            <div key={index} className="max-w-md rounded-lg">
              <img src={image} alt={`Product ${index + 1}`} className="h-full w-full object-contain border border-gray-100 p-2 shadow-sm bg-white sm:py-0 my-0" />
            </div>
          ))}
        </div>

        {/* Product form */}
        <div className="border border-gray-100 shadow-md bg-gray-100 py-6">
          {/* <div className='flex justify-center items-center'>
            <button className='p-3 bg-[#268F82] text-white border border-[#268F82] hover:bg-white hover:text-[#268F82] rounded-lg'>Get Quotation</button>
          </div> */}
          <div>
            <div className="mt-8 flow-root">
                <p className='font-bold text-xl p-2'>Product Details: </p>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <>
                                {productDetails ? (
                                     <>
                                        <thead>
                                            {productDetails.description.brand?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Brand
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.brand}
                                                </td>
                                            </tr>
                                            : null}
                                        </thead>
                                        <tbody className="bg-white" >
                                            {productDetails.description.minimum_Order_quantity?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Minimum Order Quantity
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.minimum_Order_quantity}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.color?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Color
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.color}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.material?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Material
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.material}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.length?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Length
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.length}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.conductor_type?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Conductor Type
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.conductor_type}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.packaging_type?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Packaging Type
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.packaging_type}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.surface_treatment?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Surface Treatment
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.surface_treatment}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.temperature_range?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Temperature Range (Degree Celsius)
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.temperature_range}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.voltage?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Voltage (Volt)
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.voltage}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.power?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Power
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.power}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.diameter?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Diameter
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.diameter}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.tensile_strength?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Tensile strength
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.tensile_strength}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.insulation_material?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Insulation Material
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.insulation_material}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.reference_standards?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Reference Standards
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.reference_standards}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.available_sizes?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Available Sizes
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.available_sizes}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.insulation_class?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Insulation Class
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.insulation_class}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.thickness_variation?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                Thickness Variation
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.thickness_variation}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.size?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Size
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.size}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.heat_resistance?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Heat Resistance
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    {productDetails.description.heat_resistance}
                                                </td>
                                            </tr>
                                            : null}
                                            {productDetails.description.image?.length > 0 ?
                                            <tr className="even:bg-gray-100">
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-medium text-gray-900 sm:pl-3">
                                                    Other Details
                                                </th>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                                                    <img className='border' src={productDetails.description.image} alt={productDetails.description.image} />
                                                </td>
                                            </tr>
                                            : null}
                                        </tbody>
                                    </>
                                ) : null}
                            </>
                        </table>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 gap-x-5 mx-2'>
                    {/* Add Features and innerSheth text  */}
                    {productDetails.features?.length > 0 ?
                    <div className="md:grid-cols-1 mt-10 bg-gray-100 p-2">
                        <p className='text-lg font-medium text-gray-800 my-2'>Features:</p>
                        <ul className="list-disc pl-10">
                        {productDetails?.features?.map((feature: any, index: number) => (
                            <li key={index} className='text-sm font-medium text-gray-500'>{feature}</li>
                        ))}
                        </ul>
                    </div>
                    : null}
                    {/* Inner Sheath Section */}
                    {productDetails.innerSheath?.length > 0 ?
                    <div className="md:grid-cols-1 mt-10 bg-gray-100 p-2">
                        <p className='text-lg font-medium text-gray-800 my-2'>Inner Sheath:</p>
                        <ul className="list-disc pl-10">
                        {productDetails?.innerSheath?.map((sheath: any, index: number) => (
                            <li key={index} className='text-sm font-medium text-gray-500'>{sheath}</li>
                        ))}
                        </ul>
                    </div>
                    : null}
                </div>
                <div className='md:grid md:grid-cols-2 gap-x-5 mx-2'>
                    {/* Add Features and innerSheth text  */}
                    {productDetails.additionalFeature?.length > 0 ?
                    <div className="md:grid-cols-1 mt-10 bg-gray-100 p-2">
                        <p className='text-lg font-medium text-gray-800 my-2'>Additional Features:</p>
                        <ul className="list-disc pl-10">
                        {productDetails?.additionalFeature?.map((addFeature: any, index: number) => (
                            <li key={`additional-${index}`} className='text-sm font-medium text-gray-500'>{addFeature}</li>
                        ))}
                        </ul>
                    </div>
                    : null}
                    {/* Inner Sheath Section */}
                    {productDetails.additionalInnerSheath?.length > 0 ?
                    <div className="md:grid-cols-1 mt-10 bg-gray-100 p-2">
                        <p className='text-lg font-medium text-gray-800 my-2'>Additional Inner Sheath:</p>
                        <ul className="list-disc pl-10">
                        {productDetails?.additionalInnerSheath?.map((addSheath: any, index: number) => (
                            <li key={`additional-${index}`} className='text-sm font-medium text-gray-500'>{addSheath}</li>
                        ))}
                        </ul>
                    </div>
                    : null}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
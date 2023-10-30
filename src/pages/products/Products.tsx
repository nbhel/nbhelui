import Accordion from "./Accordion";
import ProductDetail from "./ProductDetail";

const Products = () => {
  const productMenu = [
    {
      id: 0,
      heading: "Fiberglass & Polyester Braided Cables",
      subHeadingAndUrl: [
        {
          title: "Braided Cable",
          url: "",
        },
        {
          title: "Fiberglass Cable",
          url: "",
        },
        {
          title: "Silicon Cable",
          url: "",
        },
      ],
    },
    {
      id: 1,
      heading: "Enameled Winding Wire",
      subHeadingAndUrl: [
        {
          title: "Aluminum Wire",
          url: "",
        },
        {
          title: "Copper Wire",
          url: "",
        },
      ],
    },
    {
      id: 2,
      heading: "Electrical Insulation Sheets",
      subHeadingAndUrl: [
        {
          title: "Fiberglass Epoxy Sheet: FR4 / G10 / G11",
          url: "",
        },
        {
          title: "Glass Epoxy Sheet 3240",
          url: "",
        },
        {
          title: "Press Board",
          url: "",
        },
        {
          title: "Hylam Sheet / Bakelite Sheet",
          url: "",
        },
        {
          title: "SMC Sheet",
          url: "",
        },
        {
          title: "Fiberglass Cloth",
          url: "",
        },
        {
          title: "Fiberglass Epoxy Wedges",
          url: "",
        },
      ],
    },
    {
      id: 3,
      heading: "Electrical Insulating sleeves and tubes",
      subHeadingAndUrl: [
        {
          title: "Polyurethane Fiberglass Sleeving (PU)",
          url: "",
        },
        {
          title: "Fire Resistant / Pyro Sleeve",
          url: "",
        },
        {
          title: "Silicone Coated Fiberglass Sleeve",
          url: "",
        },
        {
          title: "Acrylic Fiberglass Sleeving",
          url: "",
        },
        {
          title: "Unvarnished Fiberglass Sleeve",
          url: "",
        },
        {
          title: "Varnished Fiberglass Sleeve F Class",
          url: "",
        },
        {
          title: "SRBP Tubes",
          url: "",
        },
      ],
    },
    {
      id: 4,
      heading: "Electrical Insulation Tapes",
      subHeadingAndUrl: [
        {
          title: "Cotton Insulation Tapes",
          url: "",
        },
        {
          title: "Fiberglass Tapes",
          url: "",
        },
        {
          title: "Polymide Tape",
          url: "",
        },
        {
          title: "PGMP Tapes",
          url: "",
        },
      ],
    },
    {
      id: 5,
      heading: "Electical Insulation Paper",
      subHeadingAndUrl: [
        {
          title: "DuPont Nomex Laminated Paper",
          url: "",
        },
        {
          title: "Laminated Fleece / DMD",
          url: "",
        },
        {
          title: "Saturated Fleece Paper",
          url: "",
        },
        {
          title: "DuPont Nomex",
          url: "",
        },
        {
          title: "Unsaturated Fleece Paper",
          url: "",
        },
        {
          title: "Polyester Film - Electrical Insulation",
          url: "",
        },
      ],
    },
    {
      id: 6,
      heading: "Aramid paper",
      subHeadingAndUrl: [
        {
          title: "Pure Aramid Paper (UL approved)",
          url: "",
        },
        {
          title: "Laminated Aramid Paper APA",
          url: "",
        },
      ],
    },
    {
      id: 7,
      heading: "Insulating Varnishes",
      subHeadingAndUrl: [
        {
          title: "Dr Beck Insulating Varnish",
          url: "",
        },
        {
          title: "Dr. Beck Elmotherm F 50 Varnishes",
          url: "",
        },
        {
          title: "Becktol Red / Grey Varnish",
          url: "",
        },
      ],
    },
    {
      id: 8,
      heading: "PTFE Wire and Sleeve",
      subHeadingAndUrl: [
        {
          title: "PTFE Wire",
          url: "",
        },
        {
          title: "Teflon Cable",
          url: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="accordion-content border bg-gray-100">
          {productMenu.map((item,index) => {
            return (
              <Accordion title={item.heading} index={index}>
                <dl className="w-full text-gray-900 divide-y divide-gray-200">
                  {item.subHeadingAndUrl.map((item) => {
                    return (
                      <div className="flex flex-col p-3 text-black cursor-pointer hover:text-white hover:bg-primary">
                        <dd className="text-base ">{item.title}</dd>
                      </div>
                    );
                  })}
                </dl>
              </Accordion>
            );
          })}
        </div>
        <div className="product-details-content border col-span-2">
          <ProductDetail />
        </div>
      </div>
    </>
  );
};

export default Products;

"use client";

export default function ProductComponent() {
  const productList = [
    {
      name: "Landing Pages",
      description: "Customable Landing page with hosting deploy support.",
      imageUrl: "/assets/img/product/pd2.jpg",
      orderUrl:
        "https://wa.me/6282120741970?text=Hello,%20i%20want%20to%20make%20an%20order%20of%20landing%20pages",
    },
    {
      name: "Web Application",
      description:
        "Customable Web Application with Full support (Training Included).",
      imageUrl: "/assets/img/product/pd3.jpg",
      orderUrl:
        "https://wa.me/6282120741970?text=Hello,%20i%20want%20to%20make%20an%20order%20of%Web%20Application",
    },
    {
      name: "CuanHunter v1",
      description: "Trading tutorial video, script, and telegram alert bot.",
      imageUrl: "/assets/img/product/pd1.jpg",
      orderUrl: "https://jivimuz.my.id/cuanhunter",
    },
  ];

  return (
    <div className="mx-auto flex flex-col md:flex-row mt-10">
      {productList.map((prod, index) => (
        <div className="w-full md:w-1/3 mr-10  mt-5 mb-6 md:mb-0 m" key={index}>
          <div className="card-product" style={{ marginRight: "40px" }}>
            <div className={"card-product-content"}>
              {index === 0 ? (
                <p className="card-product-tag">👑 Top sales</p>
              ) : (
                <br />
              )}
              <h3 className={"card-product-title"}>{prod.name}</h3>
              <p className={"card-product-info"}>{prod.description}</p>
              <a
                href={prod.orderUrl}
                className={"btn navbar-bubble mt-2"}
                style={{ color: "orange" }}
                target="_blank"
              >
                Order
                <svg
                  width="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9133 16.3147L20.1444 10.1201C19.676 7.90964 18.3503 7 17.0865 7H6.93171C5.65022 7 4.28034 7.84597 3.88264 10.1201L3.1049 16.3147C2.46858 20.8629 4.81062 22 7.86853 22H16.1585C19.2075 22 21.4789 20.3535 20.9133 16.3147ZM9.097 12.1486C8.60889 12.1486 8.21321 11.7413 8.21321 11.2389C8.21321 10.7366 8.60889 10.3293 9.097 10.3293C9.5851 10.3293 9.98079 10.7366 9.98079 11.2389C9.98079 11.7413 9.5851 12.1486 9.097 12.1486ZM14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M16.9739 6.77432C16.977 6.85189 16.9621 6.92913 16.9303 7H15.4932C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H7.00989C6.9967 6.92535 6.9967 6.84898 7.00989 6.77432C7.12172 4.10591 9.32499 2 12.0049 2C14.6849 2 16.8882 4.10591 17 6.77432H16.9739Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className={"card-product-image md:mr-0 mr-5  "}>
              <img src={prod.imageUrl} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

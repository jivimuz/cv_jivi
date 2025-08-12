export function MapComponent() {
  return (
    <>
      <div
        className="mx-auto w-full bg-primary  border p-8 shadow-lg m-4 mr-2 animate-on-scroll"
        style={{ borderWidth: 0 }}
      >
        <iframe
          className="rounded"
          style={{
            border: 0,
            width: "100%",
            height: "350px",
          }}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Kedawung%2C%20Cirebon&t=k&z=12&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="mt-4 text-center">
          <h4 className="mb-2 block text-sm  text-secondary">
            <hr className="shadow" />
            <br />
            Location : Cirebon, Indonesia📍
            <br />
            Email : Jivirasgal@gmail.com 📧
          </h4>
        </div>
      </div>
    </>
  );
}

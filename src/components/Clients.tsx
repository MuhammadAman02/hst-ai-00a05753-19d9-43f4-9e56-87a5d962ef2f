const Clients = () => {
  const clients = [
    { name: "BSI", logo: "BSI" },
    { name: "STATSports", logo: "STATSports" },
    { name: "JCDecaux", logo: "JCDecaux" },
    { name: "Catapult", logo: "CATAPULT" },
    { name: "Waystone", logo: "waystone" },
    { name: "CameraMatics", logo: "CameraMatics" },
    { name: "Franchise Direct", logo: "FRANCHISE DIRECT" },
    { name: "MDO", logo: "MDO" },
    { name: "Montlake UCITS", logo: "Montlake UCITS" },
    { name: "KB Associates", logo: "KB Associates" },
    { name: "Nova Leah", logo: "NOVA LEAH" },
    { name: "Connecting Nature", logo: "Connecting Nature" },
    { name: "Emotionise", logo: "emotionise" },
    { name: "The Smart Group", logo: "The Smart Group" },
    { name: "eSpatial", logo: "eSpatial" },
    { name: "Campanjon", logo: "campanjon" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600">Why Organizations Choose HST</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[100px]"
            >
              <div className="text-center">
                <div className="font-semibold text-gray-700 text-sm lg:text-base">
                  {client.logo}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">
            Get Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
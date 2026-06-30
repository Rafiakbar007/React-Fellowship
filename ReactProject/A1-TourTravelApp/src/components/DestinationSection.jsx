


import DestinationCard from "./DestinationCard";

function DestinationSection({ destinations }) {



  
  return (



   <section className="mx-auto py-12 px-4">

  <h2 className="text-4xl font-bold text-center mb-8">
    Popular Destinations
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {destinations.map((destination) => (
      <DestinationCard
        key={destination.id}
        destination={destination}
      />
    ))}

  </div>

</section>
  );
}

export default DestinationSection;
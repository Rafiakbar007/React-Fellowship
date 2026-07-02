import PackageCard from "./PackageCard";

function PackageSection({ packages }) {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">

      <h2 className="font-bold text-center mb-8 text-2xl md:text-5xl lg:text-6xl">
        Tour Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkgdata={pkg}
          />
        ))}

      </div>

    </section>
  );
}

export default PackageSection;
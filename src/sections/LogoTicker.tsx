export const LogoTicker = () => {
  return (
    <section className=' py-20 md:py-24'>
      <div className='container '>
        <div className='flex items-center gap-5'>
          <div className='flex-1 md:flex-none'>
            <h2 className='text-nowrap text-lg font-medium '>
              Trusted by top businesses in the US:
            </h2>
          </div>
          <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] '>
            <div className=' flex items-center justify-between gap-4 '>
              {[
                // "Walmart",
                "Amazon Traders",
                "Furniture Traders",
                "Home Builders",
                // "Costco",
                " Home Depots",
                // "Lowe's",
                "Restaurant Depots",
                "Aldi",
              ].map((name, index) => (
                <span key={index} className='text-md gap-14 text-nowrap '>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

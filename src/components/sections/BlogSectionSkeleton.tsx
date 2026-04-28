export default function BlogSectionSkeleton() {
  return (
    <section className="bg-white py-24 px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto animate-pulse">
        <div className="flex flex-col gap-10">
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-200" />
              <div className="h-2 w-12 bg-gray-100 rounded-full" />
            </div>
            <div className="h-2 w-24 bg-gray-100 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
            <div>
               <div className="h-8 w-48 bg-gray-100 rounded-xl mb-3" />
               <div className="h-8 w-32 bg-gray-100 rounded-xl" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-5">
                  <div className="aspect-[16/10] rounded-2xl bg-gray-50 border border-gray-50" />
                  <div className="flex flex-col gap-3">
                    <div className="h-2 w-16 bg-gray-100 rounded-full" />
                    <div className="h-4 w-full bg-gray-100 rounded-lg" />
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 bg-gray-50 rounded-full" />
                      <div className="w-1 h-1 rounded-full bg-gray-100" />
                      <div className="h-2 w-12 bg-gray-50 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

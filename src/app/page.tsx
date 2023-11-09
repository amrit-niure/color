import { Store } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-background dark  ">
      {/* Navigation Bar */}
      <nav className=" bg-background text-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold flex gap-2"><Store /> Shoe Shop</div>
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="bg-background text-foreground py-12">
        <div className="container mx-auto flex items-center flex-col md:flex-row gap-8">
          {/* Text on the Left */}
          <div className="w-full md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">
              Discover Your Perfect Shoes
            </h1>
            <p className="text-lg">
              Explore our latest collection of stylish and comfortable shoes for
              every occasion.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground hover:bg-accent-hover hover:text-accent-foreground-hover py-2 px-4 rounded-md">
              Shop Now
            </button>
          </div>

          {/* Image on the Right */}
          <div className="w-full md:w-1/2">
            <img
            
              src={"https://via.placeholder.com/200x90"}
              alt="Banner"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto mt-9 ">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {/* Shoe Card 1 */}
          <div className="bg-card text-card-foreground p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Shoe 1"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">Running Shoe</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Shoe Card 2 */}
          <div className="bg-card text-card-foreground p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Shoe 2"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">Casual Shoe</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Shoe Card 3 */}
          <div className="bg-card text-card-foreground p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Shoe 3"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">Sports Shoe</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background text-background-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Shoe Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

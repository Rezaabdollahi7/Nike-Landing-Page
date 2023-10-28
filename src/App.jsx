import { Hero ,
    Footer ,
    PopularProducts ,
    CustomersReview ,
    Services , 
    SpecialOffers ,
    Subscribe ,
    SuperQuality} from './Sections';
import { Nav } from './Components/Nav';

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding-x py-10"><Services/></section>
      <section className="padding"><SpecialOffers/></section>
      <section className="padding bg-pale-blue"><CustomersReview/></section>
      <section className="padding-x w-full py-16 sm:py-32"><Subscribe/></section>
      <section className="bg-black padding-t  padding-x pb-8"><Footer/></section>
    </main>
  );
}

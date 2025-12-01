import ProductsComponent from "../products/components/products.component";
import AboutComponent from "../about/components/about.component";
import ClientComponent from "./components/clients/client.component";
import ServicesComponent from "./components/services/services.component";
import TechPartnersComponent from "./components/techParters/techPartners.component";
import NewsAndBlogsComponent from "../news-and-blog/components/news-and-blogs.component";
import CertificatesComponent from "./components/certificates/certificates.component";

function HomeComponent() {

    return (
        <>
           <ProductsComponent/> <br/> <br/>
            <AboutComponent/>
            <ClientComponent/>
            <ServicesComponent/>
            <TechPartnersComponent/>
            <NewsAndBlogsComponent/>
            <CertificatesComponent/>
        </>
    );
}

export default HomeComponent;

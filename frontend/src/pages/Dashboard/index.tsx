import BarChart from "components/BarChart";
import Datatable from "components/Datatable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>   

        <div className ="row px-3">
            <div className="col-sm-6">
            <h5 className="text-center textpsecondary">Taxa e sucesso (%) </h5>
            <BarChart />
            </div>
            <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
            </div>
        </div>   
        <div className="py-3">
            <h2 className="text-primary">Todas vendas</h2>
        </div>

        <Datatable/>
        </div>
        <Footer />
        </>
    );
}
export default Dashboard;
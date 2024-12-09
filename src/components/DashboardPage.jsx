import Layout from "./Layout";
import MetricsCards from "./MetricsCards";
import QuickActions from "./QuickActions";
import Updates from "./Updates";
import Calendar from "./Calendar";

const DashboardPage = () => (
  <Layout>
    
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <MetricsCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <QuickActions />
          <Updates />
        </div>
        <div className="col-span-3">
          <Calendar />
        </div>
      </div>
    </div>
  </Layout>
);
export default DashboardPage;

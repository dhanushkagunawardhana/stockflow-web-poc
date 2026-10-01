import DashboardLayout from "@/layouts/DashboardLayout";
import { distributionRuns } from "@/data/mock/distribution-runs";

import DistributionRunsTable from "./com/DistributionRunsTable";

function DistributionRuns() {
  const closedRunCount = distributionRuns.filter((run) => run.status === "closed").length;
  const activeRunCount = distributionRuns.length - closedRunCount;

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-6xl space-y-5">
        <div>
          <h1 className="text-lg font-semibold">Distribution Runs</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeRunCount} active runs — {closedRunCount} closed
          </p>
        </div>

        <DistributionRunsTable />
      </div>
    </DashboardLayout>
  );
}

export default DistributionRuns;

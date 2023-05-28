import { IconNamesType, NoContent } from "@avaya/neo-react";

export const NoContentAgent = () => {
  const agentIconName: IconNamesType = "agent";
  return <div style={{ height: "500px" }}>
    <h1>NoContent</h1>
    <NoContent icon={agentIconName} text={"Agent has no content"} />
  </div>
}

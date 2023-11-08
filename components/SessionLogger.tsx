import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const SessionLogger = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <div id="sessionLogger">
      <p>Session:</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
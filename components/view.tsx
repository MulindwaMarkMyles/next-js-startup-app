import { client } from "@/sanity/lib/client";
import Ping from "./ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client.withConfig
        ({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });
    return (
    <div className="view_container">
        <div className="absolute -top-2 -right-2">
            <Ping />
        </div> 
        <p className="view-text">
            <span className="font-black">
                {totalViews} Views
            </span>
        </p>
    </div>);
}
 
export default View;
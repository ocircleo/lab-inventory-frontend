import { API_URL } from "@/config";
import NoDataFound from "@/app/_components/noDataFound/NoDataFound";
import TemplateUpdateComponent from "./TemplateUpdateComponent";

const Page = async ({ params }) => {
  try {
    let id = (await params).templateId;
    const req = await fetch(`${API_URL}/common/template-by-id/${id}`, {
      cache: "no-cache",
    });
    const res = await req.json();
    const data = await res.data;

    if (!res.success)
      return <NoDataFound message={"No Data Found"}></NoDataFound>;
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Template Data</h1>
        <div>
          <p>
            Template Name:{" "}
            <span className="text-custom-blue font-semibold">
              {data?.category}
            </span>
          </p>
          <p>Created By: {data?.createdBy?.name}</p>
        </div>
        <TemplateUpdateComponent data={data} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <NoDataFound
        message={"Some Error Happened while Loading the data"}
      ></NoDataFound>
    );
  }
};

export default Page;

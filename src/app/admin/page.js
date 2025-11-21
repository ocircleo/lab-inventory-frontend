import API from "../_components/API";
const Page = async () => {
  try {
    const req = await fetch(API + "/route");
    const res = await req.json();
    const data = await res?.data;
    if (data)
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
          <div>{/* <CoursesListView courses={data}></CoursesListView> */}</div>
        </div>
      );

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <div className="flex items-center justify-center py-16">
          <p className="text-2xl font-semibold text-orange-600">
            Failed to load Data, No error happened.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <div className="flex items-center justify-center py-16">
          <p className="text-2xl font-semibold text-orange-600">
            Some error happened while loading data
          </p>
        </div>
      </div>
    );
  }
};

export default Page;

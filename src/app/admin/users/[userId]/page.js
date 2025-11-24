import API from "@/app/_components/API";
import UserActions from "./UserActions";
import ErrorPage from "./error";

const Page = async ({ params }) => {
  const userId = params?.userId;

  try {
    const response = await fetch(`${API}/api/users/${userId}`, {
      cache: "no-store", // Disable caching to always get fresh data
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = await response.json();

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>

        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold">Name</h2>
              <p>{user.name || "Not provided"}</p>
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>{user.email_address}</p>
            </div>
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>{user.phone || "Not provided"}</p>
            </div>
            <div>
              <h2 className="font-semibold">Address</h2>
              <p>{user.address || "Not provided"}</p>
            </div>
            <div>
              <h2 className="font-semibold">Role</h2>
              <p className="capitalize">{user.role}</p>
            </div>
            <div>
              <h2 className="font-semibold">Account Status</h2>
              <p>{user.disabled ? "Disabled" : "Active"}</p>
            </div>
            <div>
              <h2 className="font-semibold">Date Registered</h2>
              <p>{new Date(user.date_registered).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="font-semibold">Newsletter Subscription</h2>
              <p>{user.news_letter ? "Subscribed" : "Not subscribed"}</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Bought Courses</h2>
            <p>{user.bought_courses.length} courses purchased</p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Cart Items</h2>
            <p>{user.cart.length} items in cart</p>
          </div>

          <UserActions
            userId={userId}
            currentRole={user.role}
            isDisabled={user.disabled}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <ErrorPage>{error.message}</ErrorPage>;
  }
};

export default Page;

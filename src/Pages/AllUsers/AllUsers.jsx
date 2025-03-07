import { useState, useEffect } from "react";
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import { ToastContainer, toast } from "react-toastify";



const AllUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const [users, setUsers] = useState([]);

  const debounceSearch=useDebounce(searchQuery,500)
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(()=>{

    if(debounceSearch){


      
      searchUsers()
    }
  },[debounceSearch])


  ///fetching all searched users

  const searchUsers=async()=>{
    if(debounceSearch.trim()==="") {
      setSearchQuery("")
      return;
    }

    
    try {
      
        setLoading(true);
        
        const { data } = await axios.get(
          `${url}/api/v1/search-user?q=${debounceSearch}`,
          { withCredentials: true }
        );
        if(data?.data?.users.length>0){
          setUsers(data?.data?.users);
          setSearchQuery("")
        }
        if(data?.data?.users.length===0){
          toast.error("No users found")
          setSearchQuery("")
        }
        
        
        setLoading(false);
  
        

        
      
     
    } catch (error) {
      console.log(error);
      setLoading(false);
    }



  }

  ///data fetching for all products with pagination

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/api/v1/get-all-users?page=${page}`,
        { withCredentials: true }
      );
      setUsers(data?.data.users);
      setTotalPages(data?.data?.totalPages);
      setLoading(false);

      console.log("all users data", data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //for pagination purpose
  const increasePage = () => {
    if (page == totalPages) return;

    setPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (page == 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <>
    <ToastContainer />
      <div className="flex min-h-screen items-stretch font-serif">
        <div className=" sticky top-0 h-full">
          <SidebarForAdmin />
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="p-6 ">
            <div className="mb-8">
              <h1 className="text-xl font-semibold text-gray-900">All Users</h1>
              <p className="text-sm text-gray-500">Avg. 57 orders per day</p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  
                 
                </div>
                <div className="flex items-center gap-2">
                 
               
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="overflow-x-auto ">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Name
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Email
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Phone
                    </th>

                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Profile
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Role
                    </th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                {loading && ( <div className="w-full border border-black ">
                         <Loader/>
                          </div>  )
                }
                {!loading && (
                     <tbody>
                     {users.map((user, i) => (
                       <tr
                         key={user._id}
                         className={`border-b ${
                           i % 2 !== 0 ? "bg-gray-50" : "bg-white-100"
                         } `}
                       >
                         <td className="py-3 px-4 text-sm font-medium text-gray-900">
                           {user.name}
                         </td>
                         <td className="py-3 px-4 text-sm text-gray-500">
                           {user.email}
                         </td>
                         <td className="py-3 px-4 text-sm text-gray-900">
                           {user.phone}
                         </td>
   
                         <td className="py-3 px-4 text-sm text-gray-900">
                           <img
                             src={user.profileUrl}
                             alt=""
                             className="w-[50px] h-[50px]"
                           />
                         </td>
                         <td className="py-3 px-4">
                           <span
                             className={`inline-flex items-center px-4 py-4 rounded-full text-xs font-medium
                                ${
                                  user.role === "admin"
                                    ? "bg-red-100 text-yellow-800 "
                                    : ""
                                }
                                ${
                                  user.role === "customer"
                                    ? "bg-blue-100 text-blue-800 "
                                    : ""
                                }
                                
                            `}
                           >
                             {user.role}
                           </span>
                         </td>
                         <td className="py-4 px-4">
                           <button className="text-gray-400 hover:text-gray-500">
                             <svg
                               className="w-4 h-4"
                               fill="none"
                               stroke="currentColor"
                               viewBox="0 0 24 24"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                               />
                             </svg>
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>

                ) }

             

              </table>
            </div>
          </div>
          {!loading && (
               <div className="flex justify-center  space-x-1 mt-2">
               <button
                 disabled={page == 1}
                 onClick={decreasePage}
                 className={`min-w-9 rounded-md bg-blue-100  border border border-slate-300 py-2 px-3 text-black font-serif font-bold text-center text-sm transition-all  text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800  active:border-slate-800 active:text-white active:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
               >
                 Prev
               </button>
   
               <button
                 disabled={page == totalPages}
                 onClick={increasePage}
                 className={`min-w-9 rounded-md bg-blue-100  border border border-slate-300 py-2 px-3 text-black font-serif font-bold text-center text-sm transition-all  text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800  active:border-slate-800 active:text-white active:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
               >
                 Next
               </button>
             </div>

          )}
       


        </div>
      </div>
    </>
  );
};

export default AllUsers;

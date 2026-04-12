// // src/components/TasksAndTable.tsx
// import { Pencil, RotateCcw, X } from "lucide-react";
// import { useState } from "react";

// type Task = {
//   id: number;
//   title: string;
//   desc: string;
//   checked: boolean;
// };

// type User = {
//   id: number;
//   name: string;
//   role: string;
//   progress: number;
//   salary: string;
//   img: string;
// };

// export default function TasksAndTable() {
//   // 🟢 Dummy Task Data
//   const [tasks, setTasks] = useState<Task[]>([
//     {
//       id: 1,
//       title: "Update the Documentation",
//       desc: "Duwamish Head, Seattle, WA 8:47 AM",
//       checked: false,
//     },
//     {
//       id: 2,
//       title: "GDPR Compliance",
//       desc: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
//       checked: true,
//     },
//     {
//       id: 3,
//       title: "Solve the issues",
//       desc: "Users likely to shop more",
//       checked: false,
//     },
//     {
//       id: 4,
//       title: "Release v2.0.0",
//       desc: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
//       checked: false,
//     },
//      {
//       id: 4,
//       title: "Release v2.0.0",
//       desc: "Ra Ave SW, Seattle 11:19 AM",
//       checked: false,
//     },
   
    

//   ]);

//   // 🔵 Dummy Table Data
//   const users: User[] = [
//     {
//       id: 1,
//       name: "Tania Mike",
//       role: "Develop",
//       progress: 25,
//       salary: "€ 99,225",
//       img: "https://i.pravatar.cc/40?img=1",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       role: "CEO",
//       progress: 77,
//       salary: "€ 99,225",
//       img: "https://i.pravatar.cc/40?img=2",
//     },
//     {
//       id: 3,
//       name: "Alexa Mike",
//       role: "Design",
//       progress: 41,
//       salary: "€ 99,225",
//       img: "https://i.pravatar.cc/40?img=3",
//     },
//     {
//       id: 4,
//       name: "Jana Monday",
//       role: "Marketing",
//       progress: 50,
//       salary: "€ 99,225",
//       img: "https://i.pravatar.cc/40?img=4",
//     },
//     {
//       id: 5,
//       name: "Paul Dickens",
//       role: "Develop",
//       progress: 100,
//       salary: "€ 99,225",
//       img: "https://i.pravatar.cc/40?img=5",
//     },
//   ];

//   const toggleTask = (id: number) => {
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, checked: !t.checked } : t
//       )
//     );
//   };
// // bg-[#0f172a]
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6 py-6  text-white">
      
//       {/* ✅ LEFT CARD - TASK LIST */}
//       <div className="bg-[#1e293b] rounded-xl p-5">
//         <div className="flex justify-between mb-4">
//           <h2 className="font-semibold">TASKS (5) <span className="text-gray-400 ml-6">Today</span></h2>
//           <span>⚙️</span>
//         </div>

//         <div className="space-y-4 max-h-80  overflow-y-auto">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className="flex items-start justify-between border-b border-gray-700 pb-3 pr-4"
//             >
//               <div className="flex gap-3 max-w-[90%]">
//                 <input
//                   type="checkbox"
//                   checked={task.checked}
//                   onChange={() => toggleTask(task.id)}
//                   className="mt-1 accent-pink-500 cursor-pointer"
//                 />

//                 <div>
//                   <p className="font-medium">{task.title}</p>
//                   <p className="text-sm text-gray-400">{task.desc}</p>
//                 </div>
//               </div>

//               <Pencil className="w-4 h-4 text-gray-400 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ RIGHT CARD - TABLE */}
//       <div className="bg-[#1e293b] rounded-xl p-5">
//         <h2 className="mb-4 font-semibold">Management Table</h2>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm">
//             <thead className="text-gray-400">
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Job Position</th>
//                 <th>Salary</th>
//                 <th>Milestone</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {users.map((user, i) => (
//                 <tr key={user.id} className="border-t border-gray-700">
                  
//                   <td>{i + 1}</td>

//                   {/* Name */}
//                   <td className="flex items-center gap-2 py-3">
//                     <img
//                       src={user.img}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     {user.name}
//                   </td>

//                   <td>{user.role}</td>
//                   <td>{user.salary}</td>

//                   {/* Progress */}
//                   <td>
//                     <div className="w-24 bg-gray-700 h-2 rounded">
//                       <div
//                         className="bg-blue-500 h-2 rounded"
//                         style={{ width: `${user.progress}%` }}
//                       />
//                     </div>
//                     <span className="text-xs text-gray-400">
//                       {user.progress}%
//                     </span>
//                   </td>

//                   {/* Actions */}
//                   <td className="flex gap-3">
//                     <RotateCcw className="w-4 h-4 text-green-400 cursor-pointer" />
//                     <X className="w-4 h-4 text-red-400 cursor-pointer" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/TasksAndTable.tsx
import { Pencil, RotateCcw, X } from "lucide-react";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  desc: string;
  checked: boolean;
};

type User = {
  id: number;
  name: string;
  role: string;
  progress: number;
  salary: string;
  img: string;
};

export default function TasksAndTable() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Update the Documentation",
      desc: "Duwamish Head, Seattle, WA 8:47 AM",
      checked: false,
    },
    {
      id: 2,
      title: "GDPR Compliance",
      desc:
        "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens.",
      checked: true,
    },
    {
      id: 3,
      title: "Solve the issues",
      desc: "Users likely to shop more",
      checked: false,
    },
    {
      id: 4,
      title: "Release v2.0.0",
      desc: "Ra Ave SW, Seattle 11:19 AM",
      checked: false,
    },
  ]);

  const users: User[] = [
    {
      id: 1,
      name: "Tania Mike",
      role: "Develop",
      progress: 25,
      salary: "€ 99,225",
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "John Doe",
      role: "CEO",
      progress: 77,
      salary: "€ 99,225",
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Alexa Mike",
      role: "Design",
      progress: 41,
      salary: "€ 99,225",
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Jana Monday",
      role: "Marketing",
      progress: 50,
      salary: "€ 99,225",
      img: "https://i.pravatar.cc/40?img=4",
    },
  ];

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6 py-6">
      
      {/* ✅ LEFT CARD */}
      <div className="
        bg-white text-gray-800 
        dark:bg-[#1e293b] dark:text-white 
        rounded-xl p-5 shadow 
        border border-gray-200 dark:border-gray-700
        transition-colors duration-300
      ">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">
            TASKS (5) 
            <span className="text-gray-500 dark:text-gray-400 ml-6">
              Today
            </span>
          </h2>
          <span>⚙️</span>
        </div>

        <div className="space-y-4 max-h-80 overflow-y-auto">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="
                flex items-start justify-between 
                border-b border-gray-200 dark:border-gray-700 
                pb-3 pr-4
              "
            >
              <div className="flex gap-3 max-w-[90%]">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1 accent-pink-500 cursor-pointer"
                />

                <div>
                  <p className="font-medium">
                    {task.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {task.desc}
                  </p>
                </div>
              </div>

              <Pencil className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500" />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ RIGHT CARD */}
      <div className="
        bg-white text-gray-800 
        dark:bg-[#1e293b] dark:text-white 
        rounded-xl p-5 shadow 
        border border-gray-200 dark:border-gray-700
        transition-colors duration-300
      ">
        <h2 className="mb-4 font-semibold">
          Management Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            
            <thead className="text-gray-500 dark:text-gray-400">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Position</th>
                <th>Salary</th>
                <th>Milestone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr
                  key={user.id}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <td>{i + 1}</td>

                  <td className="flex items-center gap-2 py-3">
                    <img
                      src={user.img}
                      className="w-8 h-8 rounded-full"
                    />
                    {user.name}
                  </td>

                  <td>{user.role}</td>
                  <td>{user.salary}</td>

                  {/* Progress */}
                  <td>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 h-2 rounded">
                      <div
                        className="bg-blue-500 h-2 rounded"
                        style={{ width: `${user.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {user.progress}%
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="flex gap-3">
                    <RotateCcw className="w-4 h-4 text-green-500 cursor-pointer" />
                    <X className="w-4 h-4 text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
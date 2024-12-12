import { useState } from "react";

let UseStateEx6 = () => {

  let arr = [
    {
      id: 1,
      name: "Gaurav Khalase",
      age: 20,
      grade: "A",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 19,
      grade: "B+",
      subjects: ["Biology", "English", "History"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 21,
      grade: "A-",
      subjects: ["Computer Science", "Mathematics", "Statistics"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 22,
      grade: "B",
      subjects: ["Philosophy", "Psychology", "Sociology"],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 20,
      grade: "A+",
      subjects: ["Economics", "Political Science", "Mathematics"],
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 6,
      name: "David Wilson",
      age: 18,
      grade: "B",
      subjects: ["History", "Geography", "English"],
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      age: 21,
      grade: "A",
      subjects: ["Physics", "Computer Science", "Mathematics"],
      image:
        "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 8,
      name: "James Garcia",
      age: 20,
      grade: "B-",
      subjects: ["Chemistry", "Biology", "English"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 9,
      name: "Olivia Lee",
      age: 19,
      grade: "A-",
      subjects: ["Political Science", "History", "Sociology"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 10,
      name: "Liam Hernandez",
      age: 22,
      grade: "B+",
      subjects: ["Mathematics", "Statistics", "Economics"],
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=faces&fit=crop&w=200&h=200",
    },
  ];

  let [student, setStudent] = useState(arr);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Student Profiles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {student.map((element, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full shadow-md mb-4"
                src={element.image}
                alt={element.name}
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {element.name}
              </h2>
              <p className="text-gray-500">Age: {element.age}</p>
              <p className="text-gray-500">Grade: {element.grade}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Subjects:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-500">
                {element.subjects.map((subject, subIndex) => (
                  <li key={subIndex}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseStateEx6;


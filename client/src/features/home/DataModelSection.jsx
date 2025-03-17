const DataModelSection = ({ children }) => {
  const dataModel = `
    {
       "id": 12,
       "title": "AI in Healthcare: Revolutionizing Diagnosis",
       "content": "AI is enhancing medical diagnosis and patient care.",
       "published_date": "2025-09-15T08:00:00Z"
     }
`;

  return (
    <div className="container mx-auto place-items-center px-4">
      {children}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {dataModel}
          </pre>
          <p className="mt-4 text-gray-600 text-sm">
            This simple yet flexible data structure allows for all CRUD
            operations while providing a practical alternative to the
            conventional to-do list example.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataModelSection;

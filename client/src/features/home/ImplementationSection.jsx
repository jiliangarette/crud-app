const ImplementationSection = ({ children }) => {
  const projectStructure = `
    
blog/
│
├── client/                         # React frontend
│   ├── public/                       # Static files
│   │   ├── favicon
│   │
│   ├── src/
│       ├── components/               # Shared components
│       │   ├── common/               # common components (buttons, inputs, modals)
│       │   │   │   ├── Button
│       │   │   │   ├── SectionContainer
│       │   │   └── ...
│       │   │
│       │   └── layouts/
│       │       ├── FooterLayout
│       │       ├── NavbarLayout
│       │       └── ...
│       │
│       ├── features/               # Feature-based modules
│       │   ├── home/               # HomePage feature
│       │   │   ├── HeroSection
│       │   │   └──  ...
│       │   │
│       │   ├── blog/
│       │   │   ├── HeroSection
│       │   │   └──  ...
│       │   └── ...
│       │
│       ├── hooks/                  # Shared custom hooks
│       │   ├── useAuth
│       │   ├── useFetch
│       │   └── ...
│       │
│       ├── lib/                    # Shared libraries and wrappers
│       │   ├── api.ts
│       │   └── ...
│       │
│       ├── pages/                  # Page components
│       │   ├── HomePage/
│       │   ├── BlogPage/
│       │   └── ...
│       │
│       ├── services/               # API services
│       │   ├── api-client          # Base API configuration
│       │   └── ...
│       │
│       ├── store/                  # State management
│       │   ├── index
│       │   ├── slices/             # Redux slices
│       │   └── ...
│       │
│       ├── utils/                  # Utility functions
│       │   ├── formatting
│       │   ├── validation
│       │   └── ...
│       │
│       ├── App                     # Main App component
│       ├── index                   # Application entry point
│       └── router                  # Application routes
│
├── server/                         # Django backend
│   ├── manage                      # Django management script
│   │
│   ├── config/                     # Project configuration (Django project folder)
│   │   ├── __init__   
│   │   ├── settings   
│   │   ├── wsgi   
│   │   ├── urls                    # Main URL routing
│   │   └── ...
│   │
│   ├── api/                        # Django applications
│   │   ├── models
│   │   ├── serializer
│   │   ├── urls
│   │   ├── views             
│   │   └── ...
│   └── ...
│
├── gitignore
└── README    
    `;

  return (
    <div className="container mx-auto px-4 place-items-center">
      {children}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <span className="font-medium">React.js</span> - Pure React for the
              UI components
            </li>
            <li>
              <span className="font-medium">Tailwind CSS</span> - For styling
              without additional UI libraries
            </li>
            <li>
              <span className="font-medium">localStorage</span> - For
              client-side data persistence
            </li>
            <li>
              <span className="font-medium">React Context API</span> - For state
              management
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Project Structure</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            {projectStructure}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;

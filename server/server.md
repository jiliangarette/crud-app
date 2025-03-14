
 `database`

```python
import os
from dotenv import load_dotenv

load_dotenv()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}
```

```ini
DB_NAME=your_database_name  
DB_USER=your_database_user  
DB_PASSWORD=your_database_password  
DB_HOST=your_database_host  
DB_PORT=5432  
```

`database access command:` : `psql -h crud-app.cti26uqc8nx6.ap-southeast-2.rds.amazonaws.com  -U crud  -d postgres  -p 5432`
# Base image
FROM python:3.8

# Set working directory
WORKDIR /app

# Copy requirements file
COPY ../requirements.txt .

RUN pip install gunicorn
# Install dependencies
RUN pip install -r requirements.txt

# Copy all files to the working directory
COPY . .

# Collect static files
#RUN python manage.py collectstatic --noinput

# Run Django with Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "SocialClub.wsgi:application"]
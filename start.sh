# Stop on errors
set -e

# Build the Docker image
echo "Building the Docker image..."
docker build -t cruise-r-nah .

# Run the Docker container
echo "Running the Docker container..."
docker run -p 3000:3000 cruise-r-nah

# Notify the user
echo "Docker container is now running on http://localhost:3000"
# Show Sage

This repository is the second and final part of my Django journey before moving on to Django Rest Framework. It is a full-stack project with two main components: a frontend built with HTML, CSS, and JavaScript, and a backend created using Django with the default SQLite database. The project aims to provide various functionalities related to ticket booking, including the ability for users to pay for their booked tickets. It will be rebuilt in the future using Django Rest Framework for enhanced features and scalability.

## Features

- **User Account Management:**
  - Users can create an account to access the ticket booking system.
  - Users can log in and log out of their accounts for secure access.

- **Ticket Booking:**
  - Registered users can book tickets for events.
  - The system ensures that only logged-in users can book tickets.
  - Users receive a unique booking ID upon ticket reservation.

- **Ticket Payment:**
  - Users can pay for their booked tickets, ensuring a seamless experience.
  - The booking ID can be used for verification at the event front desk.

- **Ticket Information:**
  - Users can view all available tickets and get detailed information about events.

- **Future Updates:**
  - The project is planned to undergo further development to include additional features and enhancements.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to have the following installed on your system:

- [Python](https://www.python.org/) - Python 3.7 or later
- [Django](https://www.djangoproject.com/) - A good understanding of  Python web framework
- A code editor of your choice (e.g., Visual Studio Code, PyCharm)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/show-sage.git
   ```

2. Change into the project directory:

   ```bash
   cd show-sage
   ```

3. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

4. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

The project should now be running locally, and you can access it at `http://localhost:8000/`.

## Future Development

This project is a part of an ongoing journey to build a full-featured ticket booking application. Future updates and features are planned to enhance the functionality and user experience. Contributions and suggestions are welcome.


## Acknowledgments

- Thanks to the Django and Python communities for creating and maintaining these wonderful tools and frameworks.

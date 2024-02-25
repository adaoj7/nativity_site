This project is a rebuild of the website for the Peoria Area Community Festival of Nativities.

The final project will enable them to manage volunteers, store nativities, and access other important features making the volunteer work more focused on the end goal of a well run program.

Features that have been implemented so far:

User features:
- Users can create an account
- Users can sign up for shifts either of the Setup or Host type
- If a user has signed up for a shift already that shift is removed from the form where they sign up
- Users can see all shifts that have been selected
- User can delete shifts that have been signed up for
- Stripe API has been set up for better transaction handling

Admin features:
- The ability to limit number of volunteers who sign up for a specific shift
- Allow admin to be able to query the database in order to know who has signed up for shifts already
giving names, phone numbers, and emails to admins for communication purposes
- Allow superusers to designate new admins (has not yet been moved onto superuser page)

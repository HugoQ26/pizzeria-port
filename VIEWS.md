# Dashboard

- `/`
  - statistic of todays orders (remote and local)
  - todays reservations and events list

# Logowanie

- `/login`
  - login and password fields
  - login button (link to dashbord)

# Table availability view

- `/tables`
  - date and time selection
  - reservation and events list
    - each column = 1 table
    - each row = 30 minutes block
    - it should look like Google calendar view, where in columns are tables instead days
    - if clicked - redirect to details
- `/tables/booking/:id`
  - it contains all data about reservations
  - it allows to edit and save changes
- `/tables/booking/new`
  - simlilar to above but without initial data
- `/tables/events/:id`
  - simlilar to above but with events
- `/tables/events/new`
  - simlilar to above but with events without initial data

# Waiter view

- `/waiter`
  - table
    - in rows - tables
    - in columns - various kinds of information (status, time from last activity)
    - in last column - avaible actions for certain table
- `/waiter/order/new`
  - table number (editable)
  - products menu
  - products options
  - order (ordered products with options and price)
  - order in total \$
- `/waiter/order/:id`
  - like above

# Kitchen view

- `/kitchen`
  - display order list in which were ordered
  - the list must contain:
    - table number (or remote order)
    - full information about ordered dishes
  - there must be an option to change order status to order completed

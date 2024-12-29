## Tranquilly (Airbnb Clone)

The following project is hosted on:

https://tranquily.vercel.app/

**Test UserName**: codeskool0@gmail.com
**Test Password**: Tranquilly123

### Tranquilly

Tranquilly is an airbnb clone that utilizes NextJS+Typescript to create a full stack application. The database used to manage all properties and users is Supabase along with Prisma as the ORM. Clerk is used for supporting OAuthentication. For payments, Stripe is used to manage all credit card payments.

### Home Page

Users are able to search by property names and taglines using the search bar as well as sort by category from the home menu to see all properties available.
![Home Page](./homepage.png)

### Property Details

When a property is selected the user is able to see details about the property as well as select dates to book the property. Users can also see if their dates have been booked by other users.

![Property Details](./propertydetails.png)

### Payment

Payments are handled through Stripe. Users can select dates based on a shadCN UI calendar and the summary costs will be displayed below. If the user is ready to reserve the dates a Reserve option is available where the user can input their card information, cardholder name, country, zip, and select pay.

If you would like to see this in action please use:
Email: codeskool0@gmail.com
Card Information: 4242 4242 4242 4242
Expiration Date: 08/28
Security Code: 123
Cardholder Name: Susan Stone
Country: United States
Zip: 93841
![Payments](./payments.png)

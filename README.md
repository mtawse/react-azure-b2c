# react-azure-b2c

Simple example of Azure B2C authentication in React using [react-aad](https://github.com/syncweek-react-aad/react-aad).

Includes guest page, members page and logout page.

Requires and Azure account with B2C directory.

* Set up your application and flow within Azure B2C directory
* Set reply URL to <your domain>/members
* Add details to `.env`

Only authenticated users will be able to visit the mebers page.

The logout button on the guest page will only be visible to authenticated users.

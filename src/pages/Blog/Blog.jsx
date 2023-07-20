

const Blog = () => {
    return (
        <div className="mx-40 my-20 space-y-10">
            <div>
                <p className="text-red-700">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p><span>Ans:</span> An access token and a refresh token are two important components of token-based authentication systems used to secure APIs and web applications.Access Token:

                    An access token is a credential that is issued to a client (usually a user or an application) after successful authentication with a server. It is a short-lived token that provides permission to access specific resources or perform certain actions on the server.
                    Access tokens are commonly used in token-based authentication systems like OAuth 2.0. They are sent with each API request as an authorization header or in the request parameters.Refresh Token:

                    A refresh token is a long-lived token that is also issued during the authentication process. Its purpose is to obtain a new access token when the current one expires without having to reauthenticate the user.
                    Refresh tokens are securely stored on the client-side (usually in an HTTP-only cookie or local storage) and are not accessible by JavaScript to mitigate security risks.How They Work Together:

                    When a user or application logs in, the server issues an access token and a refresh token and sends them back to the client.
                    The client stores the refresh token securely on the client-side, and the access token is used to make API requests to the server.
                    When the access token expires, the client uses the stored refresh token to request a new access token from the server.The server verifies the refresh token, and if it's valid, issues a new access token to the client. The client then uses the new access token for subsequent API requests.
                    This process continues until the refresh token itself expires or is revoked, at which point the user will need to log in again to obtain new tokens.</p>
            </div>
            <div>
                <p className="text-red-700">2. Compare SQL and NoSQL databases?</p>
                <p><span>Ans:</span>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two types of databases used to store and manage data.Data Model:SQL: SQL databases use a tabular, relational data model. Data is organized into tables with predefined schemas, and each row represents a record with specific columns.Schema: SQL databases have a fixed schema, meaning the structure of the tables and their columns must be defined beforehand. Any changes to the schema may require altering the database, which can be cumbersome for evolving data requirements.Query Language: SQL databases use the SQL language for querying data. SQL provides powerful querying capabilities, including JOINs, filtering, aggregation, and sorting, making it ideal for complex relational queries.Scalability: SQL databases typically follow a vertical scaling approach, where the hardware is upgraded to handle increased data or traffic. Scaling can be more expensive and may have limits.Use Cases: SQL databases are well-suited for applications that require complex, structured data with strong relationships between entities. They are commonly used in financial systems, e-commerce platforms, and data-driven applications. </p>
            </div>
            <div>
                <p className="text-red-700">3. What is express js? What is Nest JS?</p>
                <p><span>Ans:</span> Express.js and NestJS are both popular web frameworks used for building server-side applications in JavaScript/TypeScript. Let's take a look at each one:<br />
                    Express.js:<br />

                    Express.js is a minimalist and flexible web framework for Node.js. It provides a set of features and utilities to build web applications and APIs easily.
                    As a lightweight framework, Express.js focuses on simplicity and performance, leaving the developer with the freedom to structure their application as they prefer.
                    Express.js allows you to define routes, handle HTTP requests and responses, manage middleware, and interact with databases, among other functionalities.
                    It is often used to create RESTful APIs, web servers, and microservices.<br />
                    NestJS:<br />

                    NestJS is a progressive, Node.js framework for building scalable and maintainable server-side applications. It is built on top of Express.js and adds an additional layer of abstraction and features.
                    NestJS is designed to follow a modular and object-oriented architecture, inspired by Angular's architecture, which is beneficial for large-scale applications.
                    It uses TypeScript as its primary language, providing strong typing, decorators, and object-oriented programming features to enhance development productivity and maintainability.
                    NestJS provides built-in support for Dependency Injection, which makes it easy to manage dependencies and improve testability and code maintainability.</p>
            </div>
            <div>
                <p className="text-red-700">4. What is MongoDB aggregate and how does it work ?</p>
                <p><span>Ans:</span> In MongoDB, the aggregate method is a powerful feature used to perform data processing and transformation operations on collections of documents. It allows you to execute a series of data manipulation stages, known as aggregation pipelines, to filter, group, sort, reshape, and calculate data in a more advanced and flexible way compared to traditional queries.

                    The aggregate operation processes data through a sequence of pipeline stages. Each stage performs a specific operation on the documents in the collection, and the output of each stage becomes the input for the next stage. The result of the entire pipeline is returned as a new collection or an array of documents.</p>
            </div>
        </div>
    );
};

export default Blog;
# 🐱 Product Hunt MCP Server

A **Model Context Protocol (MCP) server** that connects to **Product Hunt**, providing tools to explore collections, posts, and topics. This server allows you to fetch trending products, detailed post info, curated collections, and topic insights directly from Product Hunt.

---

## 🚀 Features

This server exposes the following tools:

-   **`getCollectionInfo`** → Retrieve detailed information about multiple Product Hunt collections (with filters for featured, order, pagination, etc.).
-   **`getParticularCollectionInfo`** → Fetch information about a specific collection using its **ID** or **slug**.
-   **`getPostsInfo`** → Browse Product Hunt posts, including trending, newest, or featured products, with filters for date, order, and pagination.
-   **`getParticularPostInfo`** → Get **detailed information** about a single Product Hunt post using its **ID** or **slug**.
-   **`getTopicInfo`** → Explore Product Hunt **topics** (categories of posts), with support for searching, pagination, and filtering by user follow status.

---

## 🔑 Setup & Authentication

This server uses the **Product Hunt GraphQL API**.
You’ll need to create and configure an API key:

1. **Register a Product Hunt app**

    - Go to [Product Hunt API docs](https://api.producthunt.com/v2/docs).
    - Sign in with your Product Hunt account.
    - Create a new OAuth application to get your **API key** and **secret**.

2. **Environment setup**

    - Create a `.env` file in the project root.
    - Add your **access token** or **API credentials**. For example:

    ```env
    PH_BEARER_TOKEN=your_bearer_token_here
    ```

⚠️ **Important:** Never commit your `.env` file or credentials to GitHub.

---

## 🛠️ Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/utkarshgupta04092003/mcp-servers.git
cd mcp-servers
npm install
```

---

## ▶️ Usage

Run the server in development mode:

```bash
npm run dev
```

Once running, the MCP server will expose the Product Hunt tools, and you can interact with them through your MCP client (e.g., Copilot, Claude, Cursor etc).

---

## 🤝 Contributing

Contributions are welcome!

-   Fork the repo
-   Create a feature branch
-   Open a Pull Request

---

## 📄 License

MIT License

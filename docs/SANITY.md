# Setting Up Sanity for Kodia News Portal

This guide will walk you through setting up Sanity CMS for the Kodia News Portal project.

## 1. Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io)
2. Click "Start for free" or "Sign up"
3. You can sign up using GitHub, Google, or email
4. Complete the registration process

## 2. Create a New Project

1. Once logged in, click the "+ New" button at the top
2. Fill in the project details:
   - Project name: 'Kodia News' (or your preferred name)
   - Organization: 'New Organization'
   - Organization name: 'Personal'
3. Click "Create project"

## 3. Get Your Project Credentials

1. In your project dashboard, go to "API" tab
2. Under "Project API tokens", click "Add API token"
3. Create a new token with the following settings:
   - Name: Development
   - Token type: "Viewer" (this gives read access)
4. Copy the token immediately - you won't be able to see it again!

## 4. Configure Environment Variables

1. Fill in the following variables:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_PREVIEW_TOKEN="your-token"
   ```

   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Found in your project settings
   - `NEXT_PUBLIC_SANITY_DATASET`: Usually "production" for new projects
   - `NEXT_PUBLIC_SANITY_PREVIEW_TOKEN`: The token you created in step 3

## 5. Start Sanity Studio Locally

1. In your terminal, run:

   ```bash
   pnpm run dev
   ```

2. Open [http://localhost:3000/studio](http://localhost:3000/studio) in your browser
3. You should see the Sanity Studio interface where you can:
   - Create and manage content
   - Define your content structure
   - Upload media
   - Preview your content

## 6. Project Structure

The Sanity configuration is located in:

- `sanity.config.ts`: Main Sanity configuration
- `sanity.cli.ts`: CLI configuration
- `src/sanity/schema/`: Content schemas
- `src/sanity/structure/`: Content structure

## 7. Useful Resources

- [Sanity Documentation](https://www.sanity.io/docs)

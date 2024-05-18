# How to Create a Google Maps API Key

## Step 1: Create a Google Cloud Project

1. **Go to the Google Cloud Console:** Visit [Google Cloud Console](https://console.cloud.google.com/).
2. **Log in to your Google Account:** If you’re not already logged in, you’ll be prompted to do so.
3. **Create a New Project:**
   - Click on the project dropdown menu at the top of the page.
   - Select "New Project."
   - Enter a project name and, if necessary, select a billing account.
   - Click "Create."

## Step 2: Enable Billing

1. **Navigate to the Billing Section:**
   - In the Google Cloud Console, open the menu (☰) and select "Billing."
2. **Link a Billing Account:**
   - If you don’t have a billing account, create one by following the prompts.
   - Link your billing account to your project. Note that Google offers a $300 free trial for new accounts.

## Step 3: Enable Google Maps API

1. **Go to the API Library:**
   - In the Google Cloud Console, open the menu (☰) and go to "APIs & Services" > "Library."
2. **Enable the Required API:**
   - Use the search bar to find the specific Google Maps APIs you need (e.g., Maps JavaScript API, Places API).
   - Click on the desired API and then click "Enable."

## Step 4: Create API Credentials

1. **Navigate to the Credentials Page:**
   - In the Google Cloud Console, open the menu (☰) and go to "APIs & Services" > "Credentials."
2. **Create API Key:**
   - Click on "Create Credentials" and select "API key."
   - Your new API key will appear. You can restrict it to specific IP addresses, HTTP referrers (websites), or apps for security.

## Step 5: Restrict Your API Key (Recommended)

1. **Click on the Restrict Key Button:**
   - After creating the API key, click "Restrict key."
2. **Set Restrictions:**
   - Under "Application restrictions," select the type of restriction that matches your use case (e.g., HTTP referrers for web apps).
   - Under "API restrictions," select the APIs that this key can be used with.
3. **Save Your Settings:**
   - Click "Save" to apply the restrictions.

## Step 6: Use Your API Key

1. **Integrate the API Key into Your Application:**
   - Copy the API key from the Google Cloud Console.
   - Create a .env file directly in '/client/src/'
   - add GOOGLE_MAPS_API_KEY=your_api_key

## Getting an API Key from NASA

1. Go to https://api.nasa.gov/.

2. Fill in your information in the provided form.

3. Submit the form.

4. Check your email for the API key.

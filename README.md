# AutomataWorldSG - DIY STEM Toys Website

Static HTML/CSS e-commerce site for wooden STEM toys. Built with zero backend complexity.

## How to Update Products

All products are stored in `js/products.js`. To add or edit products:

1. Open `js/products.js`
2. Find the `products` array
3. Add a new product object like this:

```javascript
{
  id: 16,
  name: "Your Product Name",
  description: "What it teaches and does",
  price: 45,
  ageGroup: "6+",
  delivery: "Singapore & Malaysia",
  image: "optional-filename.jpg",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

4. Save the file
5. Commit to GitHub (Vercel auto-deploys)

## Adding Product Images

1. Upload images to `/images/` folder (or reference external URLs)
2. Update the `image` field in products.js with the filename
3. The image will appear on product cards and detail pages

## WhatsApp & PayNow Integration

- **WhatsApp**: Customers click "Order via WhatsApp" button → pre-filled message sent to +6581183373
- **PayNow**: Customers click "Pay Now" → PayNow link with UEN 53497838W and amount pre-filled
- No coding needed—just make sure your PayNow account is active

## Deployment

This site is deployed on Vercel. Changes to GitHub automatically deploy.

1. Make changes locally or on GitHub
2. Push to main branch
3. Vercel deploys in seconds

## File Structure

```
/
├── index.html          (Home page)
├── product.html        (Product detail page)
├── css/
│   └── style.css       (All styling)
├── js/
│   ├── products.js     (Product data - EDIT THIS)
│   └── script.js       (Functionality)
└── images/             (Add product images here)
```

## Cost

- Domain: ~$2/year
- Hosting: Free (Vercel)
- Email: Free forwarding
- **Total: ~$2/year**

## Support

If you need to:
- Change colors: Edit `:root` variables in `css/style.css`
- Change your phone number: Update `BUSINESS_CONFIG.whatsapp` in `js/script.js`
- Add pages (Gallery, Blog, etc.): Create new `.html` file and link from navbar

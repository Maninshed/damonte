# 📅 Appointment Booking System Documentation

## Overview

A complete appointment booking system integrated into the GPT Workshop landing page. Allows visitors to book discovery calls directly through the website with form validation, toast notifications, and an admin panel for managing bookings.

## Features

### 🎯 User-Facing Features
- **Modal Booking Form** - Beautiful dialog that appears when clicking "Book Discovery Call"
- **Form Validation** - Real-time validation using Zod schema
- **Date Picker** - Calendar interface for selecting preferred dates
- **Time Slot Selection** - Dropdown with predefined time slots (9 AM - 5 PM)
- **Toast Notifications** - Success/error messages using Sonner
- **LocalStorage Persistence** - Bookings saved in browser localStorage
- **Responsive Design** - Mobile-friendly form layout

### 📋 Form Fields
- **Full Name** (required)
- **Email** (required, validated)
- **Phone** (required, min 10 digits)
- **Company** (optional)
- **Preferred Date** (required, future dates only)
- **Preferred Time** (required, 9 AM - 5 PM slots)
- **Message/Notes** (optional)

### 🔐 Admin Features
- **Booking Management Dashboard** at `/admin`
- **View All Bookings** - Display all submitted bookings
- **Delete Individual Bookings** - Remove specific bookings
- **Export Bookings** - Download all bookings as JSON
- **Clear All Bookings** - Bulk delete with confirmation
- **Booking Count** - Total number of bookings displayed

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

```bash
# Navigate to project directory
cd gpt-build-accelerator-main

# Install all dependencies
npm install

# Start development server
npm run dev
```

The application will start on `http://localhost:8081` (or another port if 8081 is in use).

## Usage

### For Visitors

1. **Open the website** at `http://localhost:8081`
2. **Click any "Book Discovery Call" button** (appears in 3 locations):
   - Navigation bar ("Book Now")
   - Hero section
   - CTA section at the bottom
3. **Fill out the booking form**:
   - Enter your name, email, and phone
   - Optionally add your company name
   - Select a preferred date from the calendar
   - Choose a time slot from the dropdown
   - Add any additional notes
4. **Submit the form**
5. **Receive confirmation** via toast notification
6. The dialog will close automatically after 2 seconds

### For Administrators

1. **Navigate to** `http://localhost:8081/admin`
2. **View all submitted bookings** with full details:
   - Contact information (name, email, phone, company)
   - Appointment details (date, time)
   - Additional notes/messages
   - Submission timestamp
3. **Manage bookings**:
   - **Delete** individual bookings by clicking the trash icon
   - **Export** all bookings as JSON file
   - **Clear All** bookings (with confirmation prompt)
4. **Return to main site** using "Back to Site" button

## Project Structure

```
src/
├── components/
│   ├── BookingForm.tsx       # Main booking form with validation
│   ├── BookingDialog.tsx     # Modal wrapper for booking form
│   └── ui/                   # shadcn/ui components
├── pages/
│   ├── Index.tsx             # Landing page (integrated booking)
│   ├── Admin.tsx             # Booking management dashboard
│   └── NotFound.tsx          # 404 page
└── App.tsx                   # Main app with routing
```

## Technical Details

### Technologies Used
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **date-fns** - Date formatting
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Styling
- **Sonner** - Toast notifications
- **LocalStorage** - Data persistence

### Data Storage

Bookings are stored in browser localStorage under the key `gpt-workshop-bookings`. Each booking has:

```typescript
interface Booking {
  id: string;           // Unique identifier
  name: string;         // Full name
  email: string;        // Email address
  phone: string;        // Phone number
  company?: string;     // Company name (optional)
  date: string;         // Formatted date (e.g., "December 2, 2024")
  time: string;         // Time slot (e.g., "10:00 AM")
  message?: string;     // Additional notes (optional)
  createdAt: string;    // ISO timestamp
}
```

### Form Validation Rules

```typescript
- name: min 2 characters
- email: valid email format
- phone: min 10 characters
- date: must be a future date
- time: must select from available slots
- company: optional
- message: optional
```

### Time Slots Available

```
09:00 AM, 10:00 AM, 11:00 AM
12:00 PM, 01:00 PM, 02:00 PM
03:00 PM, 04:00 PM, 05:00 PM
```

## Customization

### Adding More Time Slots

Edit `src/components/BookingForm.tsx`:

```typescript
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  // Add more slots here
  "06:00 PM", // Example: add evening slot
];
```

### Changing Form Fields

Modify the Zod schema in `src/components/BookingForm.tsx`:

```typescript
const formSchema = z.object({
  // Modify or add fields here
  teamSize: z.string().optional(), // Example: add team size
});
```

### Backend Integration

To integrate with a real backend instead of localStorage:

1. Replace `localStorage` calls in `BookingForm.tsx` with API calls:

```typescript
const onSubmit = async (data: FormData) => {
  // Instead of localStorage.setItem()
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData),
  });
  
  if (response.ok) {
    toast.success("Booking confirmed!");
  }
};
```

2. Update Admin page to fetch from API:

```typescript
const loadBookings = async () => {
  const response = await fetch('/api/bookings');
  const data = await response.json();
  setBookings(data);
};
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Netlify/Vercel

```bash
# Build command
npm run build

# Publish directory
dist
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

1. **LocalStorage Only** - Bookings are stored in browser and not persisted to a database
2. **No Email Notifications** - No automatic email confirmations sent
3. **No Calendar Integration** - Does not sync with Google Calendar, Outlook, etc.
4. **Client-Side Only** - No server-side validation or conflict detection
5. **Single Browser** - Bookings only visible in the browser where they were created

## Future Enhancements

- [ ] Backend API integration (Node.js/Express, Supabase, Firebase)
- [ ] Email notifications (SendGrid, Resend)
- [ ] Calendar integration (Google Calendar API)
- [ ] SMS confirmations (Twilio)
- [ ] Time zone support
- [ ] Booking conflicts detection
- [ ] Recurring appointments
- [ ] Payment integration (Stripe)
- [ ] Video call links (Zoom, Meet)

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Clear localStorage if seeing old data: `localStorage.clear()`
4. Restart development server

## License

Proprietary - Damonte GPT Workshop

---

**Last Updated:** December 2024

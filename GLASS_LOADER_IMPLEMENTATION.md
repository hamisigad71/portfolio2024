# Glass Loader Implementation Documentation

## Overview

This document describes the complete implementation of the glass loader functionality that triggers when loading new pages across the entire Venus Next.js project.

## ✅ What Has Been Implemented

### 1. Global Loading Context (`src/app/context/LoadingContext.tsx`)

A React context that manages loading state globally across the application:

- **Automatic Route Detection**: Uses `usePathname()` to detect page changes
- **Loading State Management**: Centralized state for showing/hiding loader
- **Programmatic Control**: Provides methods to manually control loading
- **Smart Timing**: Handles both initial page load and route transitions

**Key Features:**
- Automatically shows loader on route changes
- Handles initial page load scenarios
- Provides manual control methods
- Smooth transitions with configurable delays

### 2. Enhanced PreLoader Component (`src/components/Common/PreLoader.tsx`)

Updated the existing glass loader to work with the global context:

- **Beautiful Glass Design**: Maintains the original glassmorphism aesthetic
- **Context Integration**: Uses loading state from LoadingContext
- **Smooth Animations**: Enhanced transitions and visual effects
- **Theme Aware**: Supports both light and dark modes
- **Professional Styling**: Glass card with spinner and animated dots

### 3. Root Layout Integration (`src/app/layout.tsx`)

Integrated the loading system at the application root:

- **LoadingProvider Wrapper**: Wraps entire app for global access
- **Proper Component Order**: Ensures loader appears above all content
- **Context Availability**: Makes loading context available everywhere

### 4. Navigation Components Updated

Updated all navigation components to use the glass loader:

#### HeaderLink (`src/components/Layout/Header/Navigation/HeaderLink.tsx`)
- Triggers loader on navigation clicks
- Handles both main links and submenu items
- Prevents loader on same-page navigation

#### MobileHeaderLink (`src/components/Layout/Header/Navigation/MobileHeaderLink.tsx`)
- Mobile navigation with loader integration
- Handles dropdown menus and navigation
- Consistent behavior across devices

#### Logo Component (`src/components/Layout/Header/Logo/index.tsx`)
- Logo click triggers loader when navigating to home
- Smart detection to avoid unnecessary loading

### 5. Custom Hook (`src/hooks/usePageLoader.ts`)

Comprehensive hook for loading functionality:

```typescript
const {
  isLoading,           // Current loading state
  startLoading,        // Start loader manually
  stopLoading,         // Stop loader manually
  navigateWithLoader,  // Navigate with loader
  withLoader,          // Wrap async operations
  showLoaderFor        // Show for specific duration
} = usePageLoader();
```

**Methods Available:**
- `navigateWithLoader(path, options)` - Navigate with loader
- `withLoader(asyncFunction)` - Auto-show loader during async operations
- `showLoaderFor(duration)` - Show loader for specific time
- `startLoading()` / `stopLoading()` - Manual control

### 6. Utility Components (`src/components/Common/LoadingTrigger.tsx`)

Pre-built components for common scenarios:

#### LoadingTrigger
```jsx
<LoadingTrigger 
  duration={2000}
  onLoadingStart={() => console.log('Started')}
  onLoadingEnd={() => console.log('Ended')}
>
  Trigger Loading
</LoadingTrigger>
```

#### LoadingButton
```jsx
<LoadingButton onClick={asyncFunction}>
  Submit Form
</LoadingButton>
```

#### LoadingLink
```jsx
<LoadingLink href="/about" className="nav-link">
  About Us
</LoadingLink>
```

## 🎯 How It Works

### Automatic Loading (Main Feature)
1. **Route Change Detection**: `usePathname()` hook detects URL changes
2. **Loader Activation**: Automatically shows glass loader
3. **Content Loading**: Page content loads in background
4. **Smooth Hide**: Loader fades out after content is ready

### Manual Loading Control
```typescript
// Navigate with loader
navigateWithLoader('/about');

// Async operations with loader
await withLoader(async () => {
  const data = await fetchData();
  return data;
});

// Timed loader
showLoaderFor(3000);

// Manual control
startLoading();
setTimeout(stopLoading, 2000);
```

## 🛠️ Usage Examples

### Basic Navigation
```jsx
import { usePageLoader } from '@/hooks/usePageLoader';

const MyComponent = () => {
  const { navigateWithLoader } = usePageLoader();
  
  return (
    <button onClick={() => navigateWithLoader('/contact')}>
      Contact Us
    </button>
  );
};
```

### Async Operations
```jsx
const { withLoader } = usePageLoader();

const handleSubmit = async () => {
  await withLoader(async () => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
  });
};
```

### Custom Components
```jsx
import { LoadingLink, LoadingButton } from '@/components/Common/LoadingTrigger';

// Navigation with loader
<LoadingLink href="/services" className="btn-primary">
 My Services
</LoadingLink>

// Button with async action
<LoadingButton onClick={handleAsyncAction}>
  Process Data
</LoadingButton>
```

## 🎨 Design Features

### Glass Loader Styling
- **Glassmorphism Design**: Frosted glass effect with backdrop blur
- **Responsive**: Adapts to all screen sizes
- **Professional Animation**: Smooth spinner with color transitions
- **Animated Dots**: Bouncing dots with staggered animation
- **Theme Support**: Light and dark mode compatibility
- **High Z-Index**: Appears above all content (z-[9999])

### Visual Elements
- Backdrop blur and transparency
- Rounded corners and subtle shadows
- Color-coded spinner (blue theme)
- Loading text with animated indicators
- Smooth fade in/out transitions

## 📁 File Structure

```
src/
├── app/
│   ├── context/
│   │   └── LoadingContext.tsx      # Global loading state
│   ├── layout.tsx                   # LoadingProvider integration
│   └── loading-demo/
│       └── page.tsx                 # Demo page
├── components/
│   ├── Common/
│   │   ├── PreLoader.tsx           # Enhanced glass loader
│   │   └── LoadingTrigger.tsx      # Utility components
│   └── Layout/Header/
│       ├── Logo/index.tsx          # Updated logo
│       └── Navigation/
│           ├── HeaderLink.tsx      # Desktop navigation
│           └── MobileHeaderLink.tsx # Mobile navigation
└── hooks/
    └── usePageLoader.ts            # Main loading hook
```

## 🚀 Benefits

1. **Seamless UX**: Beautiful loading transitions between pages
2. **Global Coverage**: Works automatically across entire project
3. **Flexible Control**: Manual control when needed
4. **Performance Aware**: Smart timing to avoid flickering
5. **Developer Friendly**: Easy-to-use hooks and components
6. **Consistent Design**: Maintains brand aesthetics
7. **Accessibility**: Proper loading states and indicators

## 🔧 Configuration

### Timing Adjustments
In `LoadingContext.tsx`, you can modify:
- Initial load delay: `setTimeout(..., 500)`
- Route change delay: `setTimeout(..., 800)`
- Smooth transition delay: `setTimeout(..., 300)`

### Styling Customization
In `PreLoader.tsx`, customize:
- Glass effect opacity and blur
- Spinner colors and size
- Animation timing and effects
- Responsive breakpoints

## 📱 Test It Out

Visit `/loading-demo` to test all functionality:
- Navigation loading
- Manual triggers
- Async operations
- Custom controls
- Code examples

The glass loader now works seamlessly across your entire Venus Next.js project! 🎉

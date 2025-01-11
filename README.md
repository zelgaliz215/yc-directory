# App YC-Directory
App desarrollada con Next.js Como prueba de concepto

1. 🤖 [Introduction](#introduction)
2. ⛲ [Fuentes](#fuentes)
3. 📃 [Listado de temas](#listado-temas)
4. ⚙️ [Tecnologias](#tech-stack)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🔋 [Features](#features)
8. 🤸 [Quick Start](#quick-start)
9. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube
channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

## <a name="introduction">🤖 Introducción</a>

A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other
pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+**
members. It's a place where people help each other out.

## <a name="fuentes">Fuentes</>

- Canal: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- Video: [Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App](https://www.youtube.com/watch?v=Zq5fmkH0T78)
- [Repositorio](https://github.com/adrianhajdin/yc_directory)
- [Recursos](https://github.com/adrianhajdin/yc_directory/blob/main/README.md)
- [Snippets (Codigo para copiar)](#snippets)
- [Flujo del app](https://miro.com/app/board/uXjVLT_tMdU=/)
- [Assets](https://drive.google.com/file/d/1OEFHnEq5pQFP86u8FOBLBBNxKPsbjjqU/view)


## <a name="listado-temas">Listado de temas</a>

- Next.js 15 App Folder Structure
- Next.js 15 Client Components vs Server Components
- Next.js 15 File-based Routing (including dynamic, nested routes and route groups)
- Next.js 15 page, layout, loading, and error Special Files
- Next.js 15 Serverless Route Handlers (Next API, API Routes, Full Stack Apps)
- Next.js 15 Metadata and Search Engine Optimization (SEO)
- Multiple ways to fetch data in Next.js:
- Server Side Rendering (SSR),
- Static Site Generation (SSG)
- Incremental Static Generation (ISR)
- Partial Pre-rendering (PPR)
- Authentication with NextAuth
- Next.js 15 Cache
- Next.js 15 Server Actions
- Next.js 15 Data Fetching, Architecture
- Next.js 15 Parallel and sequential data fetching
- Next.js 15 unstable after

## <a name="tech-stack">Tecnologias</a>

- [Next.js 15](https://nextjs.org/docs)
- [React 19](https://es.react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN](https://ui.shadcn.com/)
- [AuthJs](https://authjs.dev/)
- [Sanity](https://www.sanity.io/)


## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
            },
            fontFamily: {
                "work-sans": ["var(--font-work-sans)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        --radius: 0.5rem;
    }
}

@layer utilities {
    .flex-between {
        @apply flex justify-between items-center;
    }

    .text-30-extrabold {
        @apply text-[30px] font-extrabold text-white;
    }

    .text-30-bold {
        @apply text-[30px] font-bold text-black;
    }

    .text-30-semibold {
        @apply font-semibold text-[30px] text-black;
    }

    .text-26-semibold {
        @apply font-semibold text-[26px] text-black;
    }

    .text-24-black {
        @apply text-[24px] font-black text-black;
    }

    .text-20-medium {
        @apply font-medium text-[20px] text-black;
    }

    .text-16-medium {
        @apply font-medium text-[16px] text-black;
    }

    .text-14-normal {
        @apply font-normal text-sm text-white-100/80;
    }

    .pink_container {
        @apply w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;
    }

    .tag {
        @apply bg-secondary px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri;
    }

    .heading {
        @apply uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
    }

    .sub-heading {
        @apply font-medium text-[20px] text-white max-w-2xl text-center break-words;
    }

    .section_container {
        @apply px-6 py-10 max-w-7xl mx-auto;
    }

    .card_grid {
        @apply grid md:grid-cols-3 sm:grid-cols-2 gap-5;
    }

    .card_grid-sm {
        @apply grid sm:grid-cols-2 gap-5;
    }

    .no-result {
        @apply text-black-100 text-sm font-normal;
    }

    /* profile */
    .profile_container {
        @apply w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10;
    }

    .profile_card {
        @apply w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-primary border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full;
    }

    .profile_title {
        @apply w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0  before:-skew-y-6 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px] shadow-100;
    }

    .profile_image {
        @apply rounded-full object-cover border-[3px] border-black;
    }

    /* idea details */
    .divider {
        @apply border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto;
    }

    .view_skeleton {
        @apply bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3;
    }

    /* navbar */
    .avatar {
        @apply p-0 focus-visible:ring-0 bg-none rounded-full drop-shadow-md !important;
    }

    .dropdown-menu {
        @apply w-56 border-[5px] border-black bg-white p-5 rounded-2xl !important;
    }

    .login {
        @apply border-[5px] py-4 border-black bg-white text-black relative shadow-100 font-work-sans font-medium hover:shadow-none transition-all duration-500 !important;
    }

    /* searchform */
    .search-form {
        @apply max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5;
    }

    .search-input {
        @apply flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none;
    }

    .search-btn {
        @apply size-[50px] rounded-full bg-black flex justify-center items-center !important;
    }

    /* startupcard */
    .startup-card {
        @apply bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100;
    }

    .startup-card_date {
        @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100;
    }

    .startup-card_desc {
        @apply font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all;
    }

    .startup-card_img {
        @apply w-full h-[164px] rounded-[10px] object-cover;
    }

    .startup-card_btn {
        @apply rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important;
    }

    .startup-card_skeleton {
        @apply w-full h-96 rounded-[22px] bg-zinc-400;
    }

    /* startupform */
    .startup-form {
        @apply max-w-2xl mx-auto bg-white my-10 space-y-8 px-6;
    }

    .startup-form_label {
        @apply font-bold text-[18px] text-black uppercase;
    }

    .startup-form_input {
        @apply border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important;
    }

    .startup-form_textarea {
        @apply border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important;
    }

    .startup-form_error {
        @apply text-red-500 mt-2 ml-5;
    }

    .startup-form_editor {
        @apply mt-3 border-[3px] border-black text-[18px] text-black font-semibold placeholder:text-black-300 !important;
    }

    .startup-form_btn {
        @apply bg-primary border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] !important;
    }

    /* view */
    .view-container {
        @apply flex justify-end items-center mt-5 fixed bottom-3 right-3;
    }

    .view-text {
        @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize;
    }

    .category-tag {
        @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full;
    }

    .pattern {
        background-image: linear-gradient(
                to right,
                transparent 49.5%,
                rgba(251, 232, 67, 0.2) 49.5%,
                rgba(251, 232, 67, 0.6) 50.5%,
                transparent 50.5%
        );
        background-size: 5% 100%;
        background-position: center;
        background-repeat: repeat-x;
    }

    .tag-tri {
        @apply before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent;
    }
}

.w-md-editor-toolbar {
    padding: 10px !important;
}
```

</details>

<details>
<summary><code>lib/utils.ts</code></summary>

```typescript
import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function parseServerActionResponse<T>(response: T) {
    return JSON.parse(JSON.stringify(response));
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function formatNumber(number: number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M"; // Convert to millions
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"; // Convert to thousands
    } else {
        return number.toString(); // Return the number as is if below 1000
    }
}
```

</details>

<details>
<summary><code>lib/validation.ts</code></summary>

```typescript
import {z} from "zod";

export const formSchema = z.object({
    title: z.string().min(3, "Title is required").max(100, "Title is too long"),
    description: z
        .string()
        .min(20, "Description should be at least 20 characters")
        .max(500, "Description is too long. Max 500 characters at most"),
    category: z
        .string()
        .min(3, "Category should be at least 3 characters")
        .max(20, "Category is too long. Max 20 characters at most"),
    link: z
        .string()
        .url("Invalid Image URL")
        .refine(async (url) => {
            try {
                const res = await fetch(url, {method: "HEAD"});
                const contentType = res.headers.get("content-type");
                return contentType?.startsWith("image/");
            } catch {
                return false;
            }
        }, "URL must be a valid image"),
    pitch: z.string().min(10, "Pitch should be at least 10 characters"),
});
```

</details>

<details>
  <summary><code>components/Ping.tsx</code></summary>

```typescript jsx
const Ping = () => {
    return (
        <div className="relative">
            <div className="absolute -left-4 top-1">
                <span className="flex size-[11px]">
                    <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
                </span>
            </div>
        </div>
    );
};

export default Ping;
```

</details>

<details>
    <summary><code>PLAYLIST_BY_SLUG_QUERY</code></summary>

```typescript
export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
```
</details>

## <a name="links">🔗 Assets</a>

- Fonts and Assets used in the project can be found [here](https://drive.google.com/file/d/1OEFHnEq5pQFP86u8FOBLBBNxKPsbjjqU/view?usp=sharing)
- [Learn Server Actions](https://youtu.be/FKZAXFjxlJI?feature=shared)
- [Applicaton Workflow](https://miro.com/app/board/uXjVLT_tMdU=/?share_link_id=580854757703)

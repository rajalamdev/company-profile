import Button from "@/components/Buttons";
import Image from "next/image";

export default function Home() {
  const serviceList = [
    "UI/UX Design",
    "Prototype",
    "Web Design",
    "Landing Page",
    "Mobile Design",
    "Development",
  ];
  const trustedImage = [
    "/images/microsoft.png",
    "/images/gmeet.png",
    "/images/zoom.png",
  ];

  return (
    <main>
      <section className="mx-auto px-4 pt-48 sm:pt-0 text-center h-screen flex flex-col justify-center container bg-[url('/images/hero-bg.png')] bg-no-repeat bg-bottom">
        <div className="flex container">
          <div className="hidden lg:block">
            <Image
              src={"/images/left-hero.png"}
              width={213}
              height={100}
              alt="Ilustrator Image"
            />
          </div>
          <div className="flex-1">
            <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
              Designing With
              <span className="border-b border-dotted border-slate-300">
                {" "}
                Us
              </span>
            </p>

            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl relative">
              <span className="inline-block">
                Your
                <span className="relative whitespace-nowrap text-blue-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative">Personal</span>
                </span>
              </span>
              <span className="inline-block">App Store</span>
            </h1>

            <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
              <span className="inline-block">
                Bring functionalities of other apps
              </span>
              <span className="inline-block">into your Notion workspaces.</span>
            </p>

            <div className="flex justify-center mt-9 gap-8 flex-wrap">
              {serviceList.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#516371" />
                  </svg>
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={"/images/right-hero.png"}
              width={213}
              height={100}
              alt="Ilustrator Image"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
            href="#"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3 w-3 flex-none"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"></path>
            </svg>
            <span className="ml-3">Add to Firefox</span>
          </a>
          <div
            className="relative flex flex-1 flex-col items-stretch sm:flex-none"
            data-headlessui-state=""
          >
            <button
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
              id="headlessui-menu-button-:r4:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-current text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
              </svg>
              <span className="ml-3">Download for Mac</span>
            </button>
          </div>
        </div>

        <div className="mt-9">
          <p className="mb-4">Trusted Partner</p>
          <div className="flex gap-2 sm:gap-8 justify-center flex-wrap">
            <Image
              src="/images/microsoft.png"
              width={150}
              height={150}
              alt="Trusted Company"
            />
            <Image
              src="/images/zoom.png"
              width={150}
              height={150}
              alt="Trusted Company"
            />
            <Image
              src="/images/gmeet.png"
              width={150}
              height={150}
              alt="Trusted Company"
            />
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="p-4 md:p-6 container mx-auto">
        <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="md:border-r border-gray-200 px-12">
              <p className="text-gray-600 mb-2 text-center">Projects</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                150+
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="lg:border-r border-gray-200 px-12">
              <p className="text-gray-600 mb-2 text-center">Users</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                10K+
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="md:border-r border-gray-200 px-12">
              <p className="text-gray-600 mb-2 text-center">Countries</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                50+
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="px-12">
              <p className="text-gray-600 mb-2 text-center">Partners</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                30+
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 my-32 container mx-auto">
        <div className="space-y-4 lg:max-w-[500px]">
          <p>Why Choose Us</p>
          <h3 className="text-3xl md:text-5xl font-semibold">
            Fast Work is our focus
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            magnam blanditiis commodi iure quae nesciunt.
          </p>
        </div>
        <div>
          <Image
            src={"/images/timeline.png"}
            width={582}
            height={200}
            alt="Timeline Image"
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2 my-32 container mx-auto">
        <div>
          <Image
            src={"/images/client.png"}
            width={582}
            height={200}
            alt="Timeline Image"
          />
        </div>
        <div className="space-y-4 lg:max-w-[500px]">
          <p>Why Choose Us</p>
          <h3 className="text-3xl md:text-5xl font-semibold">
            Trusted 100% by many people Gradually
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            magnam blanditiis commodi iure quae nesciunt.
          </p>
        </div>
      </section>
      <section className="container mx-auto my-32">
        <div className="flex flex-col items-center text-center gap-4">
          <p>Project</p>
          <h3 className="text-3xl md:text-5xl font-semibold">
            Success Project
          </h3>
          <p className="mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nulla
            itaque ipsam, non deleniti ea illo sapiente laborum praesentium
            earum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[url('/images/project-1.png')] bg-no-repeat bg-cover h-[500px] flex flex-col justify-end p-8 rounded-3xl">
            <h4 className="text-white mb-4 font-semibold text-3xl">
              Website Design
            </h4>
            <p className="text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aperiam perferendis, a provident labore et distinctio iste fuga
              nihil asperiores maxime porro repudiandae dolores quae vitae
              pariatur ex corrupti atque?
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[url('/images/project-2.png')] h-[500px] flex-1 bg-no-repeat bg-cover flex flex-col justify-end p-4 rounded-3xl">
              <h4 className="text-white mb-4 font-semibold text-3xl">
                Website Design
              </h4>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus aperiam perferendis, a provident labore et distinctio
                vitae pariatur ex corrupti atque?
              </p>
            </div>
            <div className="bg-[url('/images/project-3.png')] h-[500px] flex-1 bg-no-repeat bg-cover flex flex-col justify-end p-4 rounded-3xl">
              <h4 className="text-white mb-4 font-semibold text-3xl">
                Website Design
              </h4>
              <p className="text-white/70">
                Accusamus aperiam perferendis, a provident labore et distinctio
                iste fuga nihil asperiores maxime porro repudiandae dolores quae
                vitae pariatur ex corrupti atque?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-32 container mx-auto h-[90vh] bg-[url('/images/design.png')] bg-contain bg-no-repeat bg-bottom">
        <div className="space-y-4 lg:max-w-[500px]">
          <p>Why Choose Us</p>
          <h3 className="text-3xl md:text-5xl font-semibold">
            Fast Work is our focus
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            magnam blanditiis commodi iure quae nesciunt.
          </p>
        </div>
      </section>
      <section className="container my-32">
        <div className="flex flex-col items-center text-center gap-4">
          <p>What our customer say</p>
          <h3 className="text-3xl md:text-5xl font-semibold">Testimonial</h3>
          <p className="mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nulla
            earum.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto">
          <Image
            src={"/images/quote.png"}
            width={60}
            height={60}
            alt="Quote Image"
          />
          <p className="text-3xl font-medium text-center mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            inventore modi est voluptas minus vitae quasi, nostrum repellat
            consectetur voluptates pariatur consequatur praesentium illo eos.
            Qui natus eum illo nesciunt.
          </p>
          <div className="text-center mt-12">
            <p className="font-bold text-xl">Tan Malaka</p>
            <p>Filsuf Indonesia</p>
          </div>
        </div>
      </section>
    </main>
  );
}

import { BiCheck } from "react-icons/bi";
import Typewriter from "typewriter-effect";

const tiers = [
  {
    name: "Pro",
    href: "/pricing",
    priceMonthly: 9,
    description: "Unlock all the features for a flat, monthly fee.",
    features: [
      "Realtime data logging",
      "High quality satellite imagery",
      "Data visualization",
      "Export data to CSV",
      "24/7 support",
    ],
  },
  {
    name: "Enterprise",
    href: "/pricing",
    priceMonthly: 39,
    description: "Perfect for teams, businesses, and organizations.",
    features: [
      "Realtime data logging",
      "High quality satellite imagery",
      "Data visualization",
      "Export data to CSV",
      "24/7 support",
      "Up to 10 users",
      "Access to QBE.AI",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-900 overflow-y-scroll h-full">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider inline-flex items-center gap-1">
              QBE{" "}
              <span className="text text-white font-semibold tracking-wide px-1.5 py-1 rounded-md bg-accent">
                PRO
              </span>
            </h2>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The Best Plan For{" "}
              <span className="inline-block text-accent">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Startups")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Enterprises")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Your Business")
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Purchase a PRO plan to unlock all the features of QBE.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-gray-200"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-accent/20 text-accent"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <BiCheck
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-lg">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 text-base font-medium rounded-md border-2 border-accent text-accent hover:text-white hover:bg-accent transition-colors"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    EDUCATION
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of PRO license features for students
                  for <span className="font-semibold text-gray-900">$5</span> a
                  month.
                </div>
              </div>
              <div className="mt-6 rounded-lg lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="/pricing"
                  className="flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Buy Student License
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Einfache Skalierbarkeit',
  },
  {
    name: 'Technischer Support',
  },
  {
    name: 'Flexible Zeiten',
  },
  {
    name: 'Einfache Einrichtung',
  },
  {
    name: 'Einfacher Buchungsprozess',
  },
  {
    name: '24/7 Online buchen',
  },
  {
    name: 'Einfache Übersichtlichkeit',
  },
  {
    name: 'Kein eigenes Gerät benötigt',
  },
]

export default function Features() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold">All-in-one platform</h2>
          <p className="mt-4 text-lg">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-600" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium">{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, ChevronDoubleRightIcon, ChevronRightIcon, EnvelopeIcon, HeartIcon, MapPinIcon} from '@heroicons/react/20/solid'

const applications = [
  {
    applicant: {
      name: 'Ricardo Cooper',
      email: 'ricardo.cooper@example.com',
      imageUrl:
        'http://eelie.de/img/portal-1.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      imageUrl:
        'http://eelie.de/img/portal-2.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      imageUrl:
        'http://eelie.de/img/portal-3.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
]

export default function AppartmentList(propss: any) {
  return (
    <div className="bg-white overflow-hidden  w-full">
      <ul role="list">
        {applications.map((application) => (
          <li key={application.applicant.email} className="border rounded mb-4">
            <a href={application.href} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex ">
                  <div className="flex-shrink-0">
                    <img className="h-80 w-80 rounded" src={application.applicant.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4">
                    <div>
                      <p className="text-2xl font-bold truncate">{application.applicant.name}</p>
                      <p className="mt-2 flex text-sm text-gray-500">
                        <EnvelopeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="line-clamp-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
                      </p>
                      <p className="mt-2 flex text-sm text-gray-500">
                        <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="truncate">Kreischaer Straße 12, 01219 Dresden</span>
                      </p>
                      <p className="mt-2 flex text-sm text-gray-500">
                        <HeartIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="truncate">Putzen, Waschen, Einkaufen</span>
                      </p>
                      <div className='flex items-end'>
                        <p className="mt-28 flex text-3xl font-bold">130,00 €</p>
                        <p className="mt-28 flex text-xl pl-10">55,2 m²</p>
                        <p className="mt-28 flex text-xl pl-10">2 Zimmer</p>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
                <div>
                  <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
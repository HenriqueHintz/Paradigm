export interface Property {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat: number;
  lng: number;
  website: string | null;
  type: 'market-rate' | 'affordable';
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  { id: 1, name: "360 H Street", address: "360 H Street NE", city: "Washington", state: "DC", zip: "20002", phone: "202-545-6505", lat: 38.8999, lng: -76.9933, website: "https://www.360hstreet.com", type: "market-rate", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 2, name: "Meridian at Mt. Vernon Triangle", address: "425 L Street NW", city: "Washington", state: "DC", zip: "20001", phone: "202-280-2921", lat: 38.9017, lng: -77.0155, website: "https://www.meridianmtvernontriangle.com", type: "market-rate", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Meridian at Gallery Place", address: "450 Massachusetts Ave NW", city: "Washington", state: "DC", zip: "20001", phone: "202-470-2710", lat: 38.9030, lng: -77.0199, website: "https://www.meridiangalleryplace.com", type: "market-rate", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Park Triangle", address: "1375 Kenyon St NW", city: "Washington", state: "DC", zip: "20010", phone: "202-265-7275", lat: 38.9303, lng: -77.0316, website: "https://www.parktriangleapts.com", type: "market-rate", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Meridian on First", address: "1000 First St SE", city: "Washington", state: "DC", zip: "20003", phone: "202-519-3930", lat: 38.8822, lng: -77.0034, website: "https://www.meridianonfirst.com", type: "market-rate", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 6, name: "Meridian at Grosvenor Station", address: "5230 Tuckerman Ln", city: "North Bethesda", state: "MD", zip: "20852", phone: "301-232-0220", lat: 39.0497, lng: -77.1056, website: "https://www.meridiangrosvenorstation.com", type: "market-rate", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Carlyle Place", address: "2251 Eisenhower Ave", city: "Alexandria", state: "VA", zip: "22314", phone: "571-321-7140", lat: 38.8142, lng: -77.0638, website: "https://www.carlyleplaceapt.com", type: "affordable", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Meridian at Braddock Station", address: "1200 First St", city: "Alexandria", state: "VA", zip: "22314", phone: "703-348-6264", lat: 38.8204, lng: -77.0598, website: "https://www.meridianbraddock.com", type: "market-rate", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Parc Meridian", address: "750 Port St", city: "Alexandria", state: "VA", zip: "22314", phone: "703-348-6250", lat: 38.8048, lng: -77.0553, website: "http://www.parcmeridian.com", type: "market-rate", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 10, name: "Meridian at Eisenhower", address: "2351 Eisenhower Ave", city: "Alexandria", state: "VA", zip: "22314", phone: "703-348-3601", lat: 38.8101, lng: -77.0720, website: "https://www.meridianeisenhower.com", type: "market-rate", image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800" },
  { id: 11, name: "Creekside Village I", address: "7979 Janna Lee Avenue", city: "Alexandria", state: "VA", zip: "22306", phone: "703-527-7500", lat: 38.7693, lng: -77.0836, website: "https://www.creeksidevillagealexandria.com", type: "affordable", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "Meridian 2250 at Eisenhower Station", address: "2250 Dock Lane", city: "Alexandria", state: "VA", zip: "22314", phone: "703-202-4532", lat: 38.8118, lng: -77.0695, website: "https://www.meridian2250.com", type: "market-rate", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "Ballston Park", address: "351 N Glebe Rd", city: "Arlington", state: "VA", zip: "22314", phone: "571-449-3846", lat: 38.8722, lng: -77.1143, website: "https://www.ballstonpark.com", type: "market-rate", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "Meridian at Ballston Commons", address: "900 N Stuart St", city: "Arlington", state: "VA", zip: "22203", phone: "703-348-4260", lat: 38.8825, lng: -77.1115, website: "https://www.meridianballston.com", type: "market-rate", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 15, name: "Meridian at Courthouse Commons", address: "1401 N Taft St", city: "Arlington", state: "VA", zip: "22201", phone: "703-348-6285", lat: 38.8929, lng: -77.0882, website: "https://www.meridiancourthouse.com", type: "market-rate", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 16, name: "The Madison at Ballston Station", address: "4401 4th St N", city: "Arlington", state: "VA", zip: "22203", phone: "703-527-4040", lat: 38.8644, lng: -77.1167, website: "https://www.madisonatballstonstation.com", type: "market-rate", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
  { id: 17, name: "Quebec Apartments", address: "4014 Columbia Pike", city: "Arlington", state: "VA", zip: "22204", phone: "703-521-3313", lat: 38.8504, lng: -77.1052, website: null, type: "affordable", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800" },
  { id: 18, name: "Monterey Apartments", address: "813 South Greenbrier St", city: "Arlington", state: "VA", zip: "22204", phone: "703-379-6656", lat: 38.8469, lng: -77.1091, website: null, type: "affordable", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800" },
  { id: 19, name: "Residences at Government Center", address: "11851 Monument Dr", city: "Fairfax", state: "VA", zip: "22030", phone: "703-865-0100", lat: 38.8537, lng: -77.3561, website: "https://www.residencesgovernmentcenter.com", type: "market-rate", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 20, name: "Belmont at One University", address: "4518 University Drive", city: "Fairfax", state: "VA", zip: "22030", phone: "703-774-3773", lat: 38.8296, lng: -77.3110, website: "https://www.aptsbelmont.com", type: "market-rate", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
  { id: 21, name: "Robinson at One University", address: "4530 University Drive", city: "Fairfax", state: "VA", zip: "22030", phone: "703-774-3799", lat: 38.8292, lng: -77.3114, website: "https://www.aptsrobinson.com", type: "affordable", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800" },
  { id: 22, name: "East Falls Apartments", address: "2913-A Peyton Randolph Dr", city: "Falls Church", state: "VA", zip: "22044", phone: "703-533-1611", lat: 38.8835, lng: -77.1750, website: null, type: "affordable", image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800" },
  { id: 23, name: "Ovation at Arrowbrook", address: "13325 Fairfield Ridge Ave", city: "Herndon", state: "VA", zip: "20171", phone: "571-549-3718", lat: 38.9537, lng: -77.3756, website: "https://www.aptsovation.com", type: "market-rate", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800" },
  { id: 24, name: "Evans Ridge", address: "428 Evans Ridge Terrace NE", city: "Leesburg", state: "VA", zip: "20176", phone: "703-779-0027", lat: 39.1157, lng: -77.5628, website: "https://www.evansridgeapartments.com", type: "affordable", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 25, name: "Indigo at McLean Station", address: "1750 Old Meadow Rd", city: "McLean", state: "VA", zip: "22102", phone: "703-804-0232", lat: 38.9296, lng: -77.2007, website: "https://www.indigomcleanstation.com", type: "market-rate", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
];

export const featuredProperties = properties.filter(p => p.featured);

export const getCities = (): string[] => {
  const cities = [...new Set(properties.map(p => `${p.city}, ${p.state}`))];
  return cities.sort();
};

export const getPropertyById = (id: number): Property | undefined => properties.find(p => p.id === id);

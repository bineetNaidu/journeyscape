import db, { connectDB, disconnectDB } from '@/lib/server/connectDB';
import destinations from '@/lib/destinations.json';
import experiences from '@/lib/experiences.json';
import accommodations from '@/lib/accommodation.json';
import { DestinationModel } from './destination.model';
import { AccommodationModel } from './accommodation.model';
import { HostModel } from './host.model';
import { ExperienceModel } from './experience.model';

export async function seed() {
  if (db.readyState === 1) {
    console.log('[SEED]: Already connected to database');
  } else {
    console.log('[SEED]: Connecting to database');
    await connectDB();
    console.log('[SEED]: Connected to database');
  }

  await db.dropDatabase();
  console.log('[SEED]: Dropped database');

  const host = await HostModel.create({
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: 'https://avatars.githubusercontent.com/u/124599?v=4',
  });

  console.log(`[SEED]: Created host ${host.name}`);

  for (const destination of destinations) {
    const d = await DestinationModel.create({
      city: destination.city,
      country: destination.country,
      description: destination.description,
      image: destination.image,
      latitude: destination.latitude,
      longitude: destination.longitude,
      name: destination.name,
    });
    console.log(`[SEED]: Created destination ${d.name}`);

    for (const accommodation of accommodations) {
      const a = await AccommodationModel.create({
        availabilityEndDate: accommodation.availability_start_date,
        availabilityStartDate: accommodation.availability_end_date,
        description: accommodation.description,
        accommodationType: accommodation.accommodation_type,
        amenities: accommodation.amenities,
        capacity: accommodation.capacity,
        host,
        destination: d,
        image: accommodation.image,
        title: accommodation.title,
        pricePerNight: accommodation.price_per_night,
      });
      console.log(`[SEED]: Created accommodation ${a.title}`);
    }
    for (const experience of experiences) {
      const e = await ExperienceModel.create({
        availabilityEndDate: experience.availability_start_date,
        availabilityStartDate: experience.availability_end_date,
        description: experience.description,
        duration: experience.duration,
        host,
        destination: d,
        image: experience.image,
        title: experience.title,
        price: experience.price,
      });
      console.log(`[SEED]: Created experience ${e.title}`);
    }
  }

  console.log('[SEED]: Done seeding');
}

seed().then(async () => {
  await disconnectDB();
  console.log('[SEED]: Disconnected from database');

  process.exit(0);
});

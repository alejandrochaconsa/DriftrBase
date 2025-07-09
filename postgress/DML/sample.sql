

-- 1. Insert the campsite
insert into campsites (
  id, name, type, contact_name, area_code, phone_number, website, rating,
  location, created_by, updated_by, created_at, updated_at
) values (
  '11111111-1111-1111-1111-111111111111',
  'Markham Park Campground',
  'campground',
  '',
  '+1',
  '9543578868',
  'https://markhampark.com/camping-and-picnic-shelters/',
  5,
  ST_GeogFromText('SRID=4326;POINT(-80.36027054030055 26.128338899886824)'),
  '00000000-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000001',
  now(),
  now()
);

-- 2. Insert amenities
insert into campsite_amenities (id, campsite_id, amenity_type, available, details) values
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'electricity', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'water', true, '{"potable": true}'),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'shower', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'restroom', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'wifi', true, '{"speed": "fast"}'),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'tentCamping', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'rvCamping', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'petFriendly', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'kitchen', true, null),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', 'dumpStation', true, null);

-- 3. Insert comment
insert into campsite_comments (
  id, campsite_id, user_id, text, created_at
) values (
  gen_random_uuid(),
  '11111111-1111-1111-1111-111111111111',
  '00000000-0000-0000-0000-000000000002',
  'Best stay in south florida',
  now()
);

-- 4. Insert image
insert into campsite_images (
  id, campsite_id, image_url, uploaded_by, created_at
) values (
  gen_random_uuid(),
  '11111111-1111-1111-1111-111111111111',
  'path/to/image', -- Replace with actual Supabase Storage URL later
  '00000000-0000-0000-0000-000000000001',
  now()
);

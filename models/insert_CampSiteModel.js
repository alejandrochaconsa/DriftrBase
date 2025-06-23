use('campsiteDB');  
  
  db.campsites.insertOne({
    name: "Markham Park Campground",
    type: "campground",
    contactName: "",
    areaCode: "+1",
    phoneNumber: "9543578868",
    website: "https://markhampark.com/camping-and-picnic-shelters/",
    rating: 5,
    amenities: {
      electricity: { available: true },
      water: { available: true, potable: true },
      shower: { available: true },
      restroom: { available: true },
      wifi: { available: true, speed: "fast" },
      tentCamping: { available: true },
      rvCamping: { available: true },
      petFriendly: { available: true },
      kitchen: { available: true },
      dumpStation: { available: true }
    },
    comments: [
      { userId: "someUserId123", text: "Best stay in south florida" }
    ],
    images: [
      { path: "path/to/image", name: "image1" }
    ],
    location: {
      type: "Point",
      coordinates: [-80.36027054030055, 26.128338899886824]
    },
    createdBy: "Alejandro Chacon",
    updatedBy: "",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  
  // db.campsites.createIndex({ location: "2dsphere" });

  // db.campsites.find().pretty();
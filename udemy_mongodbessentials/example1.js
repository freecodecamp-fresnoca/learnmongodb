// inserts a document with the following key/value pair

db.car.insert({
    name: 'honda',
    make: 'accord',
    year: '2010'
})

// finds a collecton with the 'name' of 'honda' and updates its 'name' key to 'ford'

db.car.update({
    name: 'honda'
    },
    { $set: {
     name: 'ford'
    }
})

// adds a new key/value pair in a doc with the 'name' of 'ford'; $upsert: true makes a new document if the criteria does not exist

db.car.update({
    name: 'ford'
    },
    { $set: {
     transmission: 'automatic'
    }
}, {$upsert: true})

// adds a new documen to the 'users' collection

db.users.insert({
    name: 'jo',
    email: 'me5@me.com',
    password: '444',
    role: 'admin'
})

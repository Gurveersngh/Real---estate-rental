// models.js
require('dotenv').config();
const mongo = require("mongodb");
const DB = 'mongodb+srv://gurveer1602be22:f4EGaXByKQiHcQD0@backend.vksdalo.mongodb.net/backend?retryWrites=true&w=majority&appName=backend'
mongo.connect(DB, {
    // useNewUrlParser: true, 
    // useCreateIndex: true, 
    // useUnifiedTopology: true, 
    // useFindAndModify: false
}).then(() => {
    console.log('Connection successful');
}).catch((err) => console.log('No connection', err));

const BookingSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ListingSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    aptSuite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    bedroomCount: {
      type: Number,
      required: true,
    },
    bedCount: {
      type: Number,
      required: true,
    },
    bathroomCount: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Array,
      default:[],
    },
    listingPhotoPaths: [{ type: String }], // Store photo URLs
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: true
    },
    highlightDesc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true}
)

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImagePath: {
      type: String,
      default: "",
    },
    tripList: {
      type: Array,
      default: [],
    },
    wishList: {
      type: Array,
      default: [],
    },
    propertyList: {
      type: Array,
      default: [],
    },
    reservationList: {
      type: Array,
      default: [],
    }
  },
  { timestamps: true }
)

const Booking = mongoose.model("Booking", BookingSchema);
const Listing = mongoose.model("Listing", ListingSchema );
const User = mongoose.model("User", UserSchema);

module.exports = { Booking, Listing, User };

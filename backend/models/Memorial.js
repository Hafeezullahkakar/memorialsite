// models/Memorial.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tributeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  description: String
});

const lifeSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  author: String,
  attachments: [String]
});

const gallerySchema = new Schema({
  audio: [String],
  video: [String],
  pictures: [String]
});

const memorialSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  relationship: { type: String, required: true },
  memorialDestination: { type: String, required: true },
  country: String,
  birthDate: Date,
  birthPlace: String,
  passedDate: Date,
  deathPlace: String,
  deathCountry: String,
  webAddress: String,
  category: [String],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  theme: { type: Schema.Types.ObjectId, ref: 'Theme' },
  about: {
    personalPhrase: String,
    tributes: [tributeSchema]
  },
  life: lifeSchema,
  gallery: gallerySchema,
  stories: [String]
});

module.exports = mongoose.model('Memorial', memorialSchema);

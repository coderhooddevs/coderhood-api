import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    links: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'link',
      },
    ],
    posts: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'post',
      },
    ],
  },
  {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000,
    },
    timestamps: true,
  }
);

/*subjectSchema.path('image_url').validate((val: string) => {
  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, 'Invalid URL');*/

export default mongoose.model('topic', topicSchema);

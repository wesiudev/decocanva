export type ImageProps = {
  src: string;
  prompt: string;
  author: string;
  isPublic: boolean;
  likes: number;
  comments: [];
  creationTime: any;
};

export type ImagesArray = {
  userImages: ImageProps[];
};

export interface InputEvent {
  target: {
    value: string;
  };
}

export interface Option {
  option?: string;
  value?: string | number;
}


export interface RelatedUserImage {
  user_id: string | number;
  id: number;
  src: string;
  alt: string;
}
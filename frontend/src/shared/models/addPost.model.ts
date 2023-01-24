export interface AddPost {
    mushroomPk: number,
    quantity: number,
    latitude: number,
    longitude: number,
    userPk: number,
    image: {
        name: string,
        type: string,
        uri: string,
    },
  }
  
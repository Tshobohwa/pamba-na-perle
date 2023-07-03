import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
    {
      productName: "Sac à main",
      description: "Sac a main portable fait a base de perle",
      rating: 5,
      inStocks: 200,
      itemsSold: 78,
      price: 9.99,
      images: [
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357699621_292772486646093_31552833377943519_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=YDggIsF-EFoAX_viPRQ&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfB5RfOC3k70d8umNhodQzMemIt_yRiylS-gNyuxoO1BLw&oe=64A6FF0A",
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/357717965_292772483312760_895022591851176610_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1F7TB27JhFwAX8nkmqe&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfDDrWUkr13-tAFdbIKqt7R_vaDnf464RRq7LxIHnAuBmQ&oe=64A8ABD9",
      ],
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

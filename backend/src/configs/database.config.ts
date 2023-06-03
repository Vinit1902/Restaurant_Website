import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect(/*process.env.MONGO_URI!*/ "mongodb+srv://vinit:vinit123@atlascluster.9fx37oy.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}
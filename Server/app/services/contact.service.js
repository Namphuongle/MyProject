const { ObjectId } = require ("mongodb");

class ContactService {
    constructor(client) {
        this.contact = client.db().collection("products");
        
         }
    
    // ContactService()
    //Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractConactData(payload) {

        const contact = {
            title : payload.title,
            price: payload.price,
            speed: payload.speed,
            // phone: payload.phone,
            // favorite: payload.favorite,
        };

      

        //Remove undefined fields
        
        Object.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

    extractAccountData(load) {

        const account = {
            username : load.username,
            password: load.password,
            type: load.type,
          
        };

      

        //Remove undefined fields
        
        Object.keys(account).forEach(
            (key) => account[key] === undefined && delete contact[key]
        );
        return account;
    }

    

    async create(payload) {
        const contact = this.extractConactData(payload);
        const result = await this.contact.findOneAndUpdate(
            contact,
            { $set: {favorite: contact.favorite === true} },
            { returnDocument: "after", upsert: true }
               
        );
        
        return result.value;
    }

    async find(filter) {
        const cursor = await this.contact.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i"},
        });
    }

    async findById(id) {
        
        return await this.contact.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }


    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.contact.findOneAndUpdate(
            filter,
            { $set: update},
            {returnDocument: "after"}
        )
        return result.value;
    }

    async delete(id) {
        const result = await this.contact.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) :null,
        });
        return result.value;
    }

    // async findFavorite() {
    //     return await this.find({ favorite: true});
    // }

    async deleteAll() {
        const result = await this.contact.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ContactService;
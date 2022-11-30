const { ObjectId } = require ("mongodb");

class ContactService {
    constructor(client) {
        this.contact = client.db().collection("user");
        
         }
    
    // ContactService()
    //Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractConactData(payload) {

        const contact = {
            username : payload.username,
            password: payload.password,
            type: payload.type,
        };

      

        //Remove undefined fields
        
        Object.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

   
    

    async create(payload) {
        
        const contact = this.extractConactData(payload);
        const result = await this.contact.findOneAndUpdate(
            
            contact,
            { $set: { _id:new ObjectId() }},
            // contact
            { returnDocument: "after", upsert: true }
               
        );
        // console.log(result.value);
        return result.value;
    }

    async find(filter) {
        const cursor = await this.contact.find(filter);
        return await cursor.toArray();
    }

    async findByName(email) {
        return await this.find({
            name: { $regex: new RegExp(email), $options: "i"},
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
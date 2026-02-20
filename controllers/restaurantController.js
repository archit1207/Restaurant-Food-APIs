//Create Restaurant

const createRestaurantController = async (req,res) => {
    try {
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in Create Restaurant API",
            error
        })
    }
}

module.exports = { createRestaurantController }
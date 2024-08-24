import { Product } from "../models/product.js";

//create the new Product
export const newProduct = async(req,res)=>{
    const {title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = req.body; 
    try {
      const product =  await Product.create(
            {
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail,
                images
            }
        );
        res.status(201).json({
            success:true,
            message:"Product Created Succesfully",
            data:product
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to create Product",
            error:error.message
        });

        console.log("Error Creating Product",error);
        
    }
}


//GetSingleProduct
export const getProduct = async(req,res)=>{
    const {id} = req.params;
    try {
        const getProduct = await Product.findById(id);
        res.status(201).json({
            success:true,
            message:"Get Product Succesfully",
            data:getProduct
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Get Product",
            error:error.message
        })
        console.log("Error Getting Product",error);
    }
}


//GetAllProduct
export const getAllProduct = async(req,res)=>{
    try {
        const getProduct = await Product.find();
        res.status(201).json({
            success:true,
            message:"Get All Product Succesfully",
            data:getProduct
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Get All Product",
            error:error.message
        })
        console.log("Error Getting All Product",error);
    }
}



//UpdateProduct
export const updateProduct = async(req,res)=>{
    const {id} = req.params;
   try {
    const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new:true,});
    res.status(201).json({
        success:true,
        message:"Product Updated Succesfully",
        data:updateProduct
    });
    
   } catch (error) {
     res.status(500).json({
         success:false,
         message:"Failed to Update Product",
         error:error.message
     });
     console.log("Error Updating Product",error);
   }

}


//DeleteProduct
export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteproduct = await Product.findByIdAndDelete(id);
        res.status(201).json({
            success:true,
            message:"Product Deleted Succesfully",
            data:deleteproduct
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Delete Product",
            error:error.message
        });
        console.log("Error Deleting Product",error);
        
    }
}


//DelteAllProduct 
export const deleteAlLProduct = async(req,res)=>{
    try {
        const deleteproduct = await Product.deleteMany();
        res.status(201).json({
            success:true,
            message:"All Product Deleted Succesfully",
            data:deleteproduct
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to Delete All Product",
            error:error.message
        })
    }
}

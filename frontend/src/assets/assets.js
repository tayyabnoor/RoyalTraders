// importing the products 
import p_1 from './products/p-1/p1.avif'

// importing Website assets 
import logo from './products/logo.webp'
import search_icon from './products/search_icon.png'
import profile_icon from './products/profile_icon.png'
import cart_icon from './products/cart_icon.png'
import menu_icon from './products/menu_icon.png'
import dropdown_icon from './products/dropdown_icon.png'



// exporting the Assests 
export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon
}

// exporting the products 
export const products = [
    {
        _id : 'aaaaa',
        name : 'Metal dining table set dining room set kitchen dinner table and chairs set',
        description : '',
        price : 4000,
        image : [p_1],
        category : 'kitchen',
        subCategory:'dining',
        sizes: '',
        date: 1716634345448,
        bestSeller : true

    }
]
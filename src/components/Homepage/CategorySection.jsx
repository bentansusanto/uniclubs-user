import React from 'react'

const CategorySection = () => {
    const category = [
        {
            name:'T-Shirt',
            img : 'tshirt.jpg'
        },
        {
            name:'Jacket',
            img : 'jacket.jpg'
        },
        {
            name:'Accesories',
            img : 'accesories.jpg'
        },
        {
            name:'Shirt',
            img : 'shirt.jpg'
        },
        {
            name:'Hoodie',
            img : 'hoodie.jpg'
        },
        {
            name:'Pants',
            img : 'pants.jpg'
        },
    ]

  return (
    <div className='mb-40'>
        <div className="category-section grid md:grid-cols-3 grid-cols-1 gap-5 mx-32 mt-20">
        {
                    category.map((val, idx) => (
                        <div key={idx} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl">
                            <div className="md:h-[15rem] h-[10rem]">
                                <img className="md:h[50%] h-[100%] w-full object-cover transition-transform duration-500 " src={require('../../assets/image/' + val.img)} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:via-transparent group-hover:black/70 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 md:pt-10 pt-5 text-center transition-all duration-500 rounded-lg group-hover:translate-y-0">
                                <h4 className="text-[1.2rem] font-semibold md:mt-10 mt-8 text-white">{val.name}</h4>
                            </div>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default CategorySection
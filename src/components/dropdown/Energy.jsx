
import { vehicles, accessories } from '../../utils/constants'
import Card from '../../card/Card'


const Dropdown = () => {
  return (
    <div>
      <div className="w-full items-center justify-center mx-auto px-2 sm:px-6 lg:px-8 py-4 flex pt-[50px]">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-[40px]">
              {vehicles.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  image={vehicle.image}
                  title={vehicle.name}
                  leftButton={vehicle.leftBtn}
                  rightButton={vehicle.rightBtn}
                />
              ))}

            </div>
            <div className='w-[1px] h-[350px] bg-gray-300 mt-[30px]'></div>
            <div className="flex flex-col justify-around mt-4 ml-[40px] gap-[15px] w-[196px] font[500]">
              {accessories.Energy.map((accessory) => (
                <a href="#" key={accessory} className="text-gray-700 hover:text-black">{accessory}</a>
              ))}
              
            </div>
          </div>
    </div>
  )
}

export default Dropdown
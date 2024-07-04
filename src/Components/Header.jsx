import React from 'react';


const Header = () => {
    return (
      <div className='flex justify-between items-center py-4 mx-20 text-left'>
        <div className='w-full md:w-1/2  text-3xl	'><p>recuperamos muebles desechados y les damos <span className="font-bold">una segunda vida</span></p><p className='mt-8 text-sm'>(y una tercera, una cuarta y una quinta...)</p></div>
        <div>
            <p className=''>aquí es donde entras <span className="font-bold">tú</span></p>
            <ul className='flex mt-5'>
                <li><span className="font-bold">selecciona tus muebles favoritos </span>y ajusta el alquiler a tu medida</li>
                <li><span className="font-bold">recíbelos gratis en
                casa y disfrútalos</span>estaremos en contacto
para lo que necesites
</li>
                <li><span className="font-bold">los recogeremos
                cuando quieras</span>¡ solo habrás pagado
mientras los tienes !
</li>
            </ul>
            <p><span className='font-bold'>y lo mejor...</span>¡ después podrá hacer
            lo mismo otra persona !</p>
        </div>

      </div>
    );
  };
  
  export default Header;


      let product=[
        {
          id: 1,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0a133019/images/hi-res/50D3I1FFMAA09_1.jpg',
          name: 'Ring',
          
          price: "$49",

          

        },
        {
          id: 2,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw53c5bc68/images/hi-res/50D3I3FLVAA10_1.jpg',
          name: ' Bangle',
          
          price: "$49",

          

        },

        {
          id: 3,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7cac20ac/images/hi-res/502660FARAA09_1.jpg',
          name: ' Ring-2',
          
          price: "$49",

          

        },

        {
          id: 4,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf433d2c7/images/hi-res/50D3B3PPZAAA02_1.jpg',
          name: ' Pandent',
          
          price: "$49",

          

        },
        {
          id: 5,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fc9f1b6/images/hi-res/513618FBLAE00_1.jpg',
          name: 'Gold plated ring',
          
          price: "$49",

          

        },
        {
          id: 6,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw60d5af73/images/hi-res/51E2J1FAKAA00_1.jpg',
          name: 'Golden bangles',
          
          price: "$49",

          

        },

        {
          id: 7,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw313fd9b1/images/hi-res/500052FKAAC09_1.jpg',
          name: 'Ear-rings',
          
          price: "$49",

          

        },

        {
          id: 8,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe50ee969/images/hi-res/50O2IBHATAABP6_1.jpg',
          name: 'Nature themed Ear-rings ',
          
          price: "$49",

          

        },
      
        
        {
          id: 9,
          img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3db19e7a/homepage/ShopByCollection/string-it.jpg',
          name: 'Naclace',
          
          price: "$49",

          

        },
        {
          id: 10,
          img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa0a42997/homepage/ShopByCollection/italian-connection.jpg',
          name: ' Showpiesce',
          
          price: "$49",

          

        },

        {
          id: 11,
          img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcd987f0a/images/hi-res/600102ZNARAS00_1.jpg?sw=360&sh=360',
          name: 'Golden coin',
          
          price: "$49",

          

        },

        {
          id: 12,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe418e104/images/hi-res/50D2P2FZNAA32_1.jpg',
          name: 'Ring-4',
          
          price: "$49",

          

        },
        {
          id: 13,
          img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd891c225/images/hi-res/50D2CADAEAGA29_1.jpg?sw=640&sh=640',
          name: 'Italic Ear-rings',
          
          price: "$49",

          

        },
        {
          id: 14,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw890229c3/images/hi-res/50D5PTSSTAAA10_2.jpg',
          name: ' Brochue',
          
          price: "$49",

          

        },

        {
          id: 15,
          img: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b789791/images/hi-res/74D4B3FXSAA04_1.jpg',
          name: ' Silver-ring',
          
          price: "$49",

          

        },

      
      
        
        

      ]
      let tbl="";
      product.map((p) => {
        tbl +=
        `
        <div class=" col-lg-3 ">
                  <div id="product-1" class="single-product">

                      <div class="part-1">
                      <div class="image">
                        <img src="${p.img}">
                      </div>
                          <ul>
                              <li><a href="" onclick="addcart()"><i class="fas fa-shopping-cart"></i></a></li>
                              <li><a href="#"><i class="fas fa-heart"></i></a></li>
                              <li><a href="#"><i class="fas fa-plus"></i></a></li>
                              <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                      </div>
                      <div class="part-2">
                          <h3 class="product-title">${p.name}</h3>
                        
                          <h4 class="product-price">${p.price}</h4>
                          <button class="add-cart" onclick="addCart${p.id}">Add</button>
                      </div>
                  </div>
              </div>

              
        `
      }
    
    
    );
    document.getElementById("product").innerHTML=tbl;

    let cart=[];

    const addCart= (id) => {
      let c= product.find(item => item.id == id);
      if(c){
        cart.push(c);
        localStorage.setItem('cart',JSON.stringify(cart));
        alert("cart add");
      }
    }
  
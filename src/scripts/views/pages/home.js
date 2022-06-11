const Home = {
    async render() {
        return `
        <section class=" hero_container">
            <h1 tabindex="0" class="hero-title">comfy with indonesian vibes</h1>
        </section>

        <section class="explore_content" id="main_content">
            <h2>Our Service</h2>

            <div class="grid-service">
                <div class="g-col-6 g-col-md-4">
                <picture>
                    <source type="image/jpeg" srcset="./image/img3-small.jpg">
                    <img class="list-item-image" src="./image/img3-large.jpg" alt="jumbotron" />
                </picture>
                    <p class="title_service">
                        Retail
                    </p>
                    <p class="description">
                        Kami memiliki sejarah yang panjang dan pengalaman dalam memproduksi
                        batik berkualitas tinggi
                        untuk segala acara. Beberapa merk yang paling populer ada di e
                        commerce kesayangan anda
                    </p>
                </div>
                <div class="g-col-6 g-col-md-4">
                <picture>
                    
                <source type="image/jpeg" srcset="./image/img2-small.jpg">
                <img class="list-item-image" src="./image/img2-large.jpg" alt="jumbotron" />
                </picture>
                    <p class="title_service">pesanan khusus</p>
                    <p class="description">Melayani pemesanan khusus, baik pesanan pribadi
                        dalam jumlah yang kecil
                        maupun
                        besar berupa
                        pesanan perusahaan. Desainer kami yang berpengalaman, pekerja
                        terlatih, dan fasilitas produksi
                        yang
                        mutakhir akan membantu klien kami untuk dapat merealisasikan visi
                        mereka.</p>
                </div>
                <div class="g-col-6 g-col-md-4">
                <picture>
                    
                <source type="image/jpeg" srcset="./image/img4-small.jpg">
                <img class="list-item-image" src="./image/img4-large.jpg" alt="jumbotron" />
            </picture>
                    <p class="title_service">Expor</p>
                    <p class="description">Memiliki bisnis ekspor yang bertumbuh pesat.
                        Meski Eropa adalah tujuan
                        utamanya,
                        kami juga melayani
                        Negara-negara lain di Asia dan Amerika Utara sebagai pasar yang
                        marak dan berkembang.</p>
                </div>
            </div>
        </section>

        <section class="our_collection" id="product">
            <h3>Our New Collection</h3>

            <div class="grid-product">
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product1.webp">
                    <source type="image/jpeg" srcset="./image/product1-small.jpg">
                    <img class="product-image" src="./image/product1-large.jpg" alt="product batik">
                </picture>
                    <p class="title_product"> DB Peksi Mandasari Merah</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product2.webp">
                    <source type="image/jpeg" srcset="./image/product2-small.jpg">
                    <img class="product-image" src="./image/product2-large.jpg" alt="product batik">
                </picture>
                    <p class="title_product"> Visc Jajaran Sulasih Sogan</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product3.webp">
                <source type="image/jpeg" srcset="./image/product3-small.jpg">
                <img class="product-image" src="./image/product3-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> Visc Jajaran Sulasih Sogan Coklat</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product4.webp">
                <source type="image/jpeg" srcset="./image/product4-small.jpg">
                <img class="product-image" src="./image/product4-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> PI Soga Klir Sogan Merah</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product5.webp">
                <source type="image/jpeg" srcset="./image/product5-small.jpg">
                <img class="product-image" src="./image/product5-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> PA Puger Aji Coklat</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product6.webp">
                <source type="image/jpeg" srcset="./image/product6-small.jpg">
                <img class="product-image" src="./image/product6-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> CDK Cenderawasih Kembar Merah</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product7.webp">
                <source type="image/jpeg" srcset="./image/product7-small.jpg">
                <img class="product-image" src="./image/product7-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> SKM Sekar Manunggal Navy</p>
                </div>
                <div class="list-product g-col-6 g-col-md-4">
                <picture>
                <source type="image/webp" srcset="./image/product8.webp">
                <source type="image/jpeg" srcset="./image/product8-small.jpg">
                <img class="product-image" src="./image/product8-large.jpg" alt="product batik">
            </picture>
                    <p class="title_product"> CDK Cenderawasih Kembar Hijau</p>
                </div>
            </div>
        </section>

        <section class="faqs" id="faqs">
            <div class="batik-faqs">
                <h4>Rumah Batik FAQs</h4>
            </div>

            <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button bg-transparent " type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Apa itu Rumah Batik Nusantara ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body ">
                            Rumah Batik Nusantara merupakan salah satu perusahaan batik di
                            Indonesia yang tetap
                            mempertahankan kualitas dan warisan budaya nusantara Indonesia.
                            Dari awal pendiriannya Rumah
                            Batik Nusantara sangat menekankan "kualitas". Adapun filosofi
                            perusahaan kami adalah
                            "membangun budaya dalam produk"
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed bg-transparent " type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Kenapa saya harus belanja produk Rumah Batik Nusantara ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body ">
                            Anda dapat menemukan busana batik dengan desain yang unik,
                            inovatif, dalam tampilan fashion
                            modern. Hal tersebut bisa Anda lihat dari kekayaan dan keindahan
                            motif Batik nusantara, yang
                            dipadankan dengan warna yang menarik, jahitan dengan standar
                            internasional, untuk tetap
                            mempertahankan kualitasnya.
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed bg-transparent " type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Produk apa saja yang dijual di Rumah Batik Nusantara ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            Produk yang ditawarkan oleh umah Batik Nusantara sangatlah
                            beragam mulai dari busana Batik
                            untuk anak-anak, remaja, hingga orang dewasa. Selain itu juga
                            terdapat kerajinan khas
                            nusantara,
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                        <button class="accordion-button collapsed bg-transparent " type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            Berapa range harga untuk produk yang ditawarkan oleh Rumah Batik
                            Nusantara ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingFour">
                        <div class="accordion-body">
                            Range harga untuk produk Rumah Batik Nusantara sangatlah beragam
                            sesuai dengan kebutuhan
                            Anda. Harga disesuaikan dengan jenis batik, mulai dari batik
                            katun print, batik polyster,
                            batik cap, batik batik tulis, hingga batik sutra
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                        <button class="accordion-button collapsed bg-transparent " type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive"
                            aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Dimana saya bisa mendapatkan produk Rumah Batik Nusantara ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingFive">
                        <div class="accordion-body">
                            Produk - produk Rumah Batik Nusantara bisa didapatkan di toko -
                            toko resmi kami yang ada di
                            seluruh indonesia
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                        <button class="accordion-button collapsed bg-transparent " type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseSix">
                            Apakah Rumah Batik Nusantara melakukan penjualan online ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSix">
                        <div class="accordion-body">
                            kami telah melakukan penjualan secara online sejak September
                            2018. Penjualan online Rumah
                            Batik Nusantara melalui : Akun Facebook di @RumahBatikNusantara,
                            akun Instagram di
                            @Rumahbatiknusantara , tokopedia dan dapat menghubungi kami di
                            nomer WhatssApp 08xxxxxxxx
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    },
    async afterRender() {},
}

export default Home;
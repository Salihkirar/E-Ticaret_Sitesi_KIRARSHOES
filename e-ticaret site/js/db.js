// =========================================
// KIRAR SHOES - JavaScript Veritabanı & Uygulama Katmanı
// Tüm veriler localStorage'da tutulur.
// =========================================

const KIRAR = (() => {
  // ---- ÜRÜN KATALOĞİ ----
  const PRODUCTS_DEFAULT = [
    { id: 1, name: 'River Nub 9PR Worker Bot', brand: 'Lumberjack', category: 'erkek', subcat: 'bot', price: 4299, oldPrice: 5499, image: 'erkek_images/urun1_foto1.jfif', images: ['erkek_images/urun1_foto1.jfif','erkek_images/urun1_foto2.jfif'], color: 'Kamuflaj', sizes: [40,41,42,43,44,45], stock: 30, badge: 'İndirim', description: 'Hakiki nubuk deri üst, termo taban. Fermuar+Bağcık kapatma. Su geçirmez kaplama ile kış aylarında mükemmel konfor sağlar.', rating: 4.7, reviews: 128 },
    { id: 2, name: 'Rohit 1PR Outdoor Bot', brand: 'Salvano', category: 'erkek', subcat: 'bot', price: 2799, oldPrice: null, image: 'erkek_images/urun2_foto1.jfif', images: ['erkek_images/urun2_foto1.jfif'], color: 'Siyah', sizes: [40,41,42,43,44], stock: 15, badge: null, description: 'Hafif EVA taban, nefes alabilen mesh üst yüzey. Uzun yürüyüşlere uygun ergonomik tasarım.', rating: 4.3, reviews: 64 },
    { id: 3, name: 'Unix Trekking Bot', brand: 'Tonny Black', category: 'erkek', subcat: 'bot', price: 5499, oldPrice: 7299, image: 'images/ana_urun_4.jpg', images: ['images/ana_urun_4.jpg'], color: 'Haki', sizes: [41,42,43,44,45], stock: 20, badge: 'Yeni', description: 'Vibram taban teknolojisi ile maksimum kavrayış. Ortopedik iç taban, su geçirmez membran.', rating: 4.8, reviews: 213 },
    { id: 4, name: '229096 1PR Oxford Ayakkabı', brand: 'Dockers by Gerli', category: 'erkek', subcat: 'klasik', price: 6999, oldPrice: null, image: 'images/ana_urun_5.jpg', images: ['images/ana_urun_5.jpg'], color: 'Siyah', sizes: [40,41,42,43,44,45], stock: 12, badge: 'Premium', description: 'İtalyan stil klasik oxford tasarımı. Hakiki deri üst, kauçuk enjeksiyon taban. Resmi ve günlük kullanıma uygun.', rating: 4.9, reviews: 87 },
    { id: 5, name: 'Borel 1PR Sneaker', brand: 'U.S. Polo Assn.', category: 'erkek', subcat: 'spor', price: 4199, oldPrice: 5299, image: 'erkek_images/urun5_foto1.jfif', images: ['erkek_images/urun5_foto1.jfif'], color: 'Beyaz', sizes: [40,41,42,43,44,45], stock: 45, badge: 'İndirim', description: 'Lifestyle sneaker. Hafif tekstil üst, EVA ara taban, vulkanize kauçuk taban.', rating: 4.5, reviews: 301 },
    { id: 6, name: 'Jaymi Kadın Bot', brand: 'Kinetix', category: 'kadin', subcat: 'bot', price: 2499, oldPrice: 3299, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Siyah', sizes: [36,37,38,39,40], stock: 28, badge: 'İndirim', description: 'Şık ve rahat kadın botu. Yumuşak iç astar, kaymaz taban. Günlük kullanım için ideal.', rating: 4.4, reviews: 192, coupon: 'YUZDE10' },
    { id: 7, name: 'Salint 1PR Kadın Bot', brand: 'Nine West', category: 'kadin', subcat: 'bot', price: 6299, oldPrice: 8499, image: 'kadin_images/urun_renk_foto1.jfif', images: ['kadin_images/urun_renk_foto1.jfif'], color: 'Bej', sizes: [36,37,38,39,40,41], stock: 10, badge: 'Çok Satan', description: 'Moda ikonun gözdesi. Asimetrik topuklu tasarım, premium deri kaplama. Gecelere özel şıklık.', rating: 4.8, reviews: 445, coupon: 'YUZDE10' },
    { id: 8, name: '318626.Z Kadın Bot', brand: 'Polaris', category: 'kadin', subcat: 'bot', price: 4799, oldPrice: null, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Siyah', sizes: [36,37,38,39,40], stock: 22, badge: null, description: 'Çizme tarzı yüksek bilek botu. Fermuar kapatma, blok topuk. Denim ve etek kombinleri için mükemmel.', rating: 4.6, reviews: 134 },
    { id: 9, name: '92.314745.Z Topuklu Bot', brand: 'Polaris', category: 'kadin', subcat: 'topuklu', price: 5599, oldPrice: 6999, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Siyah', sizes: [36,37,38,39,40], stock: 8, badge: 'Son Stok', description: '8cm ince topuk, platform taban. Platformlu yapısıyla denge sağlar. Gece davetleri için şık seçim.', rating: 4.7, reviews: 78 },
    { id: 10, name: '316733.Z Fashion Bot', brand: 'Polaris', category: 'kadin', subcat: 'bot', price: 3899, oldPrice: 4799, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Haki', sizes: [36,37,38,39,40,41], stock: 18, badge: 'İndirim', description: 'Trendi takip eden modern tasarım. Fermuarlı, bağcıklı çift kapatma sistemi. Her kombinle uyumlu haki renk.', rating: 4.3, reviews: 109 },
    { id: 11, name: 'Cap Çocuk Yürüyüş', brand: 'Lumberjack', category: 'cocuk', subcat: 'spor', price: 3299, oldPrice: 3999, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Siyah/Gri', sizes: [28,29,30,31,32,33], stock: 35, badge: 'Yeni', description: 'Çocuğunuzun aktif yaşamına uygun yürüyüş ayakkabısı. Yıkanabilir astar, anti-bakteri iç taban.', rating: 4.6, reviews: 221 },
    { id: 12, name: 'Largo Erkek Çocuk Spor', brand: 'Kinetix', category: 'cocuk', subcat: 'spor', price: 2199, oldPrice: 2799, image: 'images/ana_urun_1.jpg', images: ['images/ana_urun_1.jpg'], color: 'Lacivert', sizes: [28,29,30,31,32,33,34], stock: 40, badge: 'İndirim', description: 'Hafif ve esnek yapısıyla aktif çocuklara özel. Cırt-cırt kapatma sistemi, kolay giydirme.', rating: 4.5, reviews: 317 },
    { id: 13, name: 'Largo F Kız Çocuk Spor', brand: 'Kinetix', category: 'cocuk', subcat: 'spor', price: 2199, oldPrice: 2799, image: 'cocuk_images/urun3_foto1.jfif', images: ['cocuk_images/urun3_foto1.jfif'], color: 'Pembe', sizes: [28,29,30,31,32,33,34], stock: 38, badge: 'İndirim', description: 'Pembe ve neşeli tasarımıyla kız çocuklarının favorisi. Hafif EVA taban, cırt-cırt kapatma.', rating: 4.6, reviews: 289 },
    { id: 14, name: 'Lenko Çocuk Yürüyüş', brand: 'Kinetix', category: 'cocuk', subcat: 'spor', price: 1899, oldPrice: null, image: 'cocuk_images/urun4_foto1.jfif', images: ['cocuk_images/urun4_foto1.jfif'], color: 'Siyah', sizes: [29,30,31,32,33,34,35], stock: 25, badge: null, description: 'Dayanıklı mesh üst, esnek kauçuk taban. Okul ve günlük aktiviteler için uygun.', rating: 4.2, reviews: 156 },
    { id: 15, name: '92.511820.P Kız Çocuk Bot', brand: 'Polaris', category: 'cocuk', subcat: 'bot', price: 2799, oldPrice: 3499, image: 'cocuk_images/urun5_foto1.jfif', images: ['cocuk_images/urun5_foto1.jfif'], color: 'Siyah', sizes: [28,29,30,31,32,33], stock: 16, badge: 'İndirim', description: 'Kış için ideal çocuk botu. Yüksek bilek desteği, termal iç astar, kaymaz taban.', rating: 4.4, reviews: 98 },
    { id: 16, name: 'Lumberjack SN31 APRESKI Kırmızı Kadın Kısa Kaban', brand: 'Lumberjack', category: 'giyim', subcat: 'mont', price: 7999, oldPrice: 10999, image: 'giyim_images/urun1_foto1.jfif', images: ['giyim_images/urun1_foto1.jfif', 'giyim_images/urun1_foto2.jfif', 'giyim_images/urun1_foto3.jfif', 'giyim_images/urun1_foto4.jfif', 'giyim_images/urun1_foto5.jfif'], color: 'Kırmızı', sizes: ['XS','S','M','L','XL'], stock: 20, badge: 'İndirim', description: 'Rüzgar ve soğuk geçirmeyen özel apreski dolgulu kumaş. Kadın kesim, şık ve sportif kırmızı kısa kaban.', rating: 4.8, reviews: 512 },
    { id: 17, name: 'Lumberjack SN55 LUCAS Siyah Erkek Mont', brand: 'Lumberjack', category: 'giyim', subcat: 'mont', price: 6499, oldPrice: 7999, image: 'giyim_images/urun2_foto1.jfif', images: ['giyim_images/urun2_foto1.jfif', 'giyim_images/urun2_foto2.jfif', 'giyim_images/urun2_foto3.jfif', 'giyim_images/urun2_foto4.jfif', 'giyim_images/urun2_foto5.jfif', 'giyim_images/urun2_foto6.jfif'], color: 'Siyah', sizes: ['S','M','L','XL','XXL'], stock: 14, badge: 'İndirim', description: 'Soğuk havalara karşı rüzgar ve su geçirmez kapşonlu erkek mont. Rahat ve ergonomik kesim.', rating: 4.7, reviews: 234 },
    { id: 18, name: 'Kinetix SN90 BASIC Siyah Erkek Sweatshirt', brand: 'Kinetix', category: 'giyim', subcat: 'sweatshirt', price: 4999, oldPrice: null, image: 'giyim_images/urun3_foto1.jfif', images: ['giyim_images/urun3_foto1.jfif', 'giyim_images/urun3_foto2.jfif', 'giyim_images/urun3_foto3.jfif', 'giyim_images/urun3_foto4.jfif', 'giyim_images/urun3_foto5.jfif'], color: 'Siyah', sizes: ['S','M','L','XL','XXL'], stock: 30, badge: 'Yeni', description: 'Kinetix Essentials koleksiyonundan pamuklu, yuvarlak yaka (C-neck) siyah erkek sweatshirt.', rating: 4.6, reviews: 341 },
    { id: 19, name: 'Kinetix SN88 BASIC Kapüşonlu Erkek Sweatshirt', brand: 'Kinetix', category: 'giyim', subcat: 'sweatshirt', price: 5499, oldPrice: 6799, image: 'giyim_images/urun4_foto1.jfif', images: ['giyim_images/urun4_foto1.jfif', 'giyim_images/urun4_foto2.jfif', 'giyim_images/urun4_foto3.jfif', 'giyim_images/urun4_foto4.jfif', 'giyim_images/urun4_foto5.jfif'], color: 'Siyah', sizes: ['S','M','L','XL','XXL'], stock: 22, badge: 'İndirim', description: 'Ayarlanabilir kapüşonlu, ön kanguru cepli, içi yumuşak polar yapıda siyah erkek sweatshirt.', rating: 4.5, reviews: 187 },
    { id: 20, name: 'Kinetix CALDER2 Siyah Erkek Eşofman Altı', brand: 'Kinetix', category: 'giyim', subcat: 'esofman', price: 4299, oldPrice: 5199, image: 'giyim_images/urun5_foto1.jfif', images: ['giyim_images/urun5_foto1.jfif', 'giyim_images/urun5_foto2.jfif', 'giyim_images/urun5_foto3.jfif'], color: 'Siyah', sizes: ['XS','S','M','L','XL'], stock: 42, badge: 'İndirim', description: 'Esnek ve nefes alabilir spor kumaş, fermuarlı yan cepli, rahat kesim erkek eşofman altı.', rating: 4.4, reviews: 276 },
    { id: 21, name: 'Kışlık Özel Tasarım Kadın Bot', brand: 'Butigo', category: 'kadin', subcat: 'bot', price: 3499, oldPrice: 4299, image: 'images/kislik_bot1.jfif', images: ['images/kislik_bot1.jfif'], color: 'Siyah', sizes: [36,37,38,39,40], stock: 12, badge: 'Sınırlı', description: 'Su geçirmez özel deri, içi kürklü sıcak tutan yapı.', rating: 4.8, reviews: 54 },
    { id: 22, name: 'Erkek Su Geçirmez Outdoor Bot', brand: 'Torex', category: 'erkek', subcat: 'bot', price: 2999, oldPrice: 3899, image: 'images/torex_bot.jpg', images: ['images/torex_bot.jpg'], color: 'Taba', sizes: [40,41,42,43,44], stock: 24, badge: 'İndirim', description: 'Trekking ve outdoor aktiviteleri için yüksek zemin tutuşlu taban.', rating: 4.5, reviews: 112 },
    { id: 23, name: 'Çocuk Kışlık Kar Botu', brand: 'Polaris', category: 'cocuk', subcat: 'bot', price: 1899, oldPrice: null, image: 'images/polaris_cocuk_bot.jfif', images: ['images/polaris_cocuk_bot.jfif'], color: 'Lacivert', sizes: [28,29,30,31,32,33], stock: 45, badge: null, description: 'Soğuğa dayanıklı termal yapı. Çocukların rahat giyebilmesi için cırtlı kapanış.', rating: 4.6, reviews: 88 },
    { id: 24, name: 'Kadın Deri Şık Topuklu', brand: 'Butigo', category: 'kadin', subcat: 'topuklu', price: 4299, oldPrice: 4999, image: 'images/butigo_topuklu.jfif', images: ['images/butigo_topuklu.jfif'], color: 'Siyah', sizes: [36,37,38,39], stock: 8, badge: 'Premium', description: 'Özel davetler için ince topuklu, rugan detaylı kadın ayakkabısı.', rating: 4.9, reviews: 30, coupon: 'YUZDE10' },
    { id: 25, name: 'Erkek Koşu ve Yürüyüş Ayakkabısı', brand: 'Nike', category: 'erkek', subcat: 'spor', price: 5499, oldPrice: 6299, image: 'images/erkek_nike.jpg', images: ['images/erkek_nike.jpg'], color: 'Gri', sizes: [41,42,43,44,45], stock: 18, badge: 'Çok Satan', description: 'Hafif yapı ve maksimum yastıklama sunan koşu ayakkabısı.', rating: 4.7, reviews: 410 },
    { id: 26, name: 'Çocuk Galatasaray Lisanslı Spor', brand: 'GS Store', category: 'cocuk', subcat: 'spor', price: 2199, oldPrice: 2599, image: 'images/gs_cocuk_lisans.jpg', images: ['images/gs_cocuk_lisans.jpg'], color: 'Sarı/Kırmızı', sizes: [28,29,30,31,32], stock: 30, badge: 'Lisanslı', description: 'Galatasaray taraftarı miniklere özel, rahat spor ayakkabı.', rating: 4.8, reviews: 145 },
    { id: 27, name: 'Kadın Günlük Siyah Tayt', brand: 'Nike', category: 'giyim', subcat: 'tayt', price: 2199, oldPrice: null, image: 'images/kadin_siyah_tayt.jfif', images: ['images/kadin_siyah_tayt.jfif'], color: 'Siyah', sizes: ['XS','S','M','L','XL'], stock: 50, badge: 'Yeni', description: 'Esnek kumaşı ile hareket özgürlüğü sunan toparlayıcı tayt.', rating: 4.6, reviews: 267 },
    { id: 28, name: 'Erkek Siyah Kapşonlu Mont', brand: 'Lumberjack', category: 'giyim', subcat: 'mont', price: 8999, oldPrice: 11999, image: 'images/lumberjack_erkek_mont.jfif', images: ['images/lumberjack_erkek_mont.jfif'], color: 'Siyah', sizes: ['M','L','XL','XXL'], stock: 15, badge: 'İndirim', description: 'Soğuk havalara karşı rüzgar ve su geçirmez özel mont.', rating: 4.7, reviews: 92 },
    { id: 29, name: 'Kırmızı Logolu Kadın Sweatshirt', brand: 'Nike', category: 'giyim', subcat: 'sweatshirt', price: 3499, oldPrice: 4299, image: 'images/nike_kirmizi_sweat.jfif', images: ['images/nike_kirmizi_sweat.jfif'], color: 'Kırmızı', sizes: ['S','M','L'], stock: 20, badge: 'İndirim', description: 'Günlük şıklık için pamuklu kırmızı sweatshirt.', rating: 4.5, reviews: 110, coupon: 'YUZDE10' },
    { id: 30, name: 'Erkek Kışlık Kazak', brand: 'Kinetix', category: 'giyim', subcat: 'kazak', price: 2499, oldPrice: 3199, image: 'images/kinetix_siyah_kazak.jfif', images: ['images/kinetix_siyah_kazak.jfif'], color: 'Siyah', sizes: ['M','L','XL'], stock: 35, badge: null, description: 'Kalın örgü yapısı ile kışın vazgeçilmezi erkek siyah kazak.', rating: 4.4, reviews: 76 }
  ];

  // ---- BAŞLANGIÇ VERİLERİ ----
  function init() {
    if (!localStorage.getItem('kirar_products_v3')) {
      localStorage.setItem('kirar_products', JSON.stringify(PRODUCTS_DEFAULT));
      localStorage.setItem('kirar_products_v3', 'true');
    }
    if (!localStorage.getItem('kirar_users')) {
      // Varsayılan admin
      localStorage.setItem('kirar_users', JSON.stringify([
        { id: 1, name: 'Admin', surname: 'Kirar', email: 'admin@kirar.com', password: 'admin123', role: 'admin', phone: '05001234567', gender: 'Erkek', createdAt: new Date().toISOString() }
      ]));
    }
    if (!localStorage.getItem('kirar_orders')) {
      localStorage.setItem('kirar_orders', JSON.stringify([]));
    }
  }

  // ---- YARDIMCI FONKSİYONLAR ----
  const getProducts = () => JSON.parse(localStorage.getItem('kirar_products')) || [];
  const getUsers = () => JSON.parse(localStorage.getItem('kirar_users')) || [];
  const getOrders = () => JSON.parse(localStorage.getItem('kirar_orders')) || [];
  const getCurrentUser = () => JSON.parse(localStorage.getItem('kirar_current_user'));
  const getCart = () => JSON.parse(localStorage.getItem('kirar_cart')) || [];
  const getFavorites = () => JSON.parse(localStorage.getItem('kirar_favorites')) || [];

  function saveUsers(u) { localStorage.setItem('kirar_users', JSON.stringify(u)); }
  function saveOrders(o) { localStorage.setItem('kirar_orders', JSON.stringify(o)); }
  function saveProducts(p) { localStorage.setItem('kirar_products', JSON.stringify(p)); }
  function saveCart(c) { localStorage.setItem('kirar_cart', JSON.stringify(c)); }
  function saveFavorites(f) { localStorage.setItem('kirar_favorites', JSON.stringify(f)); }

  // ---- KULLANICI İŞLEMLERİ ----
  function register(name, surname, email, password, phone, gender) {
    const users = getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Bu e-posta zaten kayıtlı.' };
    if (password.length < 8) return { ok: false, msg: 'Şifre en az 8 karakter olmalıdır.' };
    if (!/[A-Z]/.test(password)) return { ok: false, msg: 'Şifre en az bir büyük harf (A-Z) içermelidir.' };
    if (!/[a-z]/.test(password)) return { ok: false, msg: 'Şifre en az bir küçük harf (a-z) içermelidir.' };
    if (!/[!@#$%^&*(),.?":{}|<>\-_+=\[\]\/\\]/.test(password)) return { ok: false, msg: 'Şifre en az bir noktalama işareti veya özel karakter içermelidir.' };
    const newUser = { id: Date.now(), name, surname, email, password, phone, gender, role: 'customer', createdAt: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    localStorage.setItem('kirar_current_user', JSON.stringify(newUser));
    return { ok: true, user: newUser };
  }

  function login(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, msg: 'E-posta veya şifre hatalı.' };
    localStorage.setItem('kirar_current_user', JSON.stringify(user));
    return { ok: true, user };
  }

  function logout() {
    localStorage.removeItem('kirar_current_user');
  }

  function updateUser(data) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === data.id);
    if (idx === -1) return false;
    users[idx] = { ...users[idx], ...data };
    saveUsers(users);
    localStorage.setItem('kirar_current_user', JSON.stringify(users[idx]));
    return true;
  }

  function verifyUserForReset(email, phone) {
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (!user) return { ok: false, msg: 'Bu e-posta adresi ile kayıtlı bir kullanıcı bulunamadı.' };
    
    const normUserPhone = user.phone.replace(/\D/g, '');
    const normInputPhone = phone.replace(/\D/g, '');
    
    if (normUserPhone !== normInputPhone) {
      return { ok: false, msg: 'Girdiğiniz telefon numarası kayıtlı bilgilerle eşleşmiyor.' };
    }
    
    return { ok: true, msg: 'Kimlik doğrulama başarılı!' };
  }

  function forgotPassword(email, newPassword) {
    const users = getUsers();
    const userIdx = users.findIndex(u => u.email === email);
    if (userIdx === -1) return { ok: false, msg: 'Bu e-posta adresi ile kayıtlı bir kullanıcı bulunamadı.' };
    
    if (newPassword.length < 8) return { ok: false, msg: 'Şifre en az 8 karakter olmalıdır.' };
    if (!/[A-Z]/.test(newPassword)) return { ok: false, msg: 'Şifre en az bir büyük harf (A-Z) içermelidir.' };
    if (!/[a-z]/.test(newPassword)) return { ok: false, msg: 'Şifre en az bir küçük harf (a-z) içermelidir.' };
    if (!/[!@#$%^&*(),.?":{}|<>\-_+=\[\]\/\\]/.test(newPassword)) return { ok: false, msg: 'Şifre en az bir noktalama işareti veya özel karakter içermelidir.' };
    
    users[userIdx].password = newPassword;
    saveUsers(users);
    
    // If current logged in user reset their password, update session
    const current = getCurrentUser();
    if (current && current.email === email) {
      current.password = newPassword;
      localStorage.setItem('kirar_current_user', JSON.stringify(current));
    }
    
    return { ok: true, msg: 'Şifreniz başarıyla güncellendi!' };
  }

  // ---- SEPET İŞLEMLERİ ----
  function addToCart(product, size, qty = 1) {
    const cart = getCart();
    const key = `${product.id}_${size}`;
    const existing = cart.find(i => i.key === key);
    
    let currentQty = existing ? existing.qty : 0;
    if (currentQty + qty > product.stock) {
      showToast(`Stok yetersiz. En fazla ${product.stock} adet ekleyebilirsiniz.`, 'error');
      return cartCount();
    }
    
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ key, productId: product.id, name: product.name, brand: product.brand, image: product.image, price: product.price, size, qty, stock: product.stock });
    }
    saveCart(cart);
    updateCartBadge();
    return cart.reduce((s, i) => s + i.qty, 0);
  }

  function removeFromCart(key) {
    const cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
    updateCartBadge();
  }

  function updateCartQty(key, qty) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (item) {
      if (qty <= 0) { removeFromCart(key); return; }
      if (qty > item.stock) {
        showToast(`Stok yetersiz. En fazla ${item.stock} adet alabilirsiniz.`, 'error');
        return;
      }
      item.qty = qty;
      saveCart(cart);
      updateCartBadge();
    }
  }

  function clearCart() { saveCart([]); updateCartBadge(); }

  function cartTotal() {
    return getCart().reduce((s, i) => s + (i.price * i.qty), 0);
  }

  function cartCount() {
    return getCart().reduce((s, i) => s + i.qty, 0);
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = cartCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  // ---- FAVORİ İŞLEMLERİ ----
  function toggleFavorite(productId) {
    const user = getCurrentUser();
    if (!user) { window.location.href = 'giris.html'; return false; }
    const favs = getFavorites();
    const userFavs = favs.filter(f => f.userId === user.id);
    const existing = userFavs.find(f => f.productId === productId);
    if (existing) {
      const newFavs = favs.filter(f => !(f.userId === user.id && f.productId === productId));
      saveFavorites(newFavs);
      return false;
    } else {
      favs.push({ userId: user.id, productId, addedAt: new Date().toISOString() });
      saveFavorites(favs);
      return true;
    }
  }

  function isFavorite(productId) {
    const user = getCurrentUser();
    if (!user) return false;
    return getFavorites().some(f => f.userId === user.id && f.productId === productId);
  }

  function getUserFavoriteProducts() {
    const user = getCurrentUser();
    if (!user) return [];
    const products = getProducts();
    const userFavIds = getFavorites().filter(f => f.userId === user.id).map(f => f.productId);
    return products.filter(p => userFavIds.includes(p.id));
  }

  // ---- SİPARİŞ İŞLEMLERİ ----
  function placeOrder(address, paymentMethod, discount = 0) {
    const user = getCurrentUser();
    if (!user) return { ok: false, msg: 'Giriş yapmalısınız.' };
    const cart = getCart();
    if (cart.length === 0) return { ok: false, msg: 'Sepetiniz boş.' };
    const subtotal = cartTotal();
    const kargo = subtotal >= 2000 ? 0 : 149.99;
    const finalTotal = subtotal + kargo - discount;
    const order = {
      id: Date.now(),
      userId: user.id,
      userName: `${user.name} ${user.surname}`,
      items: [...cart],
      total: finalTotal,
      subtotal: subtotal,
      kargo,
      discount,
      address,
      paymentMethod,
      status: 'Hazırlanıyor',
      createdAt: new Date().toISOString()
    };
    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    return { ok: true, orderId: order.id };
  }

  function getUserOrders() {
    const user = getCurrentUser();
    if (!user) return [];
    return getOrders().filter(o => o.userId === user.id);
  }

  // ---- ÜRÜN CRUD (Admin) ----
  function adminAddProduct(data) {
    const products = getProducts();
    const newP = { ...data, id: Date.now(), rating: 0, reviews: 0 };
    products.push(newP);
    saveProducts(products);
    return newP;
  }

  function adminUpdateProduct(id, data) {
    const products = getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...data };
      saveProducts(products);
      return true;
    }
    return false;
  }

  function adminDeleteProduct(id) {
    saveProducts(getProducts().filter(p => p.id !== id));
  }

  function adminUpdateOrderStatus(orderId, status) {
    const orders = getOrders();
    const o = orders.find(o => o.id === orderId);
    if (o) { o.status = status; saveOrders(orders); }
  }

  function adminDeleteUser(userId) {
    saveUsers(getUsers().filter(u => u.id !== userId));
  }

  // ---- UI YARDIMCILARI ----
  function formatPrice(p) {
    return p.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL';
  }

  function starHtml(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }

  function badgeHtml(badge) {
    if (!badge) return '';
    const cls = { 'İndirim': 'badge-sale', 'Yeni': 'badge-new', 'Premium': 'badge-premium', 'Çok Satan': 'badge-hot', 'Son Stok': 'badge-last' };
    return `<span class="badge ${cls[badge] || 'badge-sale'}">${badge}</span>`;
  }

  function productCardHtml(p, extraClass = '') {
    const favCls = isFavorite(p.id) ? 'active' : '';
    return `
    <div class="product-card ${extraClass}" data-id="${p.id}">
      ${badgeHtml(p.badge)}
      <button class="fav-btn ${favCls}" onclick="KIRAR.toggleFavoriteUI(${p.id}, this)" title="Favorilere ekle">♥</button>
      <a href="urun-detay.html?id=${p.id}" class="product-img-link">
        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
      </a>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name"><a href="urun-detay.html?id=${p.id}">${p.name}</a></div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</span>
          <span class="reviews">(${p.reviews})</span>
        </div>
        <div class="product-price">
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          <span class="cur-price">${formatPrice(p.price)}</span>
        </div>
        ${p.coupon ? `<div class="product-coupon-badge" style="background:#fff3cd; color:#856404; font-size:11px; font-weight:700; padding:4px 8px; border-radius:4px; margin-top:8px; display:inline-flex; align-items:center; gap:4px; border:1px dashed #ffeeba; width:fit-content;"><span class="material-icons" style="font-size:12px; vertical-align:middle;">local_offer</span> %10 Kupon: ${p.coupon}</div>` : ''}
      </div>
    </div>`;
  }

  function toggleFavoriteUI(productId, btn) {
    const added = toggleFavorite(productId);
    if (btn) btn.classList.toggle('active', added);
    showToast(added ? '♥ Favorilere eklendi' : 'Favorilerden kaldırıldı');
  }

  function showToast(msg, type = 'success') {
    const existing = document.getElementById('kirar-toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.id = 'kirar-toast';
    t.className = `kirar-toast ${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2500);
  }

  function requireLogin() {
    const user = getCurrentUser();
    if (!user) { window.location.href = 'giris.html'; return false; }
    return user;
  }

  function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
  }

  function renderNavUser() {
    const user = getCurrentUser();
    const el = document.getElementById('nav-user');
    if (!el) return;
    if (user) {
      el.innerHTML = `<a href="${user.role === 'admin' ? 'admin.html' : 'profilim.html'}" class="nav-icon-btn" title="${user.name}"><span class="material-icons">person</span><span class="nav-lbl">${user.name}</span></a>`;
    } else {
      el.innerHTML = `<a href="giris.html" class="nav-icon-btn" title="Giriş Yap"><span class="material-icons">person_outline</span><span class="nav-lbl">Giriş</span></a>`;
    }
    updateCartBadge();
  }

  // ---- PUBLIC API ----
  return {
    init, getProducts, getUsers, getOrders, getCurrentUser, getCart, getFavorites,
    register, login, logout, updateUser, verifyUserForReset, forgotPassword,
    addToCart, removeFromCart, updateCartQty, clearCart, cartTotal, cartCount, updateCartBadge,
    toggleFavorite, toggleFavoriteUI, isFavorite, getUserFavoriteProducts,
    placeOrder, getUserOrders,
    adminAddProduct, adminDeleteProduct, adminUpdateProduct, adminUpdateOrderStatus, adminDeleteUser,
    formatPrice, starHtml, badgeHtml, productCardHtml, showToast, requireLogin, isAdmin,
    renderNavUser
  };
})();

// Sayfa yüklendiğinde init
document.addEventListener('DOMContentLoaded', () => {
  KIRAR.init();
  KIRAR.renderNavUser();
});

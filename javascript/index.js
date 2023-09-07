// menampilkan semua element yang di butuhkan
async function createDiv() {
  for (let index = 0; index < 250; index++) {
    // untuk membuat element div baru dengan id country card
    const div = document.createElement("div");
    // untuk penamaanya
    div.id = `country-card-${index}`;
    // mengambil div dengan id countries-container yang ada di html
    const getArticle = document.getElementById("countries-container");
    // untuk menjadikan div sebagai anak dari countries-container
    getArticle.appendChild(div);

    // untuk membuat element div baru dengan id country detail = caranya sama dengan yang di atas
    const divDetail = document.createElement("div");
    divDetail.id = `country-detail-${index}`;
    const getDoc = document.getElementById(`country-card-${index}`);
    getDoc.appendChild(divDetail);

    // untuk membuat element div baru dengan id country title
    const divTitle = document.createElement("div");
    divTitle.id = `country-title-${index}`;
    const getDiv = document.getElementById(`country-card-${index}`);
    getDiv.appendChild(divTitle);
  }
}
// funtion perulangan untuk mendapat kan api 
function createContent() {
  for (let index = 0; index < 250; index++) {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Mengambil array dari properti negara untuk mengurutkan berdasarkan nama negara
        const countryData = data;
        // perulangan untuk mendapatkan data country dari a sampai z
        for (let i = 0; i < countryData.length - 1; i++) {
          for (let j = i + 1; j < countryData.length; j++) {
            const nameA = countryData[i].name.common.toUpperCase();
            const nameB = countryData[j].name.common.toUpperCase();
            if (nameA > nameB) {
              // Menukar posisi jika negara i harus berada setelah negara j berdasarkan urutan alfabetis
              const temp = countryData[i];
              countryData[i] = countryData[j];
              countryData[j] = temp;
            }
          }
        }
        // melakukan perulangan pada array countryData yang sudah diurutkan untuk menampilkan data di halaman HTML
        for (let i = 0; i < countryData; i++) {
          const data = countryData[i];
        }
        // Kode untuk menampilkan data negara ke halaman HTML
        const countryCard = document.getElementById(`country-card-${index}`);
        countryCard.className = "country-card";
        console.log(countryCard);
        // code untuk mengambil data id country detail
        const countryDetail = document.getElementById(`country-detail-${index}`);
        countryDetail.className = "country-detail";
        console.log(countryDetail);
        // code untuk mengambil data id country title
        const countryTitle = document.getElementById(`country-title-${index}`);
        countryTitle.className = "country-title";
        console.log(countryTitle);
        // code untuk menampilkan bendera
        const flagImg = document.createElement("img");
        flagImg.className = "country-flag";
        flagImg.src = data[index].flags.png;
        countryTitle.appendChild(flagImg);
        // code untuk menampilkan nama negara
        const countryName = document.createElement("h2");
        countryName.className = "country-name";
        countryName.textContent = data[index].name.common;
        countryTitle.appendChild(countryName);
        //  code untuk menampilkan detail data negara ibukota
        const countryCapital = document.createElement("p");
        countryCapital.className = "country-div";
        countryCapital.textContent = "Ibu Kota : " + data[index].capital;
        countryDetail.appendChild(countryCapital);
        // code untuk menampilkan detail data negara bahasa
        const countryLanguage = document.createElement("p");
        countryLanguage.className = "country-div";
        countryLanguage.textContent ="Bahasa : " + Object.values(data[index].languages).join(", ");
        countryDetail.appendChild(countryLanguage);
        // coe untuk menampilkan data wilayah
        const countryRegion = document.createElement("p");
        countryRegion.className = "country-div";
        countryRegion.textContent = "Wilayah : " + data[index].region;
        countryDetail.appendChild(countryRegion);
        // code untuk menmapilkan negara bagian
        const countrySubregion = document.createElement("p");
        countrySubregion.className = "country-div";
        countrySubregion.textContent = "Subregion : " + data[index].subregion;
        countryDetail.appendChild(countrySubregion);
        // code untuk menampilkan detail data negara mata uang
        const countryCurrency = document.createElement("p");
        countryCurrency.className = "country-div";
        countryCurrency.textContent ="Mata Uang : " + Object.values(data[index].currencies)[0].name;
        countryDetail.appendChild(countryCurrency);
        // code untuk menampilkan detail data negara populasi
        const countryPopulation = document.createElement("p");
        countryPopulation.className = "country-div";
        countryPopulation.textContent ="Populasi : " + data[index].population.toLocaleString();
        countryDetail.appendChild(countryPopulation);

        countryCard.appendChild(countryTitle);

        // Event listener untuk menampilkan atau menyembunyikan detail negara
        flagImg.addEventListener('click', () => {
            const currentlyShownDetails = document.querySelector('.country-detail.show');
            if (currentlyShownDetails) {
                currentlyShownDetails.classList.remove('show');
            }
            countryCard.appendChild(countryDetail);
            countryDetail.classList.add('show');
        });

        getArticle.appendChild(countryCard);              
            });
  }
}
// untuk menampilkan semua content yang sudah rumusin di atas
createDiv().then(createContent());



//==============================================================================================
// untuk mengatur saat si halaman di scroll maka warna si headernya berubah tapi jika kembali ke awal maka akan berubah seperti semula
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;
  // Tentukan posisi scroll (misalnya 100 piksel) untuk mengubah warna header
  if (scrollPosition > 100) {
    header.classList.add("fixed"); // untuk menambahkan warna yang di inginkan
  } else {
    header.classList.remove("fixed"); // Kembalikan ke warna awal ketika scroll kembali ke atas
  }
});



// ======================================================================================================
// untuk mengatur top yang ada di halaman html agar bisa langsung ke halaman paling atas
// Get button
let mybutton = document.getElementById("my-btn");
// function untuk menambatkan kode agar bisa menscroll ke atas langsung
window.onscroll = function () {
  scrollFunction();
};
// function untuk menerapkan stylenya jika kita menscroll ke bawah terus menerus bisa langsung ke atas dengan  sekali ketik
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// untuk menambah klik agar ketika di klik akan ke atas
mybutton.addEventListener("click", function () {
  topFunction();
});
// Saat pengguna mengklik tombol, gulir ke bagian atas dokumen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function createElement(tag, attributes, textContent) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (textContent) {
    const textNode = document.createTextNode(textContent);
    element.appendChild(textNode);
  }
  return element;
}


//====================================================================================================
// untuk mendapatkan kode alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Mengambil nilai input dari formulir kontak
  const nameInput = document.getElementsByName("name")[0];
  const emailInput = document.getElementsByName("email")[0];
  const countryInput = document.getElementsByName("country")[0];
  const messageInput = document.getElementsByName("message")[0];
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const country = countryInput.value;
  const message = messageInput.value.trim();
  // Memeriksa apakah semua input telah diisi
  if (name === '' || email === '' || country === '' || message === '') {
      alert("Please fill in all fields before submitting the form.");
      return;
  }
  // Menampilkan pesan terima kasih setelah pengguna mengirim formulir
  const thankYouMessage = `Thank you, ${name}! Your message has been sent. 
  You are from ${country}. We will get back to you soon.`;
  alert(thankYouMessage);
  // Reset formulir setelah pengguna mengirimkan pesan
  document.getElementById("contactForm").reset();
});



//====================================================================================================================
// Fungsi untuk mengarahkan pengguna ke URL saat tombol ditekan untuk article di halaman home
// ini untuk article 1
function redirectToURL() {
  // untuk mengarahkan ke link yang di ambil
  window.location.href =
    "https://www.nationalgeographic.com/expeditions/get-inspired/inside-look/bhutans-black-necked-crane-festival/";
}
// Menambahkan event listener ke tombol saat dokumen siap
document.addEventListener("DOMContentLoaded", function () {
  let readMoreBtn = document.getElementById("readMoreBtn2");
  readMoreBtn.addEventListener("click", redirectToURL);
});
// ini untuk articke 2
// caranya sama dengan yang di atas
function redirectToURL() {
  window.location.href =
    "https://www.idntimes.com/science/discovery/amelia-solekha/fakta-benin-city-afrika-c1c2";
}
document.addEventListener("DOMContentLoaded", function () {
  let readMoreBtn = document.getElementById("readMoreBtn");
  readMoreBtn.addEventListener("click", redirectToURL);
});
const zoomImage = document.getElementById("zoomImage");
const modal = document.getElementById("modal01");



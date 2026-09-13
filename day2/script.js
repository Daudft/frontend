let btn = document.querySelector(".add")
let input = document.querySelector("input")
let cards = document.querySelector(".cards")


btn.addEventListener("click",()=>{
    if(input.value.trim() === "")
        return;


    cards.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card1">
                        <h3>${input.value.trim()}</h3>
                        <div class="icons">
                            <i class="ri-check-line"></i>
                            <i class="ri-delete-bin-6-line"></i>

                        </div>
                    </div>

    `
)
})


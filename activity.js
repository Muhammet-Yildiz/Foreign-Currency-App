let dropdown = document.querySelectorAll(".dropdown-select")


for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function(event) {


        dropdown[i].parentElement.classList.add("brlight");

        dropdown[i].nextElementSibling.style.display = "block"


    });

    document.addEventListener("click", function(event) {
        var element = dropdown[i].parentElement.parentElement.contains(event.target)

        if (!element) {
            dropdown[i].parentElement.classList.remove("brlight");
            dropdown[i].nextElementSibling.style.display = "none"

        } else {

            if (event.target.classList.contains("dropdown-list_item") || event.target.tagName == "SMALL") {
                let firstSvg = dropdown[i].lastElementChild
                let dropdown_list_item = event.target

                if (event.target.tagName == "SMALL") {
                    dropdown_list_item = event.target.parentElement

                }
                let svg = dropdown_list_item.firstElementChild
                let txt = dropdown_list_item.textContent.trim()

                let newSvg = svg.cloneNode(true)

                dropdown[i].appendChild(newSvg)


                dropdown[i].innerHTML = " "
                dropdown[i].appendChild(newSvg)

                let newSpan = document.createElement("span")
                newSpan.className = "selected"
                newSpan.textContent = txt

                dropdown[i].appendChild(newSpan)
                dropdown[i].appendChild(firstSvg)


                dropdown[i].nextElementSibling.style.display = "none"



            }

        }
    })


}
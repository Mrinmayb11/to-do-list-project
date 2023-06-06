const TickBtns = document.getElementsByClassName("btnsI");
const TickBtnsArr = Array.from(TickBtns);

TickBtnsArr.forEach(btn => { 
    btn.addEventListener("click", (clickedBtn) => {
        const Input = clickedBtn.target.nextElementSibling;
        const isChecked = btn.classList.contains("fa-solid");
        
        if (Input.value.trim() !== "") {
            btn.classList.toggle("fa-solid");
            btn.classList.toggle("fa-check");
        } else if (isChecked) {
            btn.classList.remove("fa-solid", "fa-check");
        }
        
        const CheckedLine = clickedBtn.target.previousElementSibling;
        const InputLength = Input.value.length;
        
        if (isChecked) {
            CheckedLine.style.width = "";
        } else {
            CheckedLine.style.width = `${InputLength + InputLength / 100 * 75}%`;
        }
    });
});

const Inputs = document.getElementsByClassName("inputs");
const InputsArr = Array.from(Inputs);
const RemoveTask = document.getElementsByClassName("remove");
const RemoveTaskArr = Array.from(RemoveTask);

InputsArr.forEach(Input => {
    Input.addEventListener("input", (CheckInput) => {
        let RemoveBtn = CheckInput.target.nextElementSibling;
        if (CheckInput.target.value === "") {
            RemoveBtn.classList.remove("fa-regular", "fa-circle-xmark");
        } else {
            RemoveBtn.classList.add("fa-regular", "fa-circle-xmark");
        }
        RemoveBtn.onclick = () => {
            const SelectedBtn = Input.nextElementSibling;
            const RemoveTick = Input.previousElementSibling;
            const CheckedLine = Input.previousElementSibling.previousElementSibling;
            SelectedBtn.classList.remove("fa-regular", "fa-circle-xmark");
            Input.value = "";
            if (RemoveTick.classList.contains("fa-solid")) {
                RemoveTick.classList.remove("fa-solid", "fa-check");
                CheckedLine.style.width = "";
            }
        };
    });
});

const cleanBtn = document.getElementById("clean");
let RemoveBtn;
cleanBtn.addEventListener("click", () => {
    InputsArr.forEach((Input) => {
        const SelectedBtn = Input.nextElementSibling;
        const RemoveTick = Input.previousElementSibling;
        const CheckedLine = Input.previousElementSibling.previousElementSibling;
        SelectedBtn.classList.remove("fa-regular", "fa-circle-xmark");
        Input.value = "";
        if (RemoveTick.classList.contains("fa-solid")) {
            RemoveTick.classList.remove("fa-solid", "fa-check");
            CheckedLine.style.width = "";
        }
    });
});

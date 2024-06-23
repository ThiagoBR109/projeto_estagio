const btnMenu = document.querySelector(".btnMenu");
const menu = document.querySelector("#nav-container");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle('on');
    if(btnMenu.classList.contains("on")){
        menu.classList.add("visible");
    }else{
        menu.classList.remove("visible");
        menu.classList.add("hidden");
    }
})

const btnForm = document.querySelector("#content-button");

btnForm.addEventListener("click", () =>{
    Swal.fire({
        title: "<span class='text-white'>Cadastro</span>",
        icon: "info",
        background: "#1D1D1D",
        html: `
            <form class="d-flex flex-column gap-2 align-items-center">
                <label class="text-start text-white">Nome</label>
                <input class="w-75 p-1 form_input rounded border-0 px-2" type="text" placeholder="Digite seu nome">
                <label class="text-start text-white">Data de Nascimento</label>
                <input class="w-75 p-1 form_input rounded border-0 px-2" type="date" placeholder="Digite sua data de nascimento">
                <label class="text-start text-white">E-mail</label>
                <input class="w-75 p-1 form_input rounded border-0 px-2" type="email" placeholder="Digite seu e-mail">
                <label class="text-start text-white">CPF</label>
                <input class="w-75 p-1 form_input rounded border-0 px-2" type="text" placeholder="Digite seu CPF">
                <div class="d-flex flex-column align-items-center text-white">
                    <label class="text-start">Sexo</label>
                    <div class="d-flex gap-3 ">
                        <label for="masculino">Masculino</label>
                        <input type="radio" name="genero" value="masculino" id="masculino">
                        <label for="feminino">Feminino</label>
                        <input type="radio" name="genero" value="feminino" id="feminino">
                    </div>
                </div>
            </form>
        `, 
        showCancelButton: true,
        confirmButtonText: `
        Cadastrar
        `,
        cancelButtonText: `
            Cancelar
        `,
        confirmButtonColor:"#55eb34",
        cancelButtonColor:"#d33",
    }).then(result => {
        if(result.isConfirmed){
            Swal.fire({
                icon: "success",
                title: "Cadastrado com sucesso!",
                background: "#1D1D1D",
                color: "white",
                showConfirmButton: false,
                timer: 1500,
            })
        }
    })
})
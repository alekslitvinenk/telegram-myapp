<script lang="ts">
    import AuthForm from "../../AuthForm.svelte";
    import {quickAddUser} from "$lib/apiclient";
    import type {LoginData, UserData} from "$lib/types";
    import TokenBox from "../../TokenBox.svelte";
    import {page} from "$app/stores";
    import ActionBtn from "../../ActionBtn.svelte";
    import {goto} from "$app/navigation";

    let token: string;
    let hasError: boolean;

    const url = $page.url;
    const telegramID  = url.searchParams.get('id')

    const handleSubmit = (newUser: LoginData) => {
        hasError = false
        state = "pending"

        quickAddUser(newUser).then(response => {
            if (response.ok) {
                response.json().then((data: UserData) => {
                    token = data.token
                    state = "registered"
                })
            } else {
                hasError = true
                console.log("Add user response: ", response)
            }
        })
    }

    let state: "unreristered" | "pending" | "registered" = "unreristered";
</script>

{#if state === "unreristered"}
    <div>
        <AuthForm telegramData={telegramID} actionHandler={handleSubmit} hasAuthError={hasError} submitName="SignUp"/>
    </div>
{:else if state === "pending"}
    <div>
        <p>Registering user...</p>
    </div>
{:else}
    <div>
        <TokenBox token={token}/>
        <div class="btns"><ActionBtn actionName="SignIn" actionHandler={() => {goto(`/sign-in?id=${telegramID}`)}} /></div>
    </div>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    .btns {
        text-align: center;
    }
</style>
<script lang="ts">
    import AuthForm from "../../AuthForm.svelte";
    import {quickAddUser} from "$lib/apiclient";
    import type {LoginData, UserData} from "$lib/types";
    import TokenBox from "../../TokenBox.svelte";

    let token: string;
    let hasError: boolean;

    const handleSubmit = (newUser: LoginData) => {
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

    let state: "unreristered" | "pending" | "registered" | "error" = "unreristered";
</script>

{#if state === "unreristered" || "error"}
    <div>
        <AuthForm actionHandler={handleSubmit} hasAuthError={hasError} submitName="SignUp"/>
    </div>
{:else if state === "pending"}
    <div>
        <p>Registering user...</p>
    </div>
{:else}
    <TokenBox token={token}/>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>
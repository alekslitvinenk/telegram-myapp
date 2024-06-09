<script lang="ts">
    import AuthForm from "../../AuthForm.svelte";
    import {doLogin} from "$lib/apiclient";
    import type {LoginData, UserData} from "$lib/types";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    let token: string;
    let hasError: boolean;

    const url = $page.url;
    const telegramID  = url.searchParams.get('telegramID')

    const handleSubmit = (newUser: LoginData) => {
        hasError = false
        state = "pending"

        doLogin(newUser).then(response => {
            if (response.ok) {
                response.json().then((data: UserData) => {
                    token = data.token

                    goto("/profile")
                })
            } else {
                hasError = true
                console.log("Add user response: ", response)
            }
        })
    }

    let state: "unauthed" | "pending" | "error" = "unauthed";
</script>

{#if state === "unauthed" || "error"}
    <div>
        <AuthForm telegramData={telegramID} actionHandler={handleSubmit} hasAuthError={hasError} submitName="SignIn"/>
    </div>
{:else}
    <div>
        <p>Logging in...</p>
    </div>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>
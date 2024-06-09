<script lang="ts">
    import {doLogout, validateToken} from "$lib/apiclient";
    import {goto} from "$app/navigation";
    import type {UserData} from "$lib/types";

    let token: string = ""

    $: myToken = {token: token}

    const handleAction = (event: Event) => {
        event.preventDefault()

        validateToken(myToken).then(res => {
            if (res.ok) {
                res.json().then((fullProfile: UserData) => {
                    validateCallBack(fullProfile);
                })
            } else {
                doLogout().then(() => goto("/sign-in"))
            }
        })
    }

    export let validateCallBack: Function
</script>

<div id="signupquick" class="quicksignup">
    <h3>Enter your token</h3>
    <form on:submit={handleAction}>
        <label>
            Telegram ID:
            <input
                    name="token"
                    type="text"
                    placeholder="Your token"
                    bind:value={token} />
        </label>
        <br />
        <input type="submit" value="Submit"/>
    </form>
</div>

<style>
    .quicksignup {
        width: 440px;
        height: fit-content;
        margin: 2rem auto;
        background-color: white;
        border: 1px solid;
        -webkit-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        position: relative;
    }

    .quicksignup form {
        width: 184px !important;
        margin: 0 auto;
    }

    .quicksignup form label {
        font-size: 1rem;
    }

    .quicksignup input[type=submit] {
        display: block;
        margin: 20px auto;
        background-color: #007bff;
        height: 35px;
        width: 100px;
        border-radius: 4px;
        border-style: none;
        color: white;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 1.2rem;
    }

    .quicksignup input[type=submit]:hover {
        background-color: #0051ff;
    }

    .quicksignup h3 {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }
</style>
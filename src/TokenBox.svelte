<script lang="ts">
    export let token: string;
</script>

<div class="tokenBox">
    <p>Below is your token!</p>
    <p>Make sure to save it before leaving this page, you will need this to authenticate in our system.</p>
    <p><strong>{token}</strong></p>
</div>

<style>
    .tokenBox {
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

    .tokenBox p {
        text-align: center;
    }
</style>
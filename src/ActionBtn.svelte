<script lang="ts">
    export let actionName: string
    export let actionHandler: Function;
</script>

<div class="btn">
    <div on:click={() => actionHandler()}>{actionName}</div>
</div>

<style>
    .btn {
        display: inline-block;
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
        text-align: center;
    }
</style>
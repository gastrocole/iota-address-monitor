<script lang="ts">
    import { getPollingIntervalFromSettings, setPollingIntervalFromSettings } from '../../lib/SettingsApi'
import { restartAddressPollingService } from '../../services/polling';

    let input;
    let errorMessage = '';
    let success = false;

    getPollingIntervalFromSettings().then((value) => {
        input = value;
    });

    const validate = () => {
        if(input > 0) {
            return true;
        } else {
            return false;
        }
    }

    const onSubmit = () => {
        if(validate()) {
            setPollingIntervalFromSettings(input)
            .then(() => {
                success = true;
                errorMessage = '';
                restartAddressPollingService()
            })
            .catch((error) => {
                success = false;
                errorMessage = error
            }); 
        } else {
            success = false;
            errorMessage = "Please enter a number greater than 0"
        }
        
    }

</script>

<form on:submit|preventDefault={onSubmit} class="mb-3">
    <label for="addressInput" class="form-label h4">Update polling interval</label>
    <div class="input-group">
        <input type="number" class="form-control {errorMessage && "is-invalid"} {success && "is-valid" }" id="addressInput" bind:value={input}>
        <span class="input-group-text">seconds</span>
        <div class="invalid-feedback">
            {errorMessage}
        </div>
        <div class="valid-feedback">
            Polling interval updated successfully
        </div>
    </div>
    <button type="submit" class="btn btn-success button">Update interval</button>
</form>

<style>
    button {
        width: 100%;
        margin-top: 8px;
    }
</style>

<script setup lang="ts">
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
const props = defineProps({})
</script>

<style lang="scss">
.kd-input-group {
	@apply flex flex-wrap mb-5;

	label {
		@apply text-lg text-navy font-semibold tracking-wide block w-full mb-1;
	}

	input[type='text'] {
		@apply w-full px-3 py-1 text-lg tracking-wide border-b-8 border-l-4 border-r-4 border-t-2 border-navy rounded;
		transition: border 0.1s ease-in-out;

		&:focus {
			@apply outline-none border-orange;
		}

		&.error {
			@apply border-red-500;
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	textarea {
		@apply w-full px-3 py-1 text-lg tracking-wide border-b-8 border-l-4 border-r-4 border-t-2 border-navy rounded;
		transition: border 0.1s ease-in-out;

		&:focus {
			@apply outline-none border-orange;
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	select {
		/* Reset */
		appearance: none;
		outline: 0;
		font: inherit;
		/* Personalize */
		@apply w-full px-3 py-1 text-lg tracking-wide border-b-8 border-l-4 border-r-4 border-t-2 border-navy rounded;
		background: url('../../assets/images/svg/down-arrow-svgrepo-com.svg')
				no-repeat right 0.8em center / 1.2em,
			white;
		transition: border 0.1s ease-in-out;

		&:focus {
			@apply outline-none border-orange;
		}

		option {
			@apply py-2;
		}

		&:disabled {
			@apply bg-transparent;
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	input[type='radio'] {
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		/* Remove most all native input styles */
		appearance: none;
		/* For iOS < 15 */
		background-color: transparent;
		/* Not removed via appearance */
		margin: 0;

		@apply w-6 bg-white aspect-square border-4 border-navy rounded-xl outline-none cursor-pointer;
		transition: 0.3s;

		&:checked {
			@apply bg-yellow outline-none;
		}

		&:focus {
			@apply outline-none;
		}

		&:disabled {
			@apply bg-transparent;
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
	label.kd-radio {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin: 5px 0;
		cursor: pointer;
	}

	input[type='checkbox'] {
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		/* Remove most all native input styles */
		appearance: none;
		/* For iOS < 15 */
		background-color: transparent;
		/* Not removed via appearance */
		margin: 0;

		@apply w-6 bg-white aspect-square border-4 border-navy rounded outline-none cursor-pointer;
		transition: 0.3s;

		&:checked {
			@apply bg-yellow outline-none;
		}

		&:focus {
			@apply outline-none;
		}

		&:disabled {
			@apply bg-transparent;
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
	label.kd-checkbox {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin: 5px 0;
		cursor: pointer;
	}
}
</style>

<template>
	<div class="kd-form-ui">
		<form action="#" class="flex flex-wrap gap-8">
			<div class="max-w-sm">
				<div class="kd-input-group">
					<label for="textInput">Text</label>
					<input type="text" class="" id="textInput" />
				</div>

				<div class="kd-input-group">
					<label for="textInput">Text error</label>
					<input type="text" class="error" id="textInput" />
					<p class="text-red-500 text-sm italic mt-1 tracking-wide">
						Please enter a username
					</p>
				</div>

				<div class="kd-input-group">
					<label for="textArea">Textarea</label>
					<textarea class="" rows="4" id="textArea" />
				</div>

				<div class="flex gap-4">
					<KDButtonAlt text="Button" url="#" />
					<KDButtonAlt text="Button lg" url="#" size="large" />
				</div>
			</div>

			<div class="max-w-sm">
				<div class="kd-input-group">
					<label for="dropdown">Select</label>
					<select name="dropdown" id="dropdown">
						<option value="0">Option 1</option>
						<option value="0">Option 2</option>
						<option value="0">Option 3</option>
						<option value="0">Option 4</option>
						<option value="0">Option 5</option>
					</select>
				</div>

				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="radio" name="radio" />
						Radio
					</label>
				</div>
				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="radio" name="radio" checked />
						Radio checked
					</label>
				</div>

				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="checkbox" name="checkbox" />
						Checkbox
					</label>
				</div>
				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="checkbox" name="checkbox" checked />
						Checkbox checked
					</label>
				</div>
			</div>

			<div class="max-w-sm">
				<div class="kd-input-group">
					<label for="textInput">Text disabled</label>
					<input type="text" class="" id="textInput" disabled />
				</div>

				<div class="kd-input-group">
					<label for="textArea">Textarea disabled</label>
					<textarea class="" rows="4" id="textArea" disabled />
				</div>

				<div class="kd-input-group">
					<label for="dropdown">Select disabled</label>
					<select name="dropdown" id="dropdown" disabled>
						<option value="0">Option 1</option>
						<option value="0">Option 2</option>
						<option value="0">Option 3</option>
						<option value="0">Option 4</option>
						<option value="0">Option 5</option>
					</select>
				</div>

				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="radio" name="radio" disabled />
						Radio disabled
					</label>
				</div>

				<div class="kd-input-group">
					<label class="kd-radio">
						<input type="checkbox" name="checkbox" disabled />
						Checkbox disabled
					</label>
				</div>
			</div>
		</form>
	</div>
</template>

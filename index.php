<?php
get_header();
?>

<div class="login-page">
	<div class="login-page__container">
		<div class="login-page__container__description">
			<h1>Log in</h1>
			<p>Log in with your data that you received from the photographer</p>
		</div>
		<form class="login-page__form">
			<input class="login-page__form__email" type="text" placeholder="E-mail">
			<input class="login-page__form__password" type="text" placeholder="Password">
			<div class="login-page__login-panel">
				<a href="#" class="login-page__login-panel__reminder">Forgot password?</a>
				<button class="login-page__login-panel__button">Log in</button>
			</div>
		</form>
	</div>
</div>

<?php
get_footer();
?>

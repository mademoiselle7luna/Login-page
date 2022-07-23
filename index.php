<?php
get_header();
?>

<div class="login-page">
	<div class="container">
		<div class="container__description">
			<h1>Log in</h1>
			<p>Log in with your data that you received from the photographer</p>
		</div>
		<form class="form">
			<input class="form__email" type="text" placeholder="E-mail">
			<input class="form__password" type=text" placeholder="Password">
			<div class="login-panel">
				<a href="#" class="login-panel__reminder">Forgot password?</a>
				<button class="login-panel__button">Log in</button>
			</div>
		</form>
	</div>
</div>

<?php
get_footer();
?>

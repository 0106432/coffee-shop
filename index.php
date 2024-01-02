<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="style22.css">
</head>
<body>
     <form action="login.php" method="post">
     	<h2 class="title">LOGIN</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error-message"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>User Name</label>
     	<input type="text" name="uname" id="uname" placeholder="User Name"><br>

     	<label>Password</label>
     	<input type="password" name="password" id="password" placeholder="Password"><br>

     	<button type="submit" id="login-button">Login</button>
          <a href="signup.php" class="ca">Create an account</a>
     </form>
	 <
</body>

</html>
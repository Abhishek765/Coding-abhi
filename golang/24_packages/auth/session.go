package auth

// private function to extract the session -> we cannot use this function outside the package because the first letter is small
func extractSession() string {
	return "LOGGEDIN"
}

// public function to get the session -> we can use this function outside the package because the first letter is capital
func GetSession() string {
	return extractSession()
}
   
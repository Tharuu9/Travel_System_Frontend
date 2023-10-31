let baseURL = "http://localhost:8080/";
$("#signUpBtn").click(function (){
    let name = $("#fullName").val();
    let email = $("#userEmail").val();
    let address = $("#userAddress").val();
    let userName = $("#userName").val();
    let password = $("#userPwd").val();
    let nicOrPassportNum = $("#userNICorLicenceNo").val();
    let user = {
        name: name,
        email: email,
        address: address,
        userName: userName,
        password: password,
        role: "User",
        nicOrPassportNum: nicOrPassportNum
    }
    console.log(user);
    $.ajax({
        type: "POST", // You might need to adjust this depending on your server's API.
        url: baseURL + "user/add_user",
        data: JSON.stringify(user),
        contentType: "application/json",
        success: function () {
            alert(" User SignUp Successfully!");
            document.getElementById('signUpForm').reset();
        },
        error: function (error) {
            console.error("Oops!Error SignUp User..!", error);
        }

    });
})
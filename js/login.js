$(document).ready(function() {
    // 當登入按鈕被點擊時
    $("#loginBtn").click(function() {
        // 獲取帳號和密碼
        const account = $("#account").val().trim();
        const password = $("#password").val().trim();
        
        // 基本驗證
        if (account === "") {
            alert("請輸入帳號");
            $("#account").focus();
            return false;
        }
        
        if (password === "") {
            alert("請輸入密碼");
            $("#password").focus();
            return false;
        }
        
        // 這裡可以將帳號和密碼傳送到伺服器
        console.log("帳號:", account);
        console.log("密碼:", password);
        
        // 如果您只是複製網站而不實際處理登入，可以顯示一條提示訊息
        alert("您輸入的帳號為: " + account + "\n這是一個演示網站，不會處理實際登入。");
        
        // 如果需要實際提交表單，取消下面這行的註解
        // $("#loginForm").submit();
    });
    
    // 讓按 Enter 鍵也能提交表單
    $("#account, #password").keypress(function(e) {
        if (e.which === 13) {
            $("#loginBtn").click();
            return false;
        }
    });
});
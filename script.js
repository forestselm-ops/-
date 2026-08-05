document.addEventListener('DOMContentLoaded', () => {
    // サイドバーを埋め込むための要素を取得
    const sidebarContainer = document.getElementById('sidebar-container');

    if (sidebarContainer) {
        // fetch機能を使って sidebar.html のデータを取得します
        fetch('sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('サイドバーの読み込みに失敗しました');
                }
                return response.text();
            })
            .then(htmlData => {
                // 取得したHTMLを枠の中に埋め込みます
                sidebarContainer.innerHTML = htmlData;

                // サイドバーが正しく埋め込まれた後に、ボタン開閉イベントをセットします
                initSidebarToggle();
            })
            .catch(error => {
                console.error('エラー詳細:', error);
                sidebarContainer.innerHTML = '<p style="padding: 16px; color: red;">メニューの読み込みエラーが発生しました</p>';
            });
    } else {
        // サイドバー枠が無いページでもボタンが開閉できるように用意
        initSidebarToggle();
    }
});

// サイドバーの開閉機能を動かす関数
function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('is-collapsed');
        });
    }
}
// 星座奥秘 - 主要功能脚本
document.addEventListener('DOMContentLoaded', function() {
    // 设置版权年份
    const copyrightYearSpan = document.getElementById('copyright-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }

    // 创建星空背景效果
    createStarryBackground();

    /**
     * 创建星空背景
     */
    function createStarryBackground() {
        // 减少流星数量和频率，提高稳定性
        setInterval(() => {
            if (Math.random() > 0.85) { // 降低频率
                const star = document.createElement('div');
                star.className = 'shooting-star';
                
                // 随机位置和延迟
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight / 4; // 主要在上部显示
                const delay = Math.random() * 2;
                const duration = 2 + Math.random() * 3;
                
                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.animationDelay = delay + 's';
                star.style.animationDuration = duration + 's';
                
                document.body.appendChild(star);
                
                // 动画结束后移除
                setTimeout(() => {
                    if (star.parentNode) { // 安全检查
                        star.parentNode.removeChild(star);
                    }
                }, (delay + duration) * 1000);
            }
        }, 2000); // 降低检查频率
    }
}); 
/* --- 
  儲存所有章節內容的地方
--- */
const chapterData = {
    // --- 第一章的 HTML 內容與邏輯 ---
    "1": {
        html: `
            <h1 class="chapter-title">第一章：波動 (Traveling Wave)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(A\\) amplitude (振幅)</div>
                    <div>\\(T = \\frac{1}{f} \\) period (週期, in seconds)</div>
                    <div>\\(f = \\frac{1}{T} \\) frequency (頻率, in Hertz)</div>
                    <div>\\(v \\) propagation velocity (傳播速度, in m/s)</div>
                    <div>\\(\\lambda \\) wavelength (波長, in meters)</div>
                    <div>\\(k \\) wave number (波數)</div>
                    <div>\\(\\omega \\) angular frequency (角頻率)</div>
                </div>
                <h3>Formulas</h3>
                <p>行進波的通用公式：</p>
                $$ y(x,t)=A \\sin \\Big[ \\frac{2\\pi}{\\lambda} (x \\pm v t) \\Big] $$
                <p>透過變數代換：</p>
                $$\\begin{align*}
                k &= \\frac{2\\pi}{\\lambda} \\\\
                \\omega &= 2\\pi f = \\frac{2\\pi}{T}
                \\end{align*}$$
                <p>我們可以將公式轉換為更簡潔的形式：</p>
                $$ y(x,t) = A \\sin(kx \\pm \\omega t) $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：波動基礎</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/ntxUHuC1Wmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter1-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 「波數」(Wave Number) \\(k\\) 的定義是什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) \\(k = 2\\pi \\lambda\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) \\(k = \\frac{2\\pi}{\\lambda}\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) \\(k = \\frac{\\lambda}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 「角頻率」(Angular Frequency) \\(\\omega\\) 的正確公式是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\omega = 2\\pi f\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\omega = \\frac{2\\pi}{f}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\omega = \\frac{f}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 公式 \\(y(x,t) = A \\sin(kx - \\omega t)\\) 描述的波是往哪個方向傳播？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 正 x 方向</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 負 x 方向</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-1">提交答案</button>
                    <p id="quiz-result-1" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-1">
                    <div class="flashcard" id="flashcard-1"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-1"></div>
                        <div class="card-face card-back" id="flashcard-back-1"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-1">上一張</button>
                        <button id="next-card-1">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-1');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-1');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'B') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(k\\)", back: "Wave Number (波數)<br> $$\\large k = \\frac{2\\pi}{\\lambda}$$" },
                { front: "\\(\\omega\\)", back: "Angular Frequency (角頻率)<br> $$\\large \\omega = 2\\pi f$$" },
                { front: "\\(A\\)", back: "Amplitude (振幅)" },
                { front: "\\(T\\)", back: "Period (週期)<br> $$\\large T = 1/f$$" },
                { front: "\\(f\\)", back: "Frequency (頻率)<br> $$\\large f = 1/T$$" }
            ];
            initFlashcards('1', flashcards);
        }
    },
    
    // --- 第二章的 HTML 內容與邏輯 ---
    "2": {
        html: `
            <h1 class="chapter-title">第二章：能量與動量 (Energy & Momentum)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(u_E\\) 電場能量密度</div>
                    <div>\\(u_B\\) 磁場能量密度</div>
                    <div>\\(\\vec{S}\\) 坡印廷向量 (Poynting Vector)</div>
                    <div>\\(I\\) 光強度 (Intensity)</div>
                    <div>\\(p\\) 動量 (Momentum)</div>
                    <div>\\(P_{rad}\\) 光壓 (Radiation Pressure)</div>
                </div>
                <h3>Formulas</h3>
                <p>電磁波的總能量密度 \\(u\\) 是電場與磁場能量密度的總和：</p>
                $$ u = u_E + u_B = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2 $$
                <p>坡印廷向量 \\(\\vec{S}\\) 描述了能量流的方向與大小（單位面積的功率）：</p>
                $$ \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}) $$
                <p>光強度 \\(I\\) 是坡印廷向量大小的時間平均值：</p>
                $$ I = \\langle S \\rangle = \\frac{1}{2}c\\epsilon_0 E_{max}^2 $$
                <p>光壓 \\(P_{rad}\\) (完美吸收表面)：</p>
                $$ P_{rad} = \\frac{I}{c} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：坡印廷向量 (Poynting Vector)</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Hd29jEaGERk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter2-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一個物理量描述了電磁波的「能量流動方向」與「單位面積的功率」？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 坡印廷向量 \\(\\vec{S}\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 電場能量密度 \\(u_E\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 光強度 \\(I\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 坡印廷向量 \\(\\vec{S}\\) 的正確定義是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\vec{S} = \\mu_0 (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\vec{S} = \\frac{1}{\\epsilon_0} (\\vec{E} \\cdot \\vec{B})\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 光強度 \\(I\\) 被定義為坡印廷向量大小的...</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 瞬間最大值</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 時間平均值</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 空間最小值</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-2">提交答案</button>
                    <p id="quiz-result-2" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-2">
                    <div class="flashcard" id="flashcard-2"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-2"></div>
                        <div class="card-face card-back" id="flashcard-back-2"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-2">上一張</button>
                        <button id="next-card-2">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-2');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-2');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(\\vec{S}\\)", back: "坡印廷向量 (Poynting Vector)<br> 描述能量流" },
                { front: "\\(\\vec{S} = ?\\)", back: "$$\\large \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$$" },
                { front: "\\(I\\)", back: "光強度 (Intensity)<br> \\(I = \\langle S \\rangle\\)" },
                { front: "\\(u_E\\)", back: "電場能量密度<br> $$\\large u_E = \\frac{1}{2}\\epsilon_0 E^2$$" },
                { front: "\\(P_{rad}\\) (吸收)", back: "光壓 (Radiation Pressure)<br> $$\\large P_{rad} = \\frac{I}{c}$$" }
            ];
            initFlashcards('2', flashcards);
        }
    },
    
    // --- 第三章的 HTML 內容與邏輯 ---
    "3": {
        html: `
            <h1 class="chapter-title">第三章：電磁波 (Maxwell's Equations)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：馬克士威方程式</h2>
                <p>馬克士威方程式是四條統整電磁學的基礎方程式。在真空中（沒有電荷 \\(\\rho\\) 和電流 \\(\\vec{J}\\)），它們的形式如下：</p>
                <p><strong>1. 高斯定律 (Gauss's Law):</strong></p>
                $$ \\nabla \cdot \\vec{E} = 0 $$
                <p><strong>2. 磁高斯定律 (Gauss's Law for Magnetism):</strong></p>
                $$ \\nabla \cdot \\vec{B} = 0 $$
                <p><strong>3. 法拉第定律 (Faraday's Law):</strong></p>
                $$ \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} $$
                <p><strong>4. 安培-馬克士威定律 (Ampère-Maxwell Law):</strong></p>
                $$ \\nabla \\times \\vec{B} = \\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t} $$
                <p style="margin-top: 20px;">第 4 條中的 \\(\\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}\\) 項稱為「位移電流」，這是馬克士威的關鍵補充，它預測了變動的電場可以產生磁場。</p>
                <p>從這些方程式可以推導出電磁波的波動方程式：</p>
                $$ \\nabla^2 \\vec{E} = \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} $$
                <p>並預測了波速 \\(c\\)，其值等於光速：</p>
                $$ c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：什麼是電磁波？</h2>
                <p>本影片 (Physics Made Easy) 清楚地解釋了振盪的電荷如何產生電磁波。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/hk63uUhkZH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter3-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 馬克士威在哪一條定律中加入了「位移電流」項，從而預測了電磁波的存在？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 高斯定律</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 法拉第定律</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 安培定律 (安培-馬克士威定律)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 根據馬克士威方程式，光在真空中的速度 \\(c\\) 等於？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(1 / \\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\mu_0 / \\epsilon_0\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 法拉第定律 (\\(\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}\\)) 描述了什麼現象？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 變動的磁場會產生電場</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 變動的電場會產生磁場</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 磁場沒有磁單極</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-3">提交答案</button>
                    <p id="quiz-result-3" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-3">
                    <div class="flashcard" id="flashcard-3"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-3"></div>
                        <div class="card-face card-back" id="flashcard-back-3"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-3">上一張</button>
                        <button id="next-card-3">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-3');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-3');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'C') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "馬克士威方程式", back: "統整電磁學的四條方程式，<br>預測了光是電磁波。" },
                { front: "位移電流", back: "變動的電場等效於電流，<br>也能產生磁場。" },
                { front: "法拉第定律", back: "變動的磁場<br>會產生電場。" },
                { front: "真空中的光速 \\(c\\)", back: "$$\\large c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$$" }
            ];
            initFlashcards('3', flashcards);
        }
    },
    
    // --- 第四章的 HTML 內容與邏輯 ---
    "4": {
        html: `
            <h1 class="chapter-title">第四章：波的疊加 (Superposition)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：疊加與干涉</h2>
                
                <p><strong>1. 疊加原理 (Superposition Principle):</strong></p>
                <p>當兩個（或多個）波在空間中相遇時，總波函數 \\(\\psi\\) 是各個獨立波函數 \\(\\psi_1, \\psi_2, ...\\) 的向量和。</p>
                $$ \\psi = \\psi_1 + \\psi_2 + ... $$

                <p style="margin-top: 20px;"><strong>2. 干涉 (Interference):</strong></p>
                <p>當兩個同調光源（相同頻率、恆定相位差）發生疊加時，會產生干涉現象。</p>
                
                <p><strong>建設性干涉 (Constructive):</strong> (波峰遇波峰)</p>
                <p>相位差為 \\(2\\pi\\) 的整數倍 (\\(0, 2\\pi, 4\\pi, ...\\))。</p>
                
                <p><strong>破壞性干涉 (Destructive):</strong> (波峰遇波谷)</p>
                <p>相位差為 \\(\\pi\\) 的奇數倍 (\\(\pi, 3\\pi, 5\\pi, ...\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 楊氏雙狹縫 (Young's Double Slit):</strong></p>
                <p>對於狹縫間距為 \\(d\\)，光程差 \\(\\Delta L = d \\sin \\theta\\)。</p>
                
                <p><strong>亮紋 (建設性) 條件:</strong></p>
                $$ d \\sin \\theta = m \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$

                <p><strong>暗紋 (破壞性) 條件:</strong></p>
                $$ d \\sin \\theta = (m + \\frac{1}{2}) \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：波的疊加原理</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/I6LplR1GsUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter4-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 當兩個波相遇時，總擾動是各個波擾動的向量和。這個原理稱為什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 疊加原理 (Superposition Principle)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 偏振原理 (Polarization Principle)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 馬克士威原理 (Maxwell's Principle)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 在楊氏雙狹縫實驗中，亮紋（建設性干涉）的條件是什麼？ (\\(d\\) = 狹縫間距, \\(m\\) = 整數)</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(d \\sin \\theta = m \\lambda\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(d \\sin \\theta = (m + \\frac{1}{2}) \\lambda\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(d \\cos \\theta = m \\lambda\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 當兩個波的相位差為 \\(\\pi\\)（或 \\(3\\pi, 5\\pi ...\\)）時，會發生什麼干涉？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 建設性干涉</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 破壞性干涉</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 完全不干涉</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-4">提交答案</button>
                    <p id="quiz-result-4" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-4">
                    <div class="flashcard" id="flashcard-4"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-4"></div>
                        <div class="card-face card-back" id="flashcard-back-4"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-4">上一張</button>
                        <button id="next-card-4">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-4');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-4');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "疊加原理", back: "總波函數是<br>各個波函數的向量和。" },
                { front: "干涉 (Interference)", back: "兩個同調波疊加時<br>產生的現象。" },
                { front: "建設性干涉", back: "波峰遇波峰。<br>相位差為 \\(2m\\pi\\)。" },
                { front: "破壞性干涉", back: "波峰遇波谷。<br>相位差為 \\((2m+1)\\pi\\)。" },
                { front: "雙狹縫亮紋", back: "$$\\large d \\sin \\theta = m \\lambda$$" },
                { front: "雙狹縫暗紋", back: "$$\\large d \\sin \\theta = (m+\\frac{1}{2}) \\lambda$$" }
            ];
            initFlashcards('4', flashcards);
        }
    },
    
    // --- 第五章的 HTML 內容與邏輯 ---
    "5": {
        html: `
            <h1 class="chapter-title">第五章：偏振 (Polarization)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：偏振與定律</h2>
                
                <p><strong>1. 偏振 (Polarization):</strong></p>
                <p>偏振是**橫波**（例如光波）特有的現象。它描述的是波的振盪方向（對光而言，是電場 \\(\\vec{E}\\) 的振盪方向）被限制在特定平面內。</p>
                <ul style="margin-top: 10px;">
                    <li><strong>線性偏振 (Linear):</strong> 電場在單一固定平面上振盪。</li>
                    <li><strong>非偏振 (Unpolarized):</strong> 電場在所有方向上隨機振盪（例如太陽光）。</li>
                </ul>

                <p style="margin-top: 20px;"><strong>2. 馬呂斯定律 (Malus's Law):</strong></p>
                <p>當一束強度為 \\(I_0\\) 的線性偏振光，通過一個偏振軸與其夾角為 \\(\\theta\\) 的偏振片（檢偏器）時，穿透後的光強度 \\(I\\) 為：</p>
                $$ I = I_0 \\cos^2 \\theta $$
                <p><em>推論：</em> 當非偏振光通過第一個偏振片時，強度會減半 (\\(I = I_0 / 2\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 布魯斯特角 (Brewster's Angle):</strong></p>
                <p>當非偏振光以特定角度 \\(\\theta_B\\)（布魯斯特角）入射到介面（例如空氣到玻璃）時，**反射光**將會是完全偏振的（偏振方向平行於介面）。</p>
                $$ \\tan \\theta_B = \\frac{n_2}{n_1} $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：光的偏振</h2>
                <p>本影片 (AAPT) 實際展示了偏振片如何運作。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/FzJBjpqWrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter5-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一種類型的波才能顯示出「偏振」現象？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 橫波 (Transverse waves)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 縱波 (Longitudinal waves)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 兩種都可以</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 一束非偏振光（強度 \\(I_0\\)）通過一個理想偏振片後，強度會變為多少？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(I_0\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) 0</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 根據馬呂斯定律 \\(I = I_0 \\cos^2 \\theta\\)，一束偏振光（強度 \\(I_0\\)）通過一個與其偏振軸夾角 \\(\\theta = 90^\\circ\\) 的檢偏器，透射光強度 \\(I\\) 為何？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) \\(I_0\\) (強度不變)</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 0 (完全阻擋)</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-5">提交答案</button>
                    <p id="quiz-result-5" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-5">
                    <div class="flashcard" id="flashcard-5"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-5"></div>
                        <div class="card-face card-back" id="flashcard-back-5"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-5">上一張</button>
                        <button id="next-card-5">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-5');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-5');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'C') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "偏振 (Polarization)", back: "光波的電場振盪方向<br>被限制在特定平面的現象。" },
                { front: "馬呂斯定律 (Malus's Law)", back: "描述偏振光通過檢偏器後的強度。<br> $$\\large I = I_0 \\cos^2 \\theta$$" },
                { front: "布魯斯特角 (Brewster's Angle)", back: "反射光為完全偏振時的入射角。<br> $$\\large \\tan\\theta_B = \\frac{n_2}{n_1}$$" },
                { front: "橫波 (Transverse Wave)", back: "波的振盪方向<br>垂直於傳播方向。" }
            ];
            initFlashcards('5', flashcards);
        }
    },
    
    // --- (*** 新增 ***) 附錄的 HTML 內容與邏輯 ---
    "appendix": {
        html: `
            <h1 class="chapter-title">附錄：二色向性 (Dichroism)</h1>
            <section class="learning-module">
                <h2>🎓 <strong>二色向性 (Dichroism) 的基本原理</strong></h2>
                <p><strong>二向色性是指某些晶體或物質對於不同偏振方向的光，會表現出選擇性吸收的物理現象。</strong></p>
                <p>簡單來說，當一束非偏振光（含有各種隨機方向的振動電場）通過具有二色性的材料時，會發生以下情況：</p>
                <ol>
                    <li><p><strong>選擇性吸收 (Selective Absorption)</strong>：該材料會強烈吸收某個特定偏振方向的光（我們稱之為<u>吸收軸</u>），而對於與其垂直的偏振方向的光，則幾乎不吸收，讓其順利通過（我們稱之為<u>穿透軸</u>或 <u>偏振軸</u>）。</p></li>
                    <li><p><strong>產生偏振光 (Polarization)</strong>：因此，原本非偏振的光在穿過這種材料後，只剩下與「穿透軸」方向一致的偏振光，其餘方向的偏振光都被吸收掉了。最終，出射的光就變成了線偏振光。</p></li>
                </ol>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SyY7cXjRgg.png" alt="Dichroism diagram 1"></p>
                <p><em>電氣石都是化學成分各不相同的矽酸硼化物</em></p>
                
                <p><strong>形象化比喻：</strong></p>
                <p>您可以將具有二色性的材料想像成一個「柵欄」。</p>
                <ul>
                    <li><strong>非偏振光</strong>：就像一群人從四面八方隨意跑向柵欄。</li>
                    <li><strong>二色性材料（柵欄）</strong>：只有身體側向與柵欄縫隙平行的人（特定偏振方向的光）才能通過。</li>
                    <li><strong>被吸收的光</strong>：身體方向與柵欄垂直的人（其他偏振方向的光）會被擋住。</li>
                    <li><strong>穿透的偏振光</strong>：最終通過柵欄的人群，都只能以同一個方向前進。</li>
                </ul>
                <p>這個現象的物理本質，與材料的分子或晶格結構有關。在這些材料中，其分子排列具有明顯的方向性，使得電子只能在特定方向上有效地與光的電場相互作用並吸收其能量。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rytttQo0ll.png" alt="Dichroism diagram 2"></p>
                <p><strong>Y方向：</strong>電場y分量沿導線長軸驅動傳導電子産生電流。電子和晶格原子碰撞，傳遞能量導線變熱。沿著y軸加速的電子向前向後都輻射電磁波，向前輻射的電磁波與入射波相抵消，從而y分量透過很少或者根本不透過。<br>
                <strong>Z方向：</strong>電子不能移動很遠，z分量不受影響。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>二色向性在偏振片 (Polarizer) 的應用</strong></h2>
                <p>二色性是製造現代最常見的<strong>吸收型偏振片（Absorptive Polarizer）</strong>的核心原理。這種類型的偏振片，也常被稱為「寶麗來（Polaroid）偏振片」，其發明大大降低了偏振光的生產成本，使其得以廣泛應用。</p>
                <p><strong>其結構與運作方式如下：</strong></p>
                <ol>
                    <li><p><strong>材料選擇</strong>：最經典的材料是聚乙烯醇（Polyvinyl Alcohol, PVA）薄膜。</p></li>
                    <li><p><strong>拉伸定向</strong>：首先，將PVA薄膜加熱並沿一個方向強力拉伸。這個過程會使得原本隨機排列的長鏈聚合物分子，沿著拉伸方向整齊排列。</p></li>
                    <li><p><strong>染色（摻雜）</strong>：接著，將拉伸後的薄膜浸泡在富含碘（Iodine）的溶液中。碘分子會附著在整齊排列的PVA長鏈上，形成導電的碘鏈。</p></li>
                    <li><p><strong>形成「吸收軸」</strong>：這些沿著PVA分子鏈排列的碘鏈，就像一根根微小的導線。當入射光的電場方向與這些碘鏈平行時，會驅動碘鏈中的電子產生電流，光的能量因此被吸收並轉化為熱能。這個方向就成了偏振片的<strong>吸收軸</strong>。</p></li>
                    <li><p><strong>形成「穿透軸」</strong>：當入射光的電場方向與碘鏈垂直時，電子無法在短軸方向上有效移動，因此光的能量不會被吸收，光線便能順利穿透。這個方向就是偏振片的<strong>穿透軸</strong>。</p></li>
                </ol>
                <p><strong>結論：</strong></p>
                <p>一片avidin的偏振片，就是利用其內部分子結構的有序排列，創造出一個特定的「吸收軸」。當自然光通過時，與吸收軸平行的電場分量被吸收，而與其垂直的電場分量則被允許通過，從而將非偏振的自然光轉變為線偏振光。</p>
            </section>
            
            <section class="learning-module">
                <h2>相關影片</h2>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/cNJPzpMJfxI" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=540074514&bvid=BV1vi4y1b7a3&cid=172339009&p=1" frameborder="no" allowfullscreen="true"></iframe>
                </div>
            </section>

            <section class="learning-module">
                <h2><strong>二色性偏振片的應用實例</strong></h2>
                <ul>
                    <li><strong>LCD 顯示器</strong>：液晶顯示器的每個像素前後都各有一片偏振片，通過控制液晶分子的旋轉來決定光的通過或阻擋，從而顯示圖像。</li>
                    <li><strong>太陽眼鏡</strong>：偏光太陽眼鏡可以過濾掉來自水面、路面等水平面的反射眩光（這些眩光主要是水平偏振光），讓視野更清晰舒適。</li>
                    <li><strong>攝影濾鏡</strong>：攝影師使用偏光鏡（CPL鏡）來消除反光、增加色彩飽和度，例如讓天空更藍、植物更翠綠。</li>
                    <li><strong>科學實驗</strong>：在光學實驗室中，用於產生和分析偏振光，研究材料的光学特性。</li>
                </ul>
                <p>總而言之，二色性是將特定方向光線「吸收掉」的原理，而偏振片則是利用此原理製造出來、用以產生線偏振光的關鍵光學元件。</p>
            </section>
        `,
        // --- 附錄沒有測驗或字卡，所以 initLogic 是空的 ---
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "appendix-birefringence": {
        html: `
            <h1 class="chapter-title">附錄：8.4 雙折射 (Birefringence)</h1>
            <section class="learning-module">
                <h2>什麼是雙折射？</h2>
                <p>當單色光在各向異性晶體(如方解石 CaCO₃)的界面折射時，通常會產生兩束折射光。這種現象被稱為雙折射。</p>
                <img src="https://hackmd.io/_uploads/S17tzEoAle.png" alt="Calcite double refraction">
                <div class="video-container"><iframe src="https://www.youtube.com/embed/wNXusZJAK7s" frameborder="0" allowfullscreen></iframe></div>
                <p>這種現象的根源在於晶體的<strong>各向異性(Anisotropy)</strong>，意味著晶體的物理性質（例如折射率）會隨著方向不同而改變。</p>
                <img src="https://hackmd.io/_uploads/SJZC_u2Cex.jpg" alt="Isotropic vs Anisotropic">
            </section>
            <section class="learning-module">
                <h2>晶體的光軸 (Optical Axis)</h2>
                <p><strong>光軸定義:</strong> 當光在晶體內沿某個特殊方向傳播時不發生雙折射，該方向稱爲晶體的光軸。</p>
                <ul>
                    <li><strong>單軸晶體</strong>： 只有一個光軸的晶體(如方解石、石英)</li>
                    <li><strong>雙軸晶體</strong>： 有兩個光軸的晶體(如:雲母)</li>
                </ul>
                <img src="https://hackmd.io/_uploads/BkORZYs0xl.png" alt="O-ray and E-ray">
                <p>這兩束光線被賦予了特定的名稱：<strong>尋常光 o光 (ordinary ray)</strong> 與 <strong>非尋常光 e光 (extra-ordinary ray)</strong>。o光與e光的偏振振動方向總是相互垂直。</p>
            </section>
            <section class="learning-module">
                <h2>雙折射偏光片</h2>
                <p>利用雙折射效應製作偏光片是常見的高效能偏振光學元件設計...以下說明幾種主要設計：</p>
                <h4>1. Glan-Thompson 偏光鏡</h4>
                <p>由兩塊方解石棱鏡組成...尋常光 (o-ray) 被反射和吸收，非常光 (e-ray) 則被傳輸。</p>
                <img src="https://hackmd.io/_uploads/S1nWglCAgl.png" alt="Glan-Thompson">
                <h4>2. Glan-Taylor 偏光片</h4>
                <p>尋常偏振分量 (o-ray) 發生全內反射 (TIR) 從側埠射出，非常偏振分量 (e-ray) 則穿透。</p>
                <img src="https://hackmd.io/_uploads/H1FgZg00ex.png" alt="Glan-Taylor">
                <h4>3. Wollaston 棱鏡</h4>
                <p>一種偏振分束器。它由兩塊光軸彼此正交的棱鏡組成...將非偏振入射光分成兩個正交偏振的輸出光束。</p>
                <img src="https://hackmd.io/_uploads/HJwuZeCAxx.png" alt="Wollaston Prism">
                <h4>4. Nicol 棱鏡</h4>
                <p>由一塊方解石菱面體斜切後，用加拿大樹膠膠合而成。o-ray 發生全內反射被吸收，e-ray 穿透射出。</p>
                <img src="https://hackmd.io/_uploads/B1EDzOVJ-g.png" alt="Nicol Prism">
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-scattering": {
        html: `
            <h1 class="chapter-title">附錄：8.5 散射與偏振</h1>
            <section class="learning-module">
                <h2>8.5.1 現象定義：光的散射使天空偏振</h2>
                <p><strong>定義</strong>：當太陽光穿過大氣層時，空氣分子會使來自太陽的光向各方向散射，其中藍光（高頻成分）散射最強，使天空呈現藍色，且部分天空光具有偏振性。</p>
                <img src="https://hackmd.io/_uploads/By-Yt_EJbx.png" alt="Scattering">
            </section>
            <section class="learning-module">
                <h2>8.5.2 原理說明</h2>
                <p><strong>散射偏振原理</strong>：在觀察方向與初始入射光垂直時，散射光將是完全線性偏振。</p>
                <img src="https://hackmd.io/_uploads/HkYoKuEyWg.png" alt="Scattering mechanism">
                <div class="video-container"><iframe src="https://www.youtube.com/embed/TP5JOfrPguQ" frameborder="0" allowfullscreen></iframe></div>
            </section>
            <section class="learning-module">
                <h2>8.5.3 公式整理</h2>
                <p><strong>偏振角公式 (布魯斯特定律):</strong></p>
                $$ \\tan \\theta_p = \\frac{n_t}{n_i} $$
                <p><strong>反射光反偏振公式 (Fresnel 方程):</strong></p>
                <p>垂直入射面： $$ R_{\\perp} = \\left( \\frac{\\sin(\\theta_i - \\theta_t)}{\\sin(\\theta_i + \\theta_t)} \\right)^2 $$</p>
                <p>平行入射面： $$ R_{\\parallel} = \\left( \\frac{\\tan(\\theta_i - \\theta_t)}{\\tan(\\theta_i + \\theta_t)} \\right)^2 $$</p>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-reflection": {
        html: `
            <h1 class="chapter-title">附錄：8.6 反射產生的偏振</h1>
            <section class="learning-module">
                <h2>一、現象定義</h2>
                <p>反射偏振是指未偏振或部分偏振的光投射到介質表面時，反射光和透射光會呈現不同的偏振狀態。...以及多種日常「眩光」現象。</p>
            </section>
            <section class="learning-module">
                <h2>二、物理原理 (布魯斯特角)</h2>
                <p>當入射角等於特定的「偏振角」（Brewster’s Angle）時，反射光完全呈現偏振狀態...偏振角由幾何關係決定：入射波和折射波夾角為90°時，反射光消失...</p>
                <img src="https://hackmd.io/_uploads/rkSTlYEJ-e.png" alt="Brewster's Angle">
            </section>
            <section class="learning-module">
                <h2>8.6.1 費涅耳方程式的應用 (Fresnel Equations)</h2>
                <p>平行偏振： $$ R_\\parallel = \\tan^2(\\theta_i - \\theta_t) / \\tan^2(\\theta_i + \\theta_t) $$</p>
                <p>垂直偏振： $$ R_\\perp = \\sin^2(\\theta_i - \\theta_t) / \\sin^2(\\theta_i + \\theta_t) $$</p>
                <p>偏振角（Brewster角）定義為 \\( \\theta_i + \\theta_t = 90^\\circ \\)，此時平行分量全被折射，反射光完全偏振。</p>
                <img src="https://hackmd.io/_uploads/S1rqXYEyWg.png" alt="Reflection vs Angle">
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-retarders": {
        html: `
            <h1 class="chapter-title">附錄：8.7 延遲片 (Retarders)</h1>
            <section class="learning-module">
                <h2>8.7.1 遲滯器概述與基本原理</h2>
                <p><strong>定義：</strong> 遲滯器(或稱 波片)是一類光學元件，**用於改變入射波的偏振狀態**。...o光和e光從波片出射時會產生路徑差，進而造成相位延遲。</p>
                <img src="https://hackmd.io/_uploads/ByV6tYVybg.png" alt="Retardation Diagram">
                <p><strong>核心公式 (相位差)：</strong> $$ \\Delta\\omega = \\frac{2\\pi}{\\lambda_0} d|n_o - n_e| $$</p>
            </section>
            <section class="learning-module">
                <h2>8.7.2 波板與菱形 (Wave Plates and Rhombs)</h2>
                <p><strong>1. 全波板 (Full-Wave Plate):</strong> 相對遲滯 \\(\\Delta\\omega = 2\\pi\\)。</p>
                <p><strong>2. 半波板 (Half-Wave Plate):</strong> 相對相位差 \\(\\Delta\\omega = \\pi\\) (180°)。可將線偏振光的偏振面旋轉 \\(2\\theta\\) 角。</p>
                <p><strong>3. 四分之一波板 (Quarter-Wave Plate):</strong> 相對相位移 \\(\\Delta\\omega = \\pi/2\\) (90°)。可將 45° 的線偏振光轉換為圓偏振光。</p>
                <img src="https://hackmd.io/_uploads/BkCgmcE1-l.png" alt="Quarter-wave plate">
                <p><strong>4. 菲涅耳菱形 (Fresnel Rhomb):</strong> 利用兩次全內反射 (TIR) 產生 90° 相位移，是一種消色差遲滯器。</p>
                <img src="https://hackmd.io/_uploads/By2c85VJbl.png" alt="Fresnel Rhomb">
            </section>
            <section class="learning-module">
                <h2>8.7.4 補償器 (Compensators)</h2>
                <p><strong>1. 巴比內補償器 (Babinet Compensator):</strong> 由兩個光軸垂直的楔形組成，可連續改變相對相位差。</p>
                <img src="https://hackmd.io/_uploads/B1wTL94J-l.png" alt="Babinet Compensator">
                <p><strong>2. 索萊伊補償器 (Soleil Compensator):</strong> 改良版，可產生均勻的遲滯量且無光束偏折。</p>
                <img src="https://hackmd.io/_uploads/rkuJP5VkZx.png" alt="Soleil Compensator">
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-circular": {
        html: `
            <h1 class="chapter-title">附錄：8.8 圓偏振器</h1>
            <section class="learning-module">
                <h2>定義</h2>
                <p>圓偏振器是利用線偏振器與四分之一波片 (quarter-wave plate) 組成，可以產生或分析圓偏振光。</p>
                <h2>原理</h2>
                <p>線偏振光經 45° 方向的四分之一波片後，將變成圓偏振光。</p>
            </section>
            <section class="learning-module">
                <h2>8.9 多色光的偏振</h2>
                <p><strong>8.9.2 干涉色 (Interference Colors):</strong> 當多色光通過雙折射物質...導致各色波干涉產生彩色現象。</p>
                <p>相位延遲公式： $$ \\Delta\\varphi = \\frac{2\\pi d}{\\lambda_0}(n_o - n_e) $$</p>
            </section>
            <section class="learning-module">
                <h2>8.10 光學活性 (Optical Activity)</h2>
                <p><strong>定義:</strong> 某些物質可使入射線偏振光的振動面連續旋轉的現象。</p>
                <p><strong>原理:</strong> 活性物質具有圓偏振雙折射性，右/左旋圓偏振成分以不同速度傳播。</p>
                <img src="https://hackmd.io/_uploads/HkGAJ6V1-x.png" alt="Optical Activity">
                <p><strong>公式:</strong> 線偏振振動面旋轉角度： $$ \\beta = \\frac{\\pi d}{\\lambda_0}(n_r - n_l) $$</p>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-math": {
        html: `
            <h1 class="chapter-title">附錄：8.13 極化的數學描述</h1>
            <section class="learning-module">
                <h2>8.13.1 Stokes參數</h2>
                <p><strong>定義:</strong> 用來描述光的極化狀態的四個量 (\\(S_0, S_1, S_2, S_3\\))，可表示自然光、完全或部分極化光。</p>
                <p><strong>公式 (以電場分量計算):</strong></p>
                $$ S_0 = \\langle E_{0x}^2 \\rangle + \\langle E_{0y}^2 \\rangle $$
                $$ S_1 = \\langle E_{0x}^2 \\rangle - \\langle E_{0y}^2 \\rangle $$
                $$ S_2 = 2\\langle E_{0x}E_{0y}\\cos{\\epsilon} \\rangle $$
                $$ S_3 = 2\\langle E_{0x}E_{0y}\\sin{\\epsilon} \\rangle $$
                <p><strong>極化度 (P):</strong> $$ P = \\frac{\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0} $$</p>
            </section>
            <section class="learning-module">
                <h2>8.13.2 Jones向量</h2>
                <p><strong>定義:</strong> 專為完全極化且相干的光設計，以光的電場向量直接描述。</p>
                <p><strong>Jones向量與Stokes參數對照表：</strong></p>
                <table style="width:100%; text-align:center;">
                    <thead>
                        <tr><th>極化態</th><th>Stokes向量</th><th>Jones向量</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>水平 (P-state)</td><td>(1, 1, 0, 0)</td><td>$$\\begin{pmatrix}1\\\\0\\end{pmatrix}$$</td></tr>
                        <tr><td>垂直 (P-state)</td><td>(1, -1, 0, 0)</td><td>$$\\begin{pmatrix}0\\\\1\\end{pmatrix}$$</td></tr>
                        <tr><td>45度 (P-state)</td><td>(1, 0, 1, 0)</td><td>$$\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\1\\end{pmatrix}$$</td></tr>
                        <tr><td>-45度 (P-state)</td><td>(1, 0, -1, 0)</td><td>$$\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\-1\\end{pmatrix}$$</td></tr>
                        <tr><td>右旋圓極化 (R)</td><td>(1, 0, 0, 1)</td><td>$$\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\-i\\end{pmatrix}$$</td></tr>
                        <tr><td>左旋圓極化 (L)</td><td>(1, 0, 0, -1)</td><td>$$\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\i\\end{pmatrix}$$</td></tr>
                    </tbody>
                </table>
            </section>
            <section class="learning-module">
                <h2>8.13.3 Jones與Mueller矩陣</h2>
                <p><strong>定義:</strong> Jones 矩陣 (2x2) 適用於相干、完全極化光；Mueller 矩陣 (4x4) 可處理部分極化或非極化光。</p>
                <p><strong>Jones:</strong> $$ \\mathbf{E}_{out} = A \\mathbf{E}_{in} $$</p>
                <p><strong>Mueller:</strong> $$ \\mathbf{S}_{out} = M \\mathbf{S}_{in} $$</p>
                <img src="https://hackmd.io/_uploads/r12NO5Nk-x.png" alt="Mueller Matrix Example">
            </section>
        `,
        initLogic: () => { }
    },
    "problems": {
        html: `
            <h1 class="chapter-title">附錄：課本習題 (Ch 3, 4, 7, 8)</h1>
            
            <section class="learning-module">
                <h2><center>第 3 章 練習題</center></h2>
                
                <h3>3.1</h3>
                <p>考慮一個在真空中傳播的平面電磁波，其表示式為（使用 SI 單位制）：<br>
                \\(E_x = 0\\)<br>
                \\(E_y = 4\\cos[2\\pi \\times 10^{15}(t - x/c) + \\pi/2]\\)<br>
                \\(E_z = 0\\)</p>
                <p>(a) 請求出此電磁波的頻率、波長、運動方向、振幅、初始相位角以及偏振方向。<br>
                (b) 請寫出其磁通量密度的表示式。</p>
                <img src="https://hackmd.io/_uploads/BkkGEUfybx.png" alt="Problem 3.1 Solution">
            </section>

            <section class="learning-module">
                <h3>3.25</h3>
                <p>一個線偏振的簡諧平面波，標量振幅為10 V/m，沿著xy平面內一條與x軸成45°角的直線傳播，其振動平面是xy平面。假定k和k都是正數，請寫出描述這個波的向量表示式。設波在真空中，計算通量密度。</p>
                <img src="https://hackmd.io/_uploads/B1QKVLfJ-x.png" alt="Problem 3.25 Solution">
            </section>

            <section class="learning-module">
                <h3>3.26</h3>
                <p>從雷射光發射出的紫外線脈衝，每個脈衝持續2.00ns。雷射光束的直徑為2.5 mm。已知每個脈衝攜帶的能量為6.0 J。<br>
                (a)定出每個波列在空間的長度，<br>
                (b)求這樣的脈衝中單位體積的平均能量。</p>
                <img src="https://hackmd.io/_uploads/r1FsNUz1Wl.png" alt="Problem 3.26 Solution">
            </section>

            <section class="learning-module">
                <h3>3.27</h3>
                <p>一台雷射產生真空中的電磁輻射脈衝，每個脈衝持續時間為10⁻¹² 秒。若輻射通量密度為10²⁰ W/m²，求雷射光的電場的振幅。</p>
                <img src="https://hackmd.io/_uploads/SyITNIz1We.png" alt="Problem 3.27 Solution">
            </section>
            
            <section class="learning-module">
                <h3>3.28</h3>
                <p>一台 1.0 mW的雷射光束直徑為2mm。假設可以忽略光束的散開，計算在雷射光鄰近的能量密度。</p>
                <img src="https://hackmd.io/_uploads/HkHmBIMJ-e.png" alt="Problem 3.28 Solution">
            </section>

            <section class="learning-module">
                <h3>3.31</h3>
                <p>一個100W的黃光燈泡，假設可以忽略熱損耗並且準單色波長為550nm，那麼它每秒發射多少個光子？實際上在一盞普通的100W白熾燈中，只有總消耗功率的大約2.5%作為可見光發射出來。</p>
                <img src="https://hackmd.io/_uploads/BJjRBIGyZe.png" alt="Problem 3.31 Solution">
            </section>

            <section class="learning-module">
                <h3>3.32</h3>
                <p>一盞普通的3.0V 白熾閃光燈，電流為0.25A，將消耗的功率的大約1%轉變為光（\\(\\lambda=550nm\\)）。若光束近似為圓柱形，截面面積為10cm²，問：<br>
                (a)每秒發射多少個光子？<br>
                (b)光束的每一米長度上有多少個光子？<br>
                (c)離開閃光燈時光束的通量密度是多少？</p>
                <img src="https://hackmd.io/_uploads/Hkl-ILM1Wx.png" alt="Problem 3.32 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 4 章 練習題</center></h2>

                <h3>4.52</h3>
                <p>非偏振光在空氣中，與法線成 30.0°的角度，射到一片折射率為 1.60 的玻璃平滑表面上。求兩個振幅反射係數。</p>
                <img src="https://hackmd.io/_uploads/B1pHUIz1Zg.png" alt="Problem 4.52 Solution">
            </section>

            <section class="learning-module">
                <h3>4.53</h3>
                <p>仔細思考上一題，計算 R₁、R、T₁、T₁，以及淨透射比 T 和淨反射比 R。</p>
                <img src="https://hackmd.io/_uploads/Sy6v88z1-l.png" alt="Problem 4.53 Solution">
            </section>

            <section class="learning-module">
                <h3>4.54</h3>
                <p>已知 1000 W/m² 的非偏振光在空氣中射到空氣-玻璃界面，此界面 n = 3/2。若 E 場垂直於入射面的光的透射比為 0.80，那麼這時有多少光被反射？</p>
                <img src="https://hackmd.io/_uploads/BkvtUUzybg.png" alt="Problem 4.54 Solution">
            </section>

            <section class="learning-module">
                <h3>4.55</h3>
                <p>一束非偏振光，輻照度2000 W/m²，射到空氣-塑膠界面。已知此界面反射的光中，300 W/m²是電場E垂直於入射面偏振，200 W/m² 是電場E平行於入射面偏振。求穿過此界面的淨透射比。</p>
                <img src="https://hackmd.io/_uploads/SJzxPIzJbg.png" alt="Problem 4.55 Solution">
            </section>

            <section class="learning-module">
                <h3>4.57</h3>
                <p>輻照度 400 W/m² 的準單色光，沿法線方向射到人眼角膜（n = 1.376）上。若此人在水下（n = 1.33），求射入角膜的透射輻照度。</p>
                <img src="https://hackmd.io/_uploads/HJIfw8fyWe.png" alt="Problem 4.57 Solution">
            </section>

            <section class="learning-module">
                <h3>4.58</h3>
                <p>比較空氣-水（n = 4/3）界面和空氣-冕牌(crown)玻璃（n = 3/2）界面的振幅反射係數，二者都近乎正入射。反射輻照度與入射輻照度的比值是多少？</p>
                <img src="https://hackmd.io/_uploads/HkcND8GkZe.png" alt="Problem 4.58 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 7 章 練習題</center></h2>

                <h3>7.5</h3>
                <p>(a) 真空中 1 公尺間隔內有多少個波長為 500 nm 的光波？<br>
                (b) 如果在光路上插入 5 cm 厚的玻璃板（n = 1.5），此 1 公尺間隔內又有多少個波？<br>
                (c) 確定兩種情況的光程差（OPD）。<br>
                (d) 證明 \\(\\lambda/20\\) 相當於 (a) 與 (b) 的答案之差。</p>
                <img src="https://hackmd.io/_uploads/HkvuDIMJWe.png" alt="Problem 7.5 Solution">
            </section>

            <section class="learning-module">
                <h3>7.7</h3>
                <p>利用 (7.9)、(7.10)、(7.11) 三式證明，兩個波<br>
                \\(E₁ = E₀₁ \\sin [\\omega t – k(x + \\Delta x)]\\)<br>
                \\(E₂ = E₀₁ \\sin (\\omega t – kx)\\)<br>
                其合波為<br>
                \\(E = 2E₀₁ \\cos(k\\Delta x/2) \\sin(\\omega t – kx + k\\Delta x/2)\\)</p>
                <img src="https://hackmd.io/_uploads/rkUguIGJ-g.png" alt="Problem 7.7 Solution 1">
                <img src="https://hackmd.io/_uploads/ByY-dIGJWl.png" alt="Problem 7.7 Solution 2">
            </section>

            <section class="learning-module">
                <h3>7.9</h3>
                <p>利用複數表示法求合波 \\(E = E₁ + E₂\\)，其中<br>
                \\(E₁ = E₀ \\cos(kx + \\omega t)\\)，\\(E₂ = -E₀ \\cos(kx – \\omega t)\\)<br>
                請描述合波的性質。</p>
                <img src="https://hackmd.io/_uploads/SJ5muIfkbe.png" alt="Problem 7.9 Solution">
            </section>

            <section class="learning-module">
                <h3>7.10</h3>
                <p>函數 \\(E₁ = 3\\cos(\\alpha t)\\)、\\(E₂ = 4\\sin(\\alpha t)\\)。先證明 \\(E₂ = 4\\cos(\\alpha t – \\pi/2)\\)。再利用相量和參考題圖 P.7.10 證明<br>
                \\(E₃ = E₁ + E₂ = 5\\cos(\\alpha t – \\theta)\\)；求 \\(\\theta\\)。當 \\(E₁ = 0\\) 或 \\(E₂ = 0\\)，\\(\\theta\\) 等於多少？\\(E₃\\) 是領先還是落後於 \\(E₁\\)？請解釋。</p>
                <img src="https://hackmd.io/_uploads/Hk7H_8fyZx.png" alt="Problem 7.10 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 8 章 練習題</center></h2>
                
                <h3>8.1</h3>
                <p>兩個光波 \\(E_x = E_0\\cos(kz-\\omega t)\\) 和 \\(E_y = -E_0\\cos(kz-\\omega t)\\) 在空間中重疊。請證明其合成波為線偏振波，並求出它的振幅和傾斜角 \\(\\theta\\)。</p>
                <img src="https://hackmd.io/_uploads/B1l79IMkbl.png" alt="Problem 8.1 Solution">
            </section>

            <section class="learning-module">
                <h3>8.2</h3>
                <p>兩個使用 SI 單位制的光波 \\(E_z = 4\\sin(ky-\\omega t)\\) 和 \\(E_x = 3\\sin(ky-\\omega t)\\) 在空間中重疊。請求出合成波的偏振態。</p>
                <img src="https://hackmd.io/_uploads/Syj45UfJZe.png" alt="Problem 8.2 Solution">
            </section>

            <section class="learning-module">
                <h3>8.3</h3>
                <p>兩個使用 SI 單位制的光波 \\(E_x = 8\\sin(ky-\\omega t+\\pi/2)\\) 和 \\(E_z = 8\\sin(ky-\\omega t)\\)。請問哪個波領先？領先多少？它們的合成波是何種形式？其振幅為多少？</p>
                <img src="https://hackmd.io/_uploads/ryPL9UfyWl.png" alt="Problem 8.3 Solution">
            </section>

            <section class="learning-module">
                <h3>8.4</h3>
                <p>請完整描述下面每一個波的偏振態：<br>
                (a) \\(\\vec{E} = \\hat{i}E_0 \\cos(kz - \\omega t) - \\hat{j}E_0 \\cos(kz - \\omega t)\\)<br>
                (b) \\(\\vec{E} = \\hat{i}E_0 \\sin 2\\pi(z/\\lambda - \\nu t) - \\hat{j}E_0 \\sin 2\\pi(z/\\lambda - \\nu t)\\)<br>
                (c) \\(\\vec{E} = \\hat{i}E_0 \\sin(\\omega t - kz) + \\hat{j}E_0 \\sin(\\omega t - kz - \\pi/4)\\)<br>
                (d) \\(\\vec{E} = \\hat{i}E_0 \\cos(\\omega t - kz) + \\hat{j}E_0 \\cos(\\omega t - kz + \\pi/2)\\)</p>
                <img src="https://hackmd.io/_uploads/H17u5LG1Ze.png" alt="Problem 8.4 Solution">
            </section>

            <section class="learning-module">
                <h3>8.5</h3>
                <p>考慮由表示式 \\(\\vec{E}(z,t) = [\\hat{i} \\cos \\omega t + \\hat{j} \\cos(\\omega t - \\pi/2)]E_0 \\sin kz\\) 所描述的擾動。請問這是哪一種波與其主要特徵。</p>
                <img src="https://hackmd.io/_uploads/rJ0F98M1Zg.png" alt="Problem 8.5 Solution">
            </section>
            
            <section class="learning-module">
                <h3>8.7</h3>
                <p>S 態光波角頻率為 \\(\\omega\\)，振幅 \\(E_0\\)，沿 x 軸傳播，振動平面與 xy 平面成 25°角，當 \\(t = 0, x = 0\\) 時電場為零。寫出該波的表示式。</p>
                <img src="https://hackmd.io/_uploads/ryjaq8M1Zg.png" alt="Problem 8.7 Solution">
            </section>

            <section class="learning-module">
                <h3>8.8</h3>
                <p>P 態光波角頻率為 \\(\\omega\\)，振幅 \\(E_0\\)，在 xy 平面上沿 x 軸成 45°的方向傳播，振動面在 xy 平面上，當 \\(t = 0, y = 0, x = 0\\) 時電場為零。寫出該波的表示式。</p>
                <img src="https://hackmd.io/_uploads/HJr1iIMyZe.png" alt="Problem 8.8 Solution">
            </section>

            <section class="learning-module">
                <h3>8.9</h3>
                <p>R 態光波頻率為 \\(\\omega\\)，沿正 x 方向傳播。當 \\(t = 0, x = 0\\) 時 E 場指向負 z 軸。寫出表示式。</p>
                <img src="https://hackmd.io/_uploads/rJTeiIMJbg.png" alt="Problem 8.9 Solution">
            </section>

            <section class="learning-module">
                <h3>8.10</h3>
                <p>一束電場沿垂直方向的線偏振光正入射於理想線偏振片上，偏振片透光軸亦為垂直。若入射光輻照度為 200 W/m²，透過光的輻照度是多少？</p>
                <img src="https://hackmd.io/_uploads/H1Mmo8Gk-g.png" alt="Problem 8.10 Solution">
            </section>

            <section class="learning-module">
                <h3>8.11</h3>
                <p>一個普通鎢絲燈泡射到理想線偏振片的光強為 300 W/m²，問射出的輻照通量密度是多少？</p>
                <img src="https://hackmd.io/_uploads/rk3wiIG1bg.png" alt="Problem 8.11 Solution">
            </section>

            <section class="learning-module">
                <h3>8.20</h3>
                <p>輻照度為 1 的自然光正入射到 HN-32 偏振片上：<br>
                (a) 出射光是多少？<br>
                (b) 若又放一片相同偏振片，兩片透光軸成 45°，有多少光能透過？</p>
                <img src="https://hackmd.io/_uploads/SJlVYsIzkbx.png" alt="Problem 8.20 Solution">
            </section>

            <section class="learning-module">
                <h3>8.21</h3>
                <p>輻照度為 Iᵢ 的自然光正入射三片理想線偏振片，且各偏振片透光軸相互平行，每片主透光率 64%、消光比高。請證明透過量約為 13% I₀。</p>
                <img src="https://hackmd.io/_uploads/H1U728fy-e.png" alt="Problem 8.21 Solution">
            </section>

            <section class="learning-module">
                <h3>8.22</h3>
                <p>在 8.10 節中我們得知，糖和胰島素等物質具旋光性，其偏振面旋轉角正比於路程及濃度。若裝有糖溶液的玻璃容器擺在一對交叉的 HN-50 線偏振片間，入射在第一偏振片上的自然光有 50% 能通過第二偏振片。問容器中的糖溶液使光轉動了多少角度？</p>
                <img src="https://hackmd.io/_uploads/HJ_LnUfy-x.png" alt="Problem 8.22 Solution">
            </section>

            <section class="learning-module">
                <h3>8.27</h3>
                <p>設有兩個完全相同理想線偏振器、一個自然光源，兩偏振器串聯，透光軸分別在 0°、50°。現插入第三偏振片於中間，透光軸在 25°。若入射光為 1000 W/m²，則插入與未插入中間偏振片時各有多少光能透過？</p>
                <img src="https://hackmd.io/_uploads/SyX_3Iz1Zl.png" alt="Problem 8.27 Solution">
            </section>

            <section class="learning-module">
                <h3>8.28</h3>
                <p>有 200 W/m² 無規偏振光入射於一串理想線偏振器，第一偏振器透光軸垂直、第二取向 30°、第三 60°、第四 90°。問射出光有多少？</p>
                <img src="https://hackmd.io/_uploads/BJAFhLfJbl.png" alt="Problem 8.28 Solution">
            </section>

            <section class="learning-module">
                <h3>8.38</h3>
                <p>請畫出石英的渥拉斯頓棱鏡，標示所有相關的光線和偏振態。</p>
                <p><em>請參考課本內容</em></p>
            </section>

            <section class="learning-module">
                <h3>8.39</h3>
                <p>渥拉斯頓棱鏡由兩個 45° 石英棱鏡組成，若 \\(\\lambda=589.3 nm\\)，求出射光線分離的角度。（提示：與方解石渥斯頓棱鏡比較，e 光和 o 光位置交換）</p>
                <img src="https://hackmd.io/_uploads/Bydy6LzJWl.png" alt="Problem 8.39 Solution 1">
                <img src="https://hackmd.io/_uploads/SJdZ6UMJ-l.png" alt="Problem 8.39 Solution 2">
            </section>

            <section class="learning-module">
                <h3>8.43</h3>
                <p>浸於水（n = 1.33）的玻璃片（ng = 1.65），對光反射的布魯斯特角是多少？</p>
                <img src="https://hackmd.io/_uploads/S1MmTIGyZg.png" alt="Problem 8.43 Solution">
            </section>

            <section class="learning-module">
                <h3>8.44</h3>
                <p>某透明材料於空氣中的臨界角為 41.0°，求其偏振角。</p>
                <img src="https://hackmd.io/_uploads/Bybr6UzJ-g.png" alt="Problem 8.44 Solution">
            </section>

            <section class="learning-module">
                <h3>8.45</h3>
                <p>一束光從某未知液體表面反射，用一片線偏振片考查反射光。發現偏振片中心軸（垂直於其平面）與垂直方向成 54.30°時，反射光全部能通過，且透光軸平行於界面。由此計算液體折射率。</p>
                <img src="https://hackmd.io/_uploads/HkSIp8Gkbx.png" alt="Problem 8.45 Solution">
            </section>

            <section class="learning-module">
                <h3>8.46</h3>
                <p>發現從浸入酒精（ne=1.36）裡的玻璃板（ng=1.65）反射的光是完全線偏振的。在何種角度下這束偏振光可透射過玻璃板？</p>
                <img src="https://hackmd.io/_uploads/rkoDTLzyZl.png" alt="Problem 8.46 Solution">
            </section>

            <section class="learning-module">
                <h3>8.47</h3>
                <p>一束自然光以40°入射於空氣-玻璃界面（n=1.5），計算反射光的偏振度。</p>
                <img src="https://hackmd.io/_uploads/By0u6IzyZx.png" alt="Problem 8.47 Solution">
            </section>

            <section class="learning-module">
                <h3>8.56</h3>
                <p>假設你有一線偏振器、一四分之一波片及自然光源，如何分辨這兩器件？</p>
                <img src="https://hackmd.io/_uploads/ryi2TLzkZl.png" alt="Problem 8.56 Solution">
            </section>

            <section class="learning-module">
                <h3>8.57</h3>
                <p>線偏振光在水平軸成 130°振動（在第二、第四象限），通過一個 \\(\\pi/2\\) 波片，波片快軸垂直。描述出射光偏振態。若入射光電場與慢軸平行，偏振方向該怎麼旋轉？</p>
                <img src="https://hackmd.io/_uploads/rJDuCIfy-x.png" alt="Problem 8.57 Solution">
            </section>

            <section class="learning-module">
                <h3>8.58</h3>
                <p>右旋圓偏振光通過一四分之一波片，快軸垂直。描述出射光的偏振態。該偏振狀態是否在圖 8.42 對應圓偏移一個象限？</p>
                <img src="https://hackmd.io/_uploads/r1pKALzyZx.png" alt="Problem 8.58 Solution">
            </section>

            <section class="learning-module">
                <h3>8.59</h3>
                <p>右旋圓偏振光通過一四分之一波片，快軸水平。說明出射光是在第一、三象限 45°方向的線偏振光原因。</p>
                <img src="https://hackmd.io/_uploads/rynoALMk-g.png" alt="Problem 8.59 Solution">
            </section>

            <section class="learning-module">
                <h3>8.60</h3>
                <p>在第二、第四象限、振動角 135°的線偏振光通過一半波片，快軸垂直。說明為什麼出射是第一、三象限的線偏振。</p>
                <img src="https://hackmd.io/_uploads/HkE6RUf1Wg.png" alt="Problem 8.60 Solution">
            </section>

            <section class="learning-module">
                <h3>8.61</h3>
                <p>右旋圓偏振光通過一半波片，快軸垂直。描述出射光的偏振態。</p>
                <img src="https://hackmd.io/_uploads/rJnCRLGkZg.png" alt="Problem 8.61 Solution">
            </section>
            
            <section class="learning-module">
                <h3>8.65</h3>
                <p>波長 590 nm 左旋圓偏振光在 z 方向垂直通過石英片，變成右旋圓偏振。石英片經切割拋光，光軸 y 方向（nₒ = 1.5443, nₑ = 1.5534），石英片面為 xy 平面。(a)快軸何方向？(b)石英片最小厚度需多少？</p>
                <img src="https://hackmd.io/_uploads/SkIZ1vMy-g.png" alt="Problem 8.65 Solution">
            </section>

            <section class="learning-module">
                <h3>8.66</h3>
                <p>L (左旋)偏振態光通過快軸於水平方向的八分之一波片，出射光偏振態為何？</p>
                <img src="https://hackmd.io/_uploads/Hk5V1wG1-e.png" alt="Problem 8.66 Solution">
            </section>

            <section class="learning-module">
                <h3>8.75</h3>
                <p>任意一個與水平方向成 \\(\\theta\\) 角的線偏振態，其瓊斯向量為 \\(\\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}\\)。<br>
                證明這個矩陣與表 8.5 中+45°的 \\(\\mathscr{P}\\) 態一致。</p>
                <img src="https://hackmd.io/_uploads/B1HokwMyWl.png" alt="Problem 8.75 Solution">
            </section>

            <section class="learning-module">
                <h3>8.76</h3>
                <p>寫出一個代表與 \\(\\tilde{E}_1 = \\begin{bmatrix} 1 \\\\ -2i \\end{bmatrix}\\) 正交的偏振態的瓊斯向量 \\(\\tilde{E}_2\\)。簡單描述這兩個偏振態。</p>
                <img src="https://hackmd.io/_uploads/BkL2JwM1Zx.png" alt="Problem 8.76 Solution">
            </section>
        `,
        // --- 習題頁面沒有測驗或字卡 ---
        initLogic: () => {
            // 課本習題頁面不需要 quiz 或 flashcard 邏輯
        }
    }
};

/* --- 
  SPA 核心邏輯 (保持不變)
--- */

// 檢查 MathJax 是否載入完成的函式
function checkMathJaxReady() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        console.log("MathJax is ready. Initializing app...");
        initializeAppLogic();
    } else {
        console.log("Waiting for MathJax...");
        setTimeout(checkMathJaxReady, 100);
    }
}

// 應用程式的進入點
function initializeAppLogic() {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('#main-nav a');

    // 導覽列點擊事件
    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 防止頁面跳轉
                const chapterId = link.dataset.chapter;
                
                // 檢查章節是否存在
                if (chapterData[chapterId]) {
                    renderChapter(chapterId);
                    
                    // 更新導覽列的 'active' 狀態
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                } else {
                    contentArea.innerHTML = `<h1 class="chapter-title">章節 ${chapterId} 尚未建立</h1><p>請稍候...</p>`;
                }
            });
        });
    }

    // 渲染章節內容的函式
    function renderChapter(chapterId) {
        const data = chapterData[chapterId];
        if (!data) return;

        // 1. 將 HTML 內容注入到頁面
        contentArea.innerHTML = data.html;

        // 2. 呼叫該章節特定的 JS 邏輯 (例如綁定測驗按鈕)
        if (data.initLogic) {
            data.initLogic();
        }

        // 3. 告訴 MathJax 重新渲染新載入的公式
        window.MathJax.typesetPromise([contentArea])
            .catch((err) => console.log('MathJax typeset error:', err));
    }

    // --- 啟動 APP ---
    setupNavigation();
    
    // 預設載入第一章
    navLinks[0].click();
}

// 通用的字卡邏輯函式
function initFlashcards(chapterId, flashcards) {
    let currentCardIndex = 0;
    const flashcard = document.getElementById(`flashcard-${chapterId}`);
    const cardFront = document.getElementById(`flashcard-front-${chapterId}`);
    const cardBack = document.getElementById(`flashcard-back-${chapterId}`);
    const prevButton = document.getElementById(`prev-card-${chapterId}`);
    const nextButton = document.getElementById(`next-card-${chapterId}`);

    function updateCard(index) {
        if (!flashcard || !cardFront || !cardBack) return;
        flashcard.classList.remove('is-flipped');
        
        setTimeout(() => {
            cardFront.innerHTML = `<p>${flashcards[index].front}</p>`;
            cardBack.innerHTML = `<p>${flashcards[index].back}</p>`;
            // 告訴 MathJax 重新渲染 "字卡"
            window.MathJax.typesetPromise([cardFront, cardBack]);
        }, 200); 
    }

    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('is-flipped');
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            updateCard(currentCardIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
            updateCard(currentCardIndex);
        });
    }
    
    // 初始載入第一張卡片
    updateCard(0);
}

// --- 啟動檢查 ---
checkMathJaxReady();
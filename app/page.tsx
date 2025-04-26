export default function Home() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <h1 className="header-title">自己紹介</h1>
          <div className="nav-links">
            <a href="#profile">プロフィール</a>
            <a href="#appeal">アピールポイント</a>
            <a href="#interests">好き嫌い</a>
            <a href="#hobbies">趣味</a>
            <a href="#goals">目標</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>山田 太郎</h1>
          <p>ウェブデベロッパー / デザイナー</p>
        </div>
      </section>

      <section id="profile" className="section">
        <h2>プロフィール</h2>
        <div className="profile-card">
          <div className="profile-image">
            <img src="https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=800" alt="プロフィール画像" />
          </div>
          <div>
            <h3 className="profile-name">山田 太郎</h3>
            <p className="profile-title">ウェブデベロッパー / デザイナー</p>
            <div className="profile-content">
              <p>年齢: 28歳</p>
              <p>居住地: 東京都</p>
              <p>Email: example@email.com</p>
            </div>
          </div>
        </div>
        <div className="profile-text">
          <p>
            はじめまして、山田太郎と申します。私はフロントエンド開発を専門とするウェブデベロッパーで、
            ユーザー体験を向上させる美しいインターフェースの構築に情熱を持っています。
            東京のIT企業で5年間の経験を積み、現在はフリーランスとして活動しています。
          </p>
          <p>
            デザインとコーディングの両方のスキルを持ち、クライアントのビジョンを実現するための
            最適なソリューションを提供することを心がけています。
          </p>
        </div>
      </section>

      <section id="appeal" className="section">
        <h2>自己アピールポイント</h2>
        <div className="grid">
          <div className="card">
            <h3>技術力</h3>
            <ul className="list">
              <li>React、Next.js、TypeScriptの専門知識</li>
              <li>レスポンシブウェブデザインの実装</li>
              <li>アクセシビリティに配慮したUI/UX設計</li>
              <li>最新のウェブ技術トレンドへの適応力</li>
            </ul>
          </div>
          <div className="card">
            <h3>コミュニケーション</h3>
            <ul className="list">
              <li>クライアントのニーズを的確に把握する能力</li>
              <li>技術的な内容を非技術者にも分かりやすく説明するスキル</li>
              <li>チーム内での効果的な情報共有</li>
              <li>英語によるコミュニケーション能力</li>
            </ul>
          </div>
          <div className="card">
            <h3>問題解決能力</h3>
            <ul className="list">
              <li>複雑な技術的課題への創造的なアプローチ</li>
              <li>効率的なデバッグとトラブルシューティング</li>
              <li>最適なパフォーマンスを実現するコード設計</li>
              <li>厳しい納期の中での質の高い成果物の提供</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="interests" className="section">
        <h2>好きなもの・嫌いなもの</h2>
        <div className="card-wrapper">
          <div className="card">
            <h3>好きなもの</h3>
            <ul className="list">
              <li>新しい技術の学習と実験</li>
              <li>ミニマルなデザイン</li>
              <li>コーヒー（特にハンドドリップ）</li>
              <li>海外旅行</li>
              <li>ジャズ音楽</li>
              <li>自然の中でのハイキング</li>
            </ul>
          </div>
          <div className="card">
            <h3>嫌いなもの</h3>
            <ul className="list">
              <li>非効率的なプロセス</li>
              <li>過度に複雑なデザイン</li>
              <li>締め切り直前の大幅な仕様変更</li>
              <li>ドキュメント不足のレガシーコード</li>
              <li>混雑した電車</li>
              <li>極端な暑さ</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="hobbies" className="section">
        <h2>趣味</h2>
        <div className="grid">
          <div className="card">
            <h3>プログラミング</h3>
            <ul className="list">
              <li>個人プロジェクトの開発</li>
              <li>オープンソースへの貢献</li>
              <li>技術ブログの執筆</li>
              <li>新しいフレームワークの探求</li>
            </ul>
          </div>
          <div className="card">
            <h3>アウトドア活動</h3>
            <ul className="list">
              <li>山登り・トレッキング</li>
              <li>サイクリング</li>
              <li>写真撮影（風景・街並み）</li>
              <li>キャンプ</li>
            </ul>
          </div>
          <div className="card">
            <h3>文化・芸術</h3>
            <ul className="list">
              <li>読書（技術書、SF小説）</li>
              <li>美術館・博物館巡り</li>
              <li>映画鑑賞（特にSF、ドキュメンタリー）</li>
              <li>ジャズライブの鑑賞</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="goals" className="section">
        <h2>目標</h2>
        <div className="card-wrapper">
          <div className="card">
            <h3>短期目標</h3>
            <ul className="list">
              <li>
                <strong>技術スキルの拡張</strong>
                <p>WebGL、Three.jsを使用した3Dウェブ体験の開発技術を習得する</p>
              </li>
              <li>
                <strong>チーム貢献</strong>
                <p>後輩デベロッパーのメンタリングを通じて、チームの成長に貢献する</p>
              </li>
              <li>
                <strong>発信力の強化</strong>
                <p>技術ブログを毎月更新し、技術コミュニティでの発表機会を増やす</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>長期目標</h3>
            <ul className="list">
              <li>
                <strong>専門性の確立</strong>
                <p>ウェブアクセシビリティの専門家として認知されるレベルに達する</p>
              </li>
              <li>
                <strong>事業展開</strong>
                <p>自分のウェブ開発スタジオを設立し、社会的影響力のあるプロジェクトに携わる</p>
              </li>
              <li>
                <strong>教育への貢献</strong>
                <p>プログラミング教育のためのオンラインコースを開発し、次世代の開発者を育成する</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} 山田 太郎. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </>
  );
}
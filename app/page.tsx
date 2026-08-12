export default function Home() {
  return (
    <main>
      <section className="card" aria-labelledby="welcome-title">
        <p className="eyebrow">MY FIRST GITHUB PAGE</p>
        <h1 id="welcome-title">你好，世界！</h1>
        <p className="intro">
          这是我的第一个 GitHub Pages 静态页面。它已经准备好迎接下一次更新。
        </p>
        <a className="button" href="https://github.com" target="_blank" rel="noreferrer">
          访问 GitHub
        </a>
      </section>
    </main>
  );
}

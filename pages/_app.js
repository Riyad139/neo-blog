import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-neo">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

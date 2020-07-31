// import Alert from '../components/alert'
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({
                                // preview,
                                children,
                              }) {

  const styles = {
    header: {
      backgroundImage: 'url(assets/images/grid.png)',
      backgroundAttachment: 'fixed'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
  }

  return (
    <>
      <Meta />
      <div
        className="min-h-screen"
        style={styles.header}
      >
        {/* <Alert preview={preview} /> */}
        <main style={styles.content}>{children}</main>
      </div>
      <Footer />
    </>
  );
}

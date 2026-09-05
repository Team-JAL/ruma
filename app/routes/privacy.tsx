import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy — Ruma" },
  { name: "description", content: "How AJILE STUDIO collects, uses, and protects personal data on Ruma — including Google user data received through Sign in with Google — in accordance with the Malaysian PDPA and the Google API Services User Data Policy." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <p>
      AJILE STUDIO (Company Registration No. 202503327530) (<strong>"AJILE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>) operates Ruma (the <strong>"Service"</strong>) — the website at <strong>ruma.casa</strong> and the Ruma application at <strong>app.ruma.casa</strong>. This Privacy Policy explains how we collect, use, store, share, and protect your personal data in accordance with the Personal Data Protection Act 2010 (<strong>"PDPA"</strong>) of Malaysia. Section 4 sets out specifically how we handle data we receive from your Google Account.
    </p>
    <p>By using the Service, you consent to the practices described below.</p>

    <h2>1. Personal data we collect</h2>
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr><th>Category</th><th>Examples</th><th>When collected</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Identity &amp; contact data</td>
            <td>Name, email address, authentication identifiers</td>
            <td>When you create an account or contact us. Accounts and sign-in are handled by Clerk.</td>
          </tr>
          <tr>
            <td>Google account data (only if you use "Sign in with Google")</td>
            <td>Your Google account identifier, name, email address, email-verification status, profile picture, and language preference. We request only the <strong>openid</strong>, <strong>email</strong>, and <strong>profile</strong> scopes. We do not request, and cannot read, your Gmail, Drive, Calendar, Contacts, or any other Google Workspace data.</td>
            <td>Only when you choose to sign in or sign up with Google. The Google OAuth flow is operated by Clerk on our behalf. See Section 4.</td>
          </tr>
          <tr>
            <td>Calculator inputs</td>
            <td>Property price, loan amount, income, rental assumptions</td>
            <td>When you use the calculators (processed in your browser; not stored on our servers unless you explicitly save a property or scenario)</td>
          </tr>
          <tr>
            <td>Listing content you submit for parsing</td>
            <td>Listing text you paste, and images you upload, together with any personal data they happen to contain (e.g. an agent's name or phone number in a listing)</td>
            <td>When you use the listing parser. The content is sent to Google's Gemini API to extract property details, and is not retained by us beyond the resulting property record. We never send Google account data to the Gemini API.</td>
          </tr>
          <tr>
            <td>Billing data</td>
            <td>Subscription status, plan, renewal dates, and the customer and subscription identifiers issued by Stripe. We never receive or store your full card details.</td>
            <td>When you start a trial or subscribe to Pro. Card details are collected by Stripe directly.</td>
          </tr>
          <tr>
            <td>Usage &amp; device data</td>
            <td>IP address, browser type, device, pages viewed, clicks, referrer</td>
            <td>Automatically via PostHog analytics</td>
          </tr>
          <tr>
            <td>Session recordings</td>
            <td>Recordings of your interactions with the Service (mouse movement, clicks, page navigation). Input fields are masked by default to avoid capturing what you type.</td>
            <td>Automatically via PostHog session replay</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>2. How we use your data</h2>
    <ul>
      <li>To operate, maintain, and improve the Service;</li>
      <li>To create your account, authenticate you, and keep your account secure — including where you sign in with Google;</li>
      <li>To show your name, email address, and profile picture back to you inside the Service;</li>
      <li>To extract property details from listing content you submit to the listing parser;</li>
      <li>To take payment for, and administer, a Pro subscription;</li>
      <li>To respond to enquiries and send you account, billing, and product updates;</li>
      <li>To analyse usage patterns and diagnose technical issues;</li>
      <li>To comply with legal obligations in Malaysia.</li>
    </ul>

    <h2>3. Disclosure to third parties</h2>
    <p>We do <strong>not</strong> sell your personal data. We disclose data only to:</p>
    <ul>
      <li>
        <strong>Service providers</strong> that help us run the Service, each bound by confidentiality and data-protection obligations:
        <ul>
          <li><strong>Clerk</strong> — account creation, sign-in (including Sign in with Google), and session management;</li>
          <li><strong>Convex</strong> — the database holding your account and saved property records;</li>
          <li><strong>Stripe</strong> — subscription billing and payment processing;</li>
          <li><strong>Google (Gemini API)</strong> — parsing the listing text and images you submit to the listing parser;</li>
          <li><strong>PostHog</strong> — product analytics and session replay;</li>
          <li>our <strong>email and hosting providers</strong> (including Cloudflare), which carry the Service and any messages we send you.</li>
        </ul>
      </li>
      <li><strong>Law enforcement or regulators</strong> where required by Malaysian law.</li>
    </ul>
    <p>
      <strong>Future opt-in marketing partners.</strong> We may, in the future, offer you the option to share your name and email with selected real estate agencies and property developers for direct marketing and property sales. This will <strong>only occur if you provide separate, explicit, opt-in consent</strong> at the time the option is offered, and it will <strong>never</strong> include data we received from your Google Account. You can withdraw consent at any time.
    </p>

    <h2>4. Google user data and Limited Use</h2>
    <p>
      If you choose "Sign in with Google", we receive a limited set of data from your Google Account through Google's OAuth service (<strong>"Google user data"</strong>). This section describes exactly how Ruma accesses, uses, stores, shares, and deletes that data.
    </p>

    <h3>What we access</h3>
    <p>
      Only the <strong>openid</strong>, <strong>email</strong>, and <strong>profile</strong> scopes, which give us your Google account identifier, name, email address, email-verification status, profile picture, and language preference. We request no sensitive or restricted scopes: we do not request, receive, or have any ability to read your Gmail messages, Drive files, Calendar, Contacts, Photos, or any other Google Workspace data.
    </p>

    <h3>How we use it</h3>
    <p>
      Solely to provide the Service functionality you asked for: to create and authenticate your Ruma account, to keep that account secure, to display your name and profile picture to you within the Service, and to send you account, billing, and support messages at that email address. We use it for nothing else.
    </p>

    <h3>How we store and protect it</h3>
    <p>
      Your Google sign-in record and profile are held by <strong>Clerk</strong>, our authentication provider. Our own database (<strong>Convex</strong>) stores only your account identifier, your email address, your subscription status, and the properties and scenarios you save. Google user data is encrypted in transit, held on access-controlled infrastructure, and reachable only by the AJILE personnel who need it to run the Service.
    </p>

    <h3>Who we share it with</h3>
    <p>
      We share Google user data only with the service providers named in Section 3 that are necessary to operate your account — Clerk (authentication), Convex (storage), Stripe (billing, if you subscribe), and our email and hosting providers — each acting on our instructions under confidentiality and data-protection obligations, and with law enforcement or regulators where required by Malaysian law. We do not sell Google user data, and we do not transfer it to data brokers, information resellers, advertising networks, or any other third party.
    </p>

    <h3>What we never do with Google user data</h3>
    <ul>
      <li>We never use it for advertising of any kind, including targeted, personalised, retargeted, or interest-based advertising;</li>
      <li>We never sell or transfer it to data brokers or information resellers;</li>
      <li>We never use it to determine credit-worthiness or for lending purposes;</li>
      <li>We never use it to develop, improve, or train generalised or non-personalised artificial-intelligence or machine-learning models. In particular, we do not use Google Workspace APIs to develop, improve, or train non-personalised AI or ML models. Our listing parser sends only the listing text and images you submit to Google's Gemini API; it never sends Google user data;</li>
      <li>We never permit humans to read Google user data, except with your explicit consent for a specific issue you have raised with us, where necessary for security purposes or to comply with applicable law, or where the data has been aggregated and anonymised.</li>
    </ul>

    <h3>Limited Use</h3>
    <p>
      Ruma.casa's use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.
    </p>

    <h3>Revoking access and deleting Google user data</h3>
    <p>
      You can disconnect Ruma from your Google Account at any time at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>. To have the Google user data we hold erased, email <a href="mailto:inbox@ajile.team">inbox@ajile.team</a> and ask us to delete your Ruma account; we action deletion requests within <strong>30 days</strong>, as described in Section 6.
    </p>

    <h2>5. Cross-border transfer</h2>
    <p>
      All of the service providers named in Section 3 — Clerk, Convex, Stripe, Google, PostHog, and our email and hosting providers — process data on servers located outside Malaysia. We rely on each recipient's contractual undertakings and recognised safeguards to ensure a level of protection comparable to the PDPA, as permitted under Section 129 of the PDPA.
    </p>

    <h2>6. Retention and deletion</h2>
    <p>
      We retain personal data only for as long as necessary to fulfil the purposes set out above, or as required by Malaysian law. Account data — including any Google user data — is retained for as long as your account remains open.
    </p>
    <p>
      You may ask us to delete your account at any time by emailing <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>. Within <strong>30 days</strong> of such a request we delete your account record and the properties and scenarios you have saved from our database, and delete your sign-in record — including any data received from your Google Account — from Clerk.
    </p>
    <p>
      Two exceptions apply: analytics and session-replay data are retained for up to <strong>12 months</strong> from collection, after which they are deleted or anonymised; and billing records are retained for as long as Malaysian tax and accounting law requires, even after you close your account.
    </p>

    <h2>7. Security</h2>
    <p>
      We apply reasonable technical and organisational measures to protect personal data from unauthorised access, loss, or disclosure: encryption in transit (HTTPS/TLS) for all traffic, encryption at rest by our infrastructure providers, role-based access controls limiting access to the personnel who need it, credentials and API keys held as managed secrets rather than in code, and due diligence on every vendor we engage.
    </p>

    <h2>8. Your rights under the PDPA</h2>
    <p>You have the right to:</p>
    <ul>
      <li>access and obtain a copy of your personal data;</li>
      <li>correct inaccurate or incomplete data;</li>
      <li>withdraw consent to processing (which may affect our ability to provide the Service), including by revoking Ruma's access to your Google Account as described in Section 4;</li>
      <li>request deletion of your data, subject to legal retention requirements;</li>
      <li>limit our processing of your data for direct marketing.</li>
    </ul>
    <p>To exercise any of these rights, email <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>.</p>

    <h2>9. Cookies &amp; tracking</h2>
    <p>
      The Service uses cookies and similar technologies for analytics (via PostHog), to keep you signed in (via Clerk), and to remember your preferences. You can disable cookies through your browser settings; some features, including sign-in, may not work correctly as a result.
    </p>

    <h2>10. Children</h2>
    <p>
      The Service is not directed at persons under 18. We do not knowingly collect personal data from children.
    </p>

    <h2>11. Changes</h2>
    <p>
      We may update this Policy from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be highlighted on the Service.
    </p>

    <h2>12. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Operator of Ruma (ruma.casa and app.ruma.casa)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      See also: <Link to="/terms">Terms of Service</Link> · <Link to="/disclaimer">Disclaimer</Link>
    </p>
  </>
);

const BahasaContent = () => (
  <>
    <p style={{ fontStyle: "italic", fontSize: "0.88rem", color: "var(--ink-3)", marginBottom: "2rem" }}>
      Nota: Versi Bahasa Inggeris dokumen ini adalah versi rasmi yang mengawal. Terjemahan Bahasa Malaysia ini disediakan untuk kemudahan rujukan; sekiranya terdapat sebarang percanggahan, versi Bahasa Inggeris akan terpakai.
    </p>

    <p>
      AJILE STUDIO (No. Pendaftaran Syarikat 202503327530) (<strong>"AJILE"</strong>, <strong>"kami"</strong>) mengendalikan Ruma (<strong>"Perkhidmatan"</strong>) — laman web di <strong>ruma.casa</strong> dan aplikasi Ruma di <strong>app.ruma.casa</strong>. Dasar Privasi ini menerangkan cara kami mengumpul, menggunakan, menyimpan, berkongsi, dan melindungi data peribadi anda mengikut Akta Perlindungan Data Peribadi 2010 (<strong>"APDP"</strong>) Malaysia. Seksyen 4 menerangkan secara khusus cara kami mengendalikan data yang kami terima daripada Akaun Google anda.
    </p>
    <p>Dengan menggunakan Perkhidmatan ini, anda bersetuju dengan amalan yang dinyatakan di bawah.</p>

    <h2>1. Data peribadi yang kami kumpul</h2>
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr><th>Kategori</th><th>Contoh</th><th>Bila dikumpul</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Data identiti dan hubungan</td>
            <td>Nama, alamat e-mel, pengecam pengesahan akaun</td>
            <td>Apabila anda membuka akaun atau menghubungi kami. Akaun dan log masuk dikendalikan oleh Clerk.</td>
          </tr>
          <tr>
            <td>Data akaun Google (hanya jika anda menggunakan "Log masuk dengan Google")</td>
            <td>Pengecam akaun Google anda, nama, alamat e-mel, status pengesahan e-mel, gambar profil, dan pilihan bahasa. Kami hanya meminta skop <strong>openid</strong>, <strong>email</strong>, dan <strong>profile</strong>. Kami tidak meminta, dan tidak berupaya membaca, Gmail, Drive, Kalendar, Kenalan, atau apa-apa data Google Workspace anda yang lain.</td>
            <td>Hanya apabila anda memilih untuk log masuk atau mendaftar dengan Google. Aliran OAuth Google dikendalikan oleh Clerk bagi pihak kami. Lihat Seksyen 4.</td>
          </tr>
          <tr>
            <td>Input kalkulator</td>
            <td>Harga hartanah, jumlah pinjaman, pendapatan, andaian sewaan</td>
            <td>Apabila anda menggunakan kalkulator (diproses dalam pelayar anda; tidak disimpan pada pelayan kami melainkan anda menyimpan hartanah atau senario secara nyata)</td>
          </tr>
          <tr>
            <td>Kandungan iklan hartanah yang anda serahkan untuk dihurai</td>
            <td>Teks iklan yang anda tampal, dan imej yang anda muat naik, termasuk apa-apa data peribadi yang mungkin terkandung di dalamnya (cth. nama atau nombor telefon ejen)</td>
            <td>Apabila anda menggunakan penghurai iklan. Kandungan tersebut dihantar ke API Gemini Google untuk mengekstrak butiran hartanah, dan tidak disimpan oleh kami selain daripada rekod hartanah yang terhasil. Kami tidak sekali-kali menghantar data akaun Google ke API Gemini.</td>
          </tr>
          <tr>
            <td>Data pengebilan</td>
            <td>Status langganan, pelan, tarikh pembaharuan, serta pengecam pelanggan dan langganan yang dikeluarkan oleh Stripe. Kami tidak sekali-kali menerima atau menyimpan butiran penuh kad anda.</td>
            <td>Apabila anda memulakan percubaan atau melanggan Pro. Butiran kad dikumpul terus oleh Stripe.</td>
          </tr>
          <tr>
            <td>Data penggunaan dan peranti</td>
            <td>Alamat IP, jenis pelayar, peranti, halaman yang dilihat, klik, perujuk</td>
            <td>Secara automatik melalui analitik PostHog</td>
          </tr>
          <tr>
            <td>Rakaman sesi</td>
            <td>Rakaman interaksi anda dengan Perkhidmatan (pergerakan tetikus, klik, navigasi halaman). Medan input ditutup secara lalai bagi mengelakkan apa yang anda taipkan daripada dirakam.</td>
            <td>Secara automatik melalui ciri rakaman sesi PostHog</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>2. Cara kami menggunakan data anda</h2>
    <ul>
      <li>Untuk mengendalikan, menyelenggara, dan menambah baik Perkhidmatan;</li>
      <li>Untuk membuka akaun anda, mengesahkan identiti anda, dan memastikan akaun anda selamat — termasuk apabila anda log masuk dengan Google;</li>
      <li>Untuk memaparkan nama, alamat e-mel, dan gambar profil anda kepada anda di dalam Perkhidmatan;</li>
      <li>Untuk mengekstrak butiran hartanah daripada kandungan iklan yang anda serahkan kepada penghurai iklan;</li>
      <li>Untuk menerima bayaran bagi, dan mentadbir, langganan Pro;</li>
      <li>Untuk membalas pertanyaan dan menghantar kemas kini akaun, pengebilan, dan produk kepada anda;</li>
      <li>Untuk menganalisis corak penggunaan dan mendiagnosis isu teknikal;</li>
      <li>Untuk mematuhi kewajipan undang-undang di Malaysia.</li>
    </ul>

    <h2>3. Pendedahan kepada pihak ketiga</h2>
    <p>Kami <strong>tidak</strong> menjual data peribadi anda. Kami mendedahkan data hanya kepada:</p>
    <ul>
      <li>
        <strong>Pembekal perkhidmatan</strong> yang membantu kami mengendalikan Perkhidmatan, masing-masing terikat dengan kewajipan kerahsiaan dan perlindungan data:
        <ul>
          <li><strong>Clerk</strong> — pembukaan akaun, log masuk (termasuk Log masuk dengan Google), dan pengurusan sesi;</li>
          <li><strong>Convex</strong> — pangkalan data yang menyimpan akaun dan rekod hartanah anda;</li>
          <li><strong>Stripe</strong> — pengebilan langganan dan pemprosesan pembayaran;</li>
          <li><strong>Google (API Gemini)</strong> — menghurai teks dan imej iklan yang anda serahkan kepada penghurai iklan;</li>
          <li><strong>PostHog</strong> — analitik produk dan rakaman sesi;</li>
          <li>pembekal <strong>e-mel dan pengehosan</strong> kami (termasuk Cloudflare), yang membawa Perkhidmatan dan apa-apa mesej yang kami hantar kepada anda.</li>
        </ul>
      </li>
      <li><strong>Pihak penguatkuasaan undang-undang atau pengawal selia</strong> apabila dikehendaki oleh undang-undang Malaysia.</li>
    </ul>
    <p>
      <strong>Rakan kongsi pemasaran ikut-serta pada masa hadapan.</strong> Kami mungkin, pada masa hadapan, menawarkan anda pilihan untuk berkongsi nama dan alamat e-mel anda dengan agensi hartanah dan pemaju hartanah yang terpilih bagi tujuan pemasaran langsung dan jualan hartanah. Perkongsian ini <strong>hanya akan berlaku sekiranya anda memberikan persetujuan ikut-serta yang berasingan dan jelas</strong> pada masa pilihan tersebut ditawarkan, dan ia <strong>tidak sekali-kali</strong> akan merangkumi data yang kami terima daripada Akaun Google anda. Anda boleh menarik balik persetujuan pada bila-bila masa.
    </p>

    <h2>4. Data pengguna Google dan Penggunaan Terhad</h2>
    <p>
      Sekiranya anda memilih "Log masuk dengan Google", kami menerima satu set data terhad daripada Akaun Google anda melalui perkhidmatan OAuth Google (<strong>"data pengguna Google"</strong>). Seksyen ini menerangkan dengan tepat cara Ruma mengakses, menggunakan, menyimpan, berkongsi, dan memadamkan data tersebut.
    </p>

    <h3>Apa yang kami akses</h3>
    <p>
      Hanya skop <strong>openid</strong>, <strong>email</strong>, dan <strong>profile</strong>, yang memberikan kami pengecam akaun Google anda, nama, alamat e-mel, status pengesahan e-mel, gambar profil, dan pilihan bahasa. Kami tidak meminta apa-apa skop sensitif atau terhad: kami tidak meminta, tidak menerima, dan tidak berupaya membaca mesej Gmail, fail Drive, Kalendar, Kenalan, Foto, atau apa-apa data Google Workspace anda yang lain.
    </p>

    <h3>Cara kami menggunakannya</h3>
    <p>
      Semata-mata untuk menyediakan fungsi Perkhidmatan yang anda minta: untuk membuka dan mengesahkan akaun Ruma anda, memastikan akaun tersebut selamat, memaparkan nama dan gambar profil anda kepada anda di dalam Perkhidmatan, serta menghantar mesej akaun, pengebilan, dan sokongan kepada alamat e-mel tersebut. Kami tidak menggunakannya untuk tujuan lain.
    </p>

    <h3>Cara kami menyimpan dan melindunginya</h3>
    <p>
      Rekod log masuk Google dan profil anda disimpan oleh <strong>Clerk</strong>, pembekal pengesahan kami. Pangkalan data kami sendiri (<strong>Convex</strong>) hanya menyimpan pengecam akaun anda, alamat e-mel anda, status langganan anda, serta hartanah dan senario yang anda simpan. Data pengguna Google disulitkan semasa transit, disimpan pada infrastruktur yang dikawal akses, dan hanya boleh dicapai oleh kakitangan AJILE yang memerlukannya untuk mengendalikan Perkhidmatan.
    </p>

    <h3>Dengan siapa kami berkongsi</h3>
    <p>
      Kami berkongsi data pengguna Google hanya dengan pembekal perkhidmatan yang dinamakan dalam Seksyen 3 yang diperlukan untuk mengendalikan akaun anda — Clerk (pengesahan), Convex (penyimpanan), Stripe (pengebilan, jika anda melanggan), dan pembekal e-mel serta pengehosan kami — masing-masing bertindak atas arahan kami di bawah kewajipan kerahsiaan dan perlindungan data, serta dengan pihak penguatkuasaan undang-undang atau pengawal selia apabila dikehendaki oleh undang-undang Malaysia. Kami tidak menjual data pengguna Google, dan kami tidak memindahkannya kepada broker data, penjual semula maklumat, rangkaian pengiklanan, atau mana-mana pihak ketiga yang lain.
    </p>

    <h3>Apa yang kami tidak sekali-kali lakukan dengan data pengguna Google</h3>
    <ul>
      <li>Kami tidak sekali-kali menggunakannya untuk pengiklanan dalam apa jua bentuk, termasuk pengiklanan bersasar, diperibadikan, penyasaran semula, atau berasaskan minat;</li>
      <li>Kami tidak sekali-kali menjual atau memindahkannya kepada broker data atau penjual semula maklumat;</li>
      <li>Kami tidak sekali-kali menggunakannya untuk menentukan kelayakan kredit atau bagi tujuan pemberian pinjaman;</li>
      <li>Kami tidak sekali-kali menggunakannya untuk membangunkan, menambah baik, atau melatih model kecerdasan buatan atau pembelajaran mesin yang bersifat umum atau tidak diperibadikan. Khususnya, kami tidak menggunakan API Google Workspace untuk membangunkan, menambah baik, atau melatih model AI atau ML yang tidak diperibadikan. Penghurai iklan kami hanya menghantar teks dan imej iklan yang anda serahkan ke API Gemini Google; ia tidak sekali-kali menghantar data pengguna Google;</li>
      <li>Kami tidak sekali-kali membenarkan manusia membaca data pengguna Google, kecuali dengan persetujuan jelas anda bagi isu tertentu yang anda bangkitkan kepada kami, apabila perlu bagi tujuan keselamatan atau untuk mematuhi undang-undang yang terpakai, atau apabila data tersebut telah diagregat dan dianonimkan.
      </li>
    </ul>

    <h3>Penggunaan Terhad (Limited Use)</h3>
    <p>
      Penggunaan dan pemindahan maklumat yang diterima oleh Ruma.casa daripada API Google kepada mana-mana aplikasi lain akan mematuhi <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Dasar Data Pengguna Perkhidmatan API Google</a>, termasuk keperluan Penggunaan Terhad (Limited Use).
    </p>

    <h3>Menarik balik akses dan memadam data pengguna Google</h3>
    <p>
      Anda boleh memutuskan sambungan Ruma daripada Akaun Google anda pada bila-bila masa di <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>. Untuk memadamkan data pengguna Google yang kami simpan, e-melkan <a href="mailto:inbox@ajile.team">inbox@ajile.team</a> dan minta kami memadamkan akaun Ruma anda; kami melaksanakan permintaan pemadaman dalam tempoh <strong>30 hari</strong>, seperti yang diterangkan dalam Seksyen 6.
    </p>

    <h2>5. Pemindahan rentas sempadan</h2>
    <p>
      Kesemua pembekal perkhidmatan yang dinamakan dalam Seksyen 3 — Clerk, Convex, Stripe, Google, PostHog, serta pembekal e-mel dan pengehosan kami — memproses data pada pelayan yang terletak di luar Malaysia. Kami bergantung kepada aku janji kontrak setiap penerima dan perlindungan yang diiktiraf bagi memastikan tahap perlindungan yang setanding dengan APDP, seperti yang dibenarkan di bawah Seksyen 129 APDP.
    </p>

    <h2>6. Pengekalan dan pemadaman</h2>
    <p>
      Kami mengekalkan data peribadi hanya selama yang diperlukan untuk memenuhi tujuan yang dinyatakan di atas, atau seperti yang dikehendaki oleh undang-undang Malaysia. Data akaun — termasuk apa-apa data pengguna Google — dikekalkan selagi akaun anda masih dibuka.
    </p>
    <p>
      Anda boleh meminta kami memadamkan akaun anda pada bila-bila masa dengan menghantar e-mel kepada <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>. Dalam tempoh <strong>30 hari</strong> daripada permintaan tersebut, kami memadamkan rekod akaun anda serta hartanah dan senario yang anda simpan daripada pangkalan data kami, dan memadamkan rekod log masuk anda — termasuk apa-apa data yang diterima daripada Akaun Google anda — daripada Clerk.
    </p>
    <p>
      Dua pengecualian terpakai: data analitik dan rakaman sesi disimpan sehingga <strong>12 bulan</strong> dari tarikh pengumpulan, selepas itu data tersebut dipadamkan atau dianonimkan; dan rekod pengebilan disimpan selama yang dikehendaki oleh undang-undang cukai dan perakaunan Malaysia, walaupun selepas anda menutup akaun anda.
    </p>

    <h2>7. Keselamatan</h2>
    <p>
      Kami menggunakan langkah teknikal dan organisasi yang munasabah bagi melindungi data peribadi daripada akses, kehilangan, atau pendedahan tanpa kebenaran: penyulitan semasa transit (HTTPS/TLS) bagi semua trafik, penyulitan semasa simpanan oleh pembekal infrastruktur kami, kawalan akses berasaskan peranan yang mengehadkan capaian kepada kakitangan yang memerlukannya, kelayakan dan kunci API disimpan sebagai rahsia terurus dan bukan di dalam kod, serta usaha wajar terhadap setiap vendor yang kami gunakan.
    </p>

    <h2>8. Hak anda di bawah APDP</h2>
    <p>Anda mempunyai hak untuk:</p>
    <ul>
      <li>mengakses dan mendapatkan salinan data peribadi anda;</li>
      <li>membetulkan data yang tidak tepat atau tidak lengkap;</li>
      <li>menarik balik persetujuan terhadap pemprosesan (yang mungkin menjejaskan keupayaan kami untuk menyediakan Perkhidmatan), termasuk dengan menarik balik akses Ruma kepada Akaun Google anda seperti yang diterangkan dalam Seksyen 4;</li>
      <li>memohon pemadaman data anda, tertakluk kepada keperluan pengekalan undang-undang;</li>
      <li>menghadkan pemprosesan data anda untuk pemasaran langsung.</li>
    </ul>
    <p>Untuk melaksanakan mana-mana hak ini, sila e-melkan <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>.</p>

    <h2>9. Kuki dan penjejakan</h2>
    <p>
      Perkhidmatan ini menggunakan kuki dan teknologi serupa untuk analitik (melalui PostHog), untuk memastikan anda kekal log masuk (melalui Clerk), dan untuk mengingati pilihan anda. Anda boleh melumpuhkan kuki melalui tetapan pelayar anda; sesetengah ciri, termasuk log masuk, mungkin tidak berfungsi dengan betul akibat tindakan tersebut.
    </p>

    <h2>10. Kanak-kanak</h2>
    <p>
      Perkhidmatan ini tidak ditujukan kepada individu di bawah umur 18 tahun. Kami tidak mengumpul data peribadi daripada kanak-kanak dengan sengaja.
    </p>

    <h2>11. Perubahan</h2>
    <p>
      Kami mungkin mengemas kini Dasar ini dari semasa ke semasa. Tarikh "Kemas kini terakhir" di atas mencerminkan semakan terkini. Perubahan material akan diketengahkan pada Perkhidmatan.
    </p>

    <h2>12. Hubungi</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Pengendali Ruma (ruma.casa dan app.ruma.casa)<br />
      E-mel: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      Lihat juga: <Link to="/terms">Terma Perkhidmatan</Link> · <Link to="/disclaimer">Penafian</Link>
    </p>
  </>
);

export default function Privacy() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Privacy Policy", bm: "Dasar Privasi" }}
      lastUpdated="5 September 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}

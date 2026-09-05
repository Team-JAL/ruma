import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Terms of Service — Ruma" },
  { name: "description", content: "Terms governing the use of Ruma, operated by AJILE STUDIO under Malaysian law." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <p>
      These Terms govern your use of Ruma (ruma.casa) (the <strong>"Service"</strong>), operated by AJILE STUDIO (Company Registration No. 202503327530) (<strong>"AJILE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>). By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
    </p>

    <h2>1. The Service</h2>
    <p>
      Ruma is a set of property investment calculators and comparison tools designed for the Malaysian property market. The Service is provided for <strong>informational and educational purposes only</strong>.
    </p>

    <h2>2. Eligibility</h2>
    <p>
      You must be at least 18 years old and able to enter into a binding contract under the Contracts Act 1950 of Malaysia to use the Service.
    </p>

    <h2>3. Acceptable use</h2>
    <p>You agree <strong>not</strong> to:</p>
    <ul>
      <li>use the Service for any unlawful purpose or in breach of any Malaysian law;</li>
      <li>reverse engineer, decompile, scrape, or attempt to extract the source code or underlying data of the Service, except to the extent permitted by law;</li>
      <li>interfere with, disrupt, or impose an unreasonable load on the Service or its infrastructure;</li>
      <li>use automated means (bots, crawlers) to access the Service without our prior written consent;</li>
      <li>upload or transmit malware, harmful code, or misleading information;</li>
      <li>impersonate any person or entity, or misrepresent your affiliation;</li>
      <li>use the Service to provide regulated financial, investment, or legal advice to third parties.</li>
    </ul>
    <p>We may suspend or terminate your access at any time for breach of these Terms.</p>

    <h2>4. Intellectual property</h2>
    <p>
      All content, software, design, calculators, methodologies, trademarks, and branding on the Service are owned by AJILE STUDIO or its licensors and are protected by Malaysian copyright, trademark, and other intellectual property laws.
    </p>
    <p>
      You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial use. Outputs that you generate from the calculators using your own inputs (e.g. exported PDF reports) may be used for your own personal or internal business purposes; you may not resell or redistribute the Service or its underlying components.
    </p>

    <h2>5. Accounts</h2>
    <p>
      Information you submit to us (including when creating an account) must be accurate and kept up to date. You are responsible for keeping your login credentials confidential and for all activity that takes place under your account. Notify us promptly at <a href="mailto:inbox@ajile.team">inbox@ajile.team</a> if you believe your account has been accessed without your authorisation.
    </p>
    <p>
      <strong>Sign in with Google.</strong> If you create or access your account using "Sign in with Google", we receive the limited Google Account data described in Section 4 of our <Link to="/privacy">Privacy Policy</Link>. Ruma.casa's use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. You may revoke our access at any time at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.
    </p>

    <h2>6. Subscriptions, fees, and refunds</h2>

    <h3>6.1 Plans</h3>
    <p>
      The Starter plan is provided free of charge, with the features described on the Service. The <strong>Pro</strong> plan is charged at <strong>RM 19.99 per month</strong>. Plan features are described on our pricing page and may be adjusted from time to time as the Service develops.
    </p>

    <h3>6.2 Free trial</h3>
    <p>
      New Pro subscribers are offered a <strong>one (1) month free trial</strong>. A valid payment method is required to start the trial. <strong>Unless you cancel before the trial ends, your subscription converts automatically to a paid Pro subscription and the first monthly charge of RM 19.99 is taken on the day the trial expires.</strong> The trial is limited to one per person and per account. We may withhold, shorten, or revoke a trial where we reasonably believe it is being abused, including through the creation of multiple accounts.
    </p>

    <h3>6.3 Automatic renewal</h3>
    <p>
      Pro subscriptions renew <strong>automatically each month</strong> at the then-current price until cancelled. You are charged on the same day of each month as your first paid charge; where a month does not contain that day, you are charged on the last day of that month.
    </p>

    <h3>6.4 Cancellation</h3>
    <p>
      You may cancel at any time from your account settings. Cancellation takes effect at the end of your current billing period: you keep Pro access until that period ends, after which your account reverts to the Starter plan. Cancelling does not trigger a refund or a pro-rated credit for the remainder of the period.
    </p>

    <h3>6.5 No refunds</h3>
    <p>
      <strong>All fees are non-refundable.</strong> This includes partial billing periods, periods during which you did not use the Service, and amounts paid before you cancel, downgrade, or have your access terminated for breach of these Terms. We are under no obligation to provide refunds or credits, although we may choose to do so at our sole discretion (for example, in the case of a duplicate or erroneous charge).
    </p>
    <p>
      Nothing in this clause excludes, restricts, or modifies any right or remedy that cannot lawfully be excluded under Malaysian law, including under the <strong>Consumer Protection Act 1999</strong> where applicable.
    </p>

    <h3>6.6 Payment processing</h3>
    <p>
      Payments are processed by <strong>Stripe</strong>. Your use of Stripe is subject to the terms and privacy policy of Stripe, and you authorise Stripe to charge your payment method on our behalf. We do not receive or store your full card details. See our <Link to="/privacy">Privacy Policy</Link> for how payment-related information is handled.
    </p>

    <h3>6.7 Failed payments</h3>
    <p>
      If a payment fails, we (or Stripe) may retry the charge. If payment is not successfully collected within <strong>seven (7) days</strong> of the due date, we may suspend your Pro access or downgrade your account to the Starter plan without further notice.
    </p>

    <h3>6.8 Price changes</h3>
    <p>
      We may change our pricing. For existing subscribers, we will give at least <strong>thirty (30) days</strong> notice by email or through the Service, and the new price will apply from the first billing cycle after the notice period ends. If you do not accept a price change, you may cancel before it takes effect; continued use of a paid plan after that date constitutes acceptance of the new price.
    </p>

    <h2>7. Disclaimers</h2>
    <p>
      The Service is provided <strong>"as is" and "as available"</strong>, without warranties of any kind, whether express or implied, to the maximum extent permitted by Malaysian law. We do not warrant that the Service will be uninterrupted, error-free, or that calculator outputs are accurate or suitable for any particular purpose. See our <Link to="/disclaimer">Disclaimer</Link> for further detail.
    </p>

    <h2>8. Limitation of liability</h2>
    <p>
      To the maximum extent permitted under Malaysian law, AJILE STUDIO, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or exemplary damages, or any loss of profits, revenue, data, or business opportunity, arising out of or in connection with your use of the Service. Our total aggregate liability shall not exceed the amount (if any) you have paid to us in the 12 months preceding the event giving rise to the claim, or <strong>RM 100</strong>, whichever is lower.
    </p>
    <p>
      Nothing in these Terms excludes liability that cannot lawfully be excluded under Malaysian law (including under the Consumer Protection Act 1999, where applicable).
    </p>

    <h2>9. Indemnity</h2>
    <p>
      You agree to indemnify and hold harmless AJILE STUDIO from any claims, losses, or expenses arising from your breach of these Terms or your misuse of the Service.
    </p>

    <h2>10. Third-party links</h2>
    <p>
      The Service may link to third-party websites. We are not responsible for their content or practices.
    </p>

    <h2>11. Termination</h2>
    <p>
      We may modify, suspend, or discontinue the Service (or any part) at any time. These Terms remain in effect until terminated.
    </p>

    <h2>12. Governing law and jurisdiction</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the <strong>laws of Malaysia</strong>. Any dispute arising out of or in connection with these Terms or the Service shall be submitted to the <strong>exclusive jurisdiction of the courts of Malaysia</strong>.
    </p>

    <h2>13. Changes</h2>
    <p>
      We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance.
    </p>

    <h2>14. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      See also: <Link to="/privacy">Privacy Policy</Link> · <Link to="/disclaimer">Disclaimer</Link>
    </p>
  </>
);

const BahasaContent = () => (
  <>
    <p style={{ fontStyle: "italic", fontSize: "0.88rem", color: "var(--ink-3)", marginBottom: "2rem" }}>
      Nota: Versi Bahasa Inggeris dokumen ini adalah versi rasmi yang mengawal. Terjemahan Bahasa Malaysia ini disediakan untuk kemudahan rujukan; sekiranya terdapat sebarang percanggahan, versi Bahasa Inggeris akan terpakai.
    </p>

    <p>
      Terma ini mengawal penggunaan Ruma (ruma.casa) oleh anda (<strong>"Perkhidmatan"</strong>), yang dikendalikan oleh AJILE STUDIO (No. Pendaftaran Syarikat 202503327530) (<strong>"AJILE"</strong>, <strong>"kami"</strong>). Dengan mengakses atau menggunakan Perkhidmatan, anda bersetuju dengan Terma ini. Jika anda tidak bersetuju, sila jangan gunakan Perkhidmatan ini.
    </p>

    <h2>1. Perkhidmatan</h2>
    <p>
      Ruma ialah satu set kalkulator pelaburan hartanah dan alat perbandingan yang direka untuk pasaran hartanah Malaysia. Perkhidmatan ini disediakan untuk <strong>tujuan maklumat dan pendidikan sahaja</strong>.
    </p>

    <h2>2. Kelayakan</h2>
    <p>
      Anda mestilah berumur sekurang-kurangnya 18 tahun dan mampu memeterai kontrak yang mengikat di bawah Akta Kontrak 1950 Malaysia bagi menggunakan Perkhidmatan ini.
    </p>

    <h2>3. Penggunaan yang dibenarkan</h2>
    <p>Anda bersetuju untuk <strong>tidak</strong>:</p>
    <ul>
      <li>menggunakan Perkhidmatan untuk sebarang tujuan yang menyalahi undang-undang atau yang melanggar mana-mana undang-undang Malaysia;</li>
      <li>melakukan kejuruteraan terbalik, dekompilasi, mengikis (scraping), atau cuba mengekstrak kod sumber atau data asas Perkhidmatan, kecuali setakat yang dibenarkan oleh undang-undang;</li>
      <li>mengganggu, menjejaskan, atau mengenakan beban yang tidak munasabah ke atas Perkhidmatan atau infrastrukturnya;</li>
      <li>menggunakan kaedah automatik (bot, perangkak) bagi mengakses Perkhidmatan tanpa persetujuan bertulis kami terlebih dahulu;</li>
      <li>memuat naik atau menghantar perisian hasad, kod berbahaya, atau maklumat yang mengelirukan;</li>
      <li>menyamar sebagai mana-mana orang atau entiti, atau memberikan keterangan palsu tentang gabungan anda;</li>
      <li>menggunakan Perkhidmatan untuk memberikan nasihat kewangan, pelaburan, atau undang-undang yang dikawal selia kepada pihak ketiga.</li>
    </ul>
    <p>Kami boleh menggantung atau menamatkan akses anda pada bila-bila masa atas sebab pelanggaran Terma ini.</p>

    <h2>4. Harta intelek</h2>
    <p>
      Semua kandungan, perisian, reka bentuk, kalkulator, metodologi, cap dagangan, dan penjenamaan pada Perkhidmatan adalah dimiliki oleh AJILE STUDIO atau pemberi lesennya, dan dilindungi oleh undang-undang hak cipta, cap dagangan, serta undang-undang harta intelek Malaysia yang lain.
    </p>
    <p>
      Anda diberikan lesen yang terhad, tidak eksklusif, tidak boleh dipindah milik, dan boleh dibatalkan, untuk mengakses dan menggunakan Perkhidmatan bagi kegunaan peribadi bukan komersial. Output yang anda hasilkan daripada kalkulator menggunakan input anda sendiri (cth. laporan PDF yang dieksport) boleh digunakan untuk tujuan peribadi atau perniagaan dalaman anda sendiri; anda tidak boleh menjual semula atau mengedar semula Perkhidmatan atau komponen asasnya.
    </p>

    <h2>5. Akaun</h2>
    <p>
      Maklumat yang anda kemukakan kepada kami (termasuk semasa membuka akaun) mestilah tepat dan sentiasa dikemas kini. Anda bertanggungjawab untuk merahsiakan maklumat log masuk anda dan bagi semua aktiviti yang berlaku di bawah akaun anda. Sila maklumkan kepada kami dengan segera di <a href="mailto:inbox@ajile.team">inbox@ajile.team</a> sekiranya anda percaya akaun anda telah diakses tanpa kebenaran anda.
    </p>
    <p>
      <strong>Log masuk dengan Google.</strong> Sekiranya anda membuka atau mengakses akaun anda menggunakan "Log masuk dengan Google", kami menerima data Akaun Google yang terhad seperti yang diterangkan dalam Seksyen 4 <Link to="/privacy">Dasar Privasi</Link> kami. Penggunaan dan pemindahan maklumat yang diterima oleh Ruma.casa daripada API Google kepada mana-mana aplikasi lain akan mematuhi <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Dasar Data Pengguna Perkhidmatan API Google</a>, termasuk keperluan Penggunaan Terhad (Limited Use). Anda boleh menarik balik akses kami pada bila-bila masa di <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.
    </p>

    <h2>6. Langganan, yuran, dan bayaran balik</h2>

    <h3>6.1 Pelan</h3>
    <p>
      Pelan Starter disediakan secara percuma, dengan ciri-ciri seperti yang diterangkan pada Perkhidmatan. Pelan <strong>Pro</strong> dikenakan bayaran <strong>RM 19.99 sebulan</strong>. Ciri-ciri setiap pelan diterangkan pada halaman harga kami dan boleh diubah suai dari semasa ke semasa seiring dengan perkembangan Perkhidmatan.
    </p>

    <h3>6.2 Percubaan percuma</h3>
    <p>
      Pelanggan Pro baharu ditawarkan <strong>percubaan percuma selama satu (1) bulan</strong>. Kaedah pembayaran yang sah diperlukan untuk memulakan percubaan tersebut. <strong>Melainkan anda membatalkan sebelum tempoh percubaan tamat, langganan anda akan bertukar secara automatik kepada langganan Pro berbayar dan caj bulanan pertama sebanyak RM 19.99 akan dikenakan pada hari tempoh percubaan tamat.</strong> Percubaan ini terhad kepada satu bagi setiap individu dan setiap akaun. Kami boleh menahan, memendekkan, atau membatalkan percubaan sekiranya kami mempunyai sebab munasabah untuk mempercayai ia disalahgunakan, termasuk melalui pembukaan berbilang akaun.
    </p>

    <h3>6.3 Pembaharuan automatik</h3>
    <p>
      Langganan Pro diperbaharui <strong>secara automatik setiap bulan</strong> pada harga semasa sehingga dibatalkan. Caj dikenakan pada hari yang sama setiap bulan seperti caj berbayar pertama anda; sekiranya sesuatu bulan tidak mempunyai tarikh tersebut, caj akan dikenakan pada hari terakhir bulan berkenaan.
    </p>

    <h3>6.4 Pembatalan</h3>
    <p>
      Anda boleh membatalkan pada bila-bila masa melalui tetapan akaun anda. Pembatalan berkuat kuasa pada akhir tempoh pengebilan semasa: anda kekal mempunyai akses Pro sehingga tempoh tersebut tamat, selepas itu akaun anda akan kembali kepada pelan Starter. Pembatalan tidak melayakkan anda untuk bayaran balik atau kredit pro-rata bagi baki tempoh tersebut.
    </p>

    <h3>6.5 Tiada bayaran balik</h3>
    <p>
      <strong>Semua yuran tidak boleh dikembalikan.</strong> Ini termasuk tempoh pengebilan yang tidak lengkap, tempoh anda tidak menggunakan Perkhidmatan, dan jumlah yang telah dibayar sebelum anda membatalkan, menurunkan taraf pelan, atau akses anda ditamatkan atas sebab pelanggaran Terma ini. Kami tidak mempunyai apa-apa kewajipan untuk memberikan bayaran balik atau kredit, walaupun kami boleh memilih untuk berbuat demikian mengikut budi bicara mutlak kami (contohnya, dalam kes caj berganda atau caj tersilap).
    </p>
    <p>
      Tiada apa-apa dalam klausa ini yang mengecualikan, menyekat, atau mengubah suai sebarang hak atau remedi yang tidak boleh dikecualikan secara sah di bawah undang-undang Malaysia, termasuk di bawah <strong>Akta Perlindungan Pengguna 1999</strong>, di mana berkenaan.
    </p>

    <h3>6.6 Pemprosesan pembayaran</h3>
    <p>
      Pembayaran diproses oleh <strong>Stripe</strong>. Penggunaan Stripe oleh anda adalah tertakluk kepada terma dan dasar privasi Stripe, dan anda memberi kebenaran kepada Stripe untuk mengenakan caj pada kaedah pembayaran anda bagi pihak kami. Kami tidak menerima atau menyimpan butiran penuh kad anda. Sila rujuk <Link to="/privacy">Dasar Privasi</Link> kami bagi mengetahui cara maklumat berkaitan pembayaran dikendalikan.
    </p>

    <h3>6.7 Pembayaran gagal</h3>
    <p>
      Sekiranya sesuatu pembayaran gagal, kami (atau Stripe) boleh mencuba semula caj tersebut. Jika pembayaran masih tidak berjaya dikutip dalam tempoh <strong>tujuh (7) hari</strong> dari tarikh matang, kami boleh menggantung akses Pro anda atau menurunkan taraf akaun anda kepada pelan Starter tanpa notis lanjut.
    </p>

    <h3>6.8 Perubahan harga</h3>
    <p>
      Kami boleh mengubah harga kami. Bagi pelanggan sedia ada, kami akan memberikan notis sekurang-kurangnya <strong>tiga puluh (30) hari</strong> melalui e-mel atau melalui Perkhidmatan, dan harga baharu akan terpakai bermula kitaran pengebilan pertama selepas tempoh notis tamat. Sekiranya anda tidak bersetuju dengan perubahan harga, anda boleh membatalkan sebelum ia berkuat kuasa; penggunaan berterusan pelan berbayar selepas tarikh tersebut merupakan penerimaan terhadap harga baharu.
    </p>

    <h2>7. Penafian jaminan</h2>
    <p>
      Perkhidmatan ini disediakan <strong>"sebagaimana adanya" dan "sebagaimana tersedia"</strong>, tanpa apa-apa jaminan, sama ada nyata atau tersirat, setakat maksimum yang dibenarkan oleh undang-undang Malaysia. Kami tidak menjamin bahawa Perkhidmatan akan beroperasi tanpa gangguan, bebas ralat, atau bahawa output kalkulator adalah tepat atau sesuai untuk apa-apa tujuan tertentu. Sila rujuk <Link to="/disclaimer">Penafian</Link> kami untuk butiran lanjut.
    </p>

    <h2>8. Had liabiliti</h2>
    <p>
      Setakat maksimum yang dibenarkan di bawah undang-undang Malaysia, AJILE STUDIO, pengarah, pekerja, dan sekutunya tidak akan menanggung liabiliti bagi sebarang ganti rugi tidak langsung, sampingan, khas, berbangkit, atau teladan, atau sebarang kehilangan keuntungan, hasil, data, atau peluang perniagaan, yang timbul daripada atau berkaitan dengan penggunaan Perkhidmatan oleh anda. Jumlah liabiliti agregat kami tidak akan melebihi jumlah (jika ada) yang anda telah bayar kepada kami dalam tempoh 12 bulan sebelum peristiwa yang menimbulkan tuntutan, atau <strong>RM 100</strong>, mengikut yang lebih rendah.
    </p>
    <p>
      Tiada apa-apa dalam Terma ini mengecualikan liabiliti yang tidak boleh dikecualikan secara sah di bawah undang-undang Malaysia (termasuk di bawah Akta Perlindungan Pengguna 1999, di mana berkenaan).
    </p>

    <h2>9. Tanggung rugi</h2>
    <p>
      Anda bersetuju untuk menanggung rugi dan melindungi AJILE STUDIO daripada sebarang tuntutan, kerugian, atau perbelanjaan yang timbul daripada pelanggaran Terma ini oleh anda atau penyalahgunaan Perkhidmatan oleh anda.
    </p>

    <h2>10. Pautan pihak ketiga</h2>
    <p>
      Perkhidmatan ini mungkin memautkan kepada laman web pihak ketiga. Kami tidak bertanggungjawab terhadap kandungan atau amalan mereka.
    </p>

    <h2>11. Penamatan</h2>
    <p>
      Kami boleh mengubah suai, menggantung, atau menghentikan Perkhidmatan (atau mana-mana bahagiannya) pada bila-bila masa. Terma ini kekal berkuat kuasa sehingga ditamatkan.
    </p>

    <h2>12. Undang-undang yang mengawal dan bidang kuasa</h2>
    <p>
      Terma ini hendaklah dikawal oleh dan ditafsirkan mengikut <strong>undang-undang Malaysia</strong>. Sebarang pertikaian yang timbul daripada atau berkaitan dengan Terma ini atau Perkhidmatan hendaklah dikemukakan kepada <strong>bidang kuasa eksklusif mahkamah Malaysia</strong>.
    </p>

    <h2>13. Perubahan</h2>
    <p>
      Kami mungkin mengemas kini Terma ini dari semasa ke semasa. Penggunaan berterusan terhadap Perkhidmatan selepas perubahan berkuat kuasa merupakan penerimaan terhadap perubahan tersebut.
    </p>

    <h2>14. Hubungi</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      E-mel: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      Lihat juga: <Link to="/privacy">Dasar Privasi</Link> · <Link to="/disclaimer">Penafian</Link>
    </p>
  </>
);

export default function Terms() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Terms of Service", bm: "Terma Perkhidmatan" }}
      lastUpdated="5 September 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}

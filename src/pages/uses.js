import Link from '../components/link';
import Head from 'next/head';

export default () => (
  <>
    <Head>
      <title>Uses - Fredrik Forsmo</title>
    </Head>
    <div className="container mx-auto">
      <div className="pt-32">
        <div className="flex flex-wrap content-center min-h-screen">
          <div className="w-11/12 lg:w-2/4 m-auto">
            <h1 className="text-6xl pb-5 text-center">Uses 🤖</h1>

            <div className="text-lg mb-5">
              <h3 className="text-2xl">Website</h3>
              <p>This website is built with <Link to='https://nextjs.org'>Next.js</Link> and <Link to='https://tailwindcss.com/'>Tailwind CSS</Link> and hosted on <Link to='https://pages.github.com/'>GitHub Pages</Link>.</p>
            </div>

            <div className="text-lg mb-5">
              <h3 className="text-2xl">Editor</h3>
              <ul className="list-disc mt-2 ml-5">
                <li><Link to='https://code.visualstudio.com/'>Visual Studio Code</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit'>Tomorrow Night theme</Link></li>
                <li>Menlo font, 11px</li>
              </ul>
            </div>

            <div className="text-lg mb-5">
              <h3 className="text-2xl">Terminal</h3>
              <ul className="list-disc mt-2 ml-5">
                <li><Link to='https://iterm2.com/'>iTerm 2</Link></li>
                <li><Link to='https://github.com/oskarkrawczyk/honukai-iterm-zsh'>Honukai theme</Link></li>
                <li><Link to='https://github.com/frozzare/dotfiles'>My dotfiles</Link></li>
                <li>Menlo font, 11px</li>
              </ul>
            </div>

            <div className="text-lg mb-5">
              <h3 className="text-2xl">Visual Studio Code Extensions</h3>
              <ul className="list-disc mt-2 ml-5">
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx'>TwentyChung.jsx</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=be5invis.toml'>be5invis.toml</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets'>burkeholland.simple-react-snippets</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify'>darkriszty.markdown-table-prettify</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code'>Dart-Code.dart-code</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter'>Dart-Code.flutter</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support'>DigitalBrainstem.javascript-ejs-support</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'>eamodio.gitlens</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig'>EditorConfig.EditorConfig</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'>esbenp.prettier-vscode</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet'>FallenMax.mithril-emmet</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug'>felixfbecker.php-debug</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=jcbuisson.vue'>jcbuisson.vue</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode'>kumar-harsh.graphql-for-vscode</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json'>mohsen1.prettify-json</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker'>ms-azuretools.vscode-docker</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-python.python'>ms-python.python</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account'>ms-vscode.azure-account</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go'>ms-vscode.Go</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug2'>ms-vscode.node-debug2</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit'>ms-vscode.Theme-TomorrowKit</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native'>msjsdiag.vscode-react-native</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker'>neilbrayfield.php-docblocker</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml'>redhat.vscode-yaml</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons'>vscode-icons-team.vscode-icons</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=whatwedo.twig'>whatwedo.twig</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=wholroyd.HCL'>wholroyd.HCL</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost'>wix.vscode-import-cost</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.TabSpacer'>yuichinukiyama.TabSpacer</Link></li>
                <li><Link to='https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3'>zxh404.vscode-proto3</Link></li>              </ul>
            </div>

            <div className="text-lg mb-5">
              <h3 className="text-2xl">Chrome Extensions</h3>
              <ul className="list-disc mt-2 ml-5">
                <li><Link to='https://chrome.google.com/webstore/detail/1password-extension-deskt/aomjjhallfgjeglblehebfpbcfeobpgk'>1Password</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni'>Accessibility Insights for Web</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl'>Checkbot: SEO, Web Speed & Security Tester</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp'>ColorZilla</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl'>Full Page Screen Capture</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/glyf/kklidjoiedcocpkddfnknenpkpcdalnp'>Glyf</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc'>JSONView</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'>React Developer Tools</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm'>uBlock Origin</Link></li>
                <li><Link to='https://chrome.google.com/webstore/detail/xv-%E2%80%94-xml-viewer/eeocglpgjdpaefaedpblffpeebgmgddk'>XV — XML Viewer</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
);

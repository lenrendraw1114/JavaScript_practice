<?php get_header(); ?>

    <div class="main-content">
      <section class="hero"><!-- ファーストビュー開始 -->
        <div class="hero__inner">
          <div class="hero__headline">
            <h1 class="hero__title">
              理想を、カタチに
            </h1>
            <p class="hero__text">
              住宅購入は一生に一度あるかないかの、大きな買い物です。<br>青牡丹工務店は、最高の家造りを行うスペシャリスト集団です。
            </p>
          </div><!-- /.hero__title -->
          <div class="hero__info">
            <p>
              scroll down
            </p>
          </div><!-- /.hero__info -->
          <div class="vertical-line">
          </div><!-- 縦線を追加 -->
        </div><!-- /.hero__inner -->
      </section><!-- ファーストビュー終了 -->

      <section class="about fade-section"><!-- 私達について開始 -->
        <div class="about__inner">
          <div class="about__slide">
            <div class="about__slide-inner">
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_work.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_office.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_design.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
              <!-- 無限ループを実現するために同じ画像セットをもう一度追加 -->
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_work.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_office.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
              <div class="about__slide-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/about-us_slide_design.png" alt="aboutのスライド画像です。">
              </div><!-- /.about__slide-image -->
            </div><!-- /.about__slide-inner -->
          </div><!-- /.about__slide -->
          <div class="about__attention">
            <div class="about__thumbnail">
              <img src="<?php echo get_template_directory_uri(); ?>/img/TOP_about-us_illustration.png" alt="aboutのイメージ画像です。">
            </div><!-- /.about__thumbnail -->
            <div class="about__philosophy">
              <h3 class=" philosophy__text philosophy__text_blue">
                丁寧な家造り<span>で</span>
              </h3>
              <h3 class="philosophy__text philosophy__text_black">
                理想を現実に
              </h3>
            </div><!-- /.about__philosophy -->
          </div><!-- /.about__attention -->
          <div class="about__headline headline range">
            <h2 class="headline__title">
              私達について
            </h2><!-- /.headline__title -->
            <p class="headline__backtitle">
              ABOUT
            </p><!-- /.headline__backtitle -->
            <div class="about__headline-text">
              <p>「丁寧な家造りで、理想を現実に」。これは私たちの約束です。青牡丹工務店が手がける家は、ただの建物ではありません。それは、お客様の暮らしや夢を支える、信頼と品質に満ちた温かな空間です。</p>
            </div><!-- /.about__headline-text -->
            <div class="about__linkbox linkbox">
              <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="linkbox__area">
                <p class="link-title">Read More</p>
                <p class="link-button">⚫︎</p>
              </a>
            </div><!-- /.about__linkbox linkbox -->
          </div><!-- /.about__headline headline -->
        </div><!-- /.about__inner -->
      </section><!-- 私達について終了 -->

      <!-- 事業内容開始 -->
      <section class="service fade-section">
        <div class="service__inner range">
          <div class="service__headline headline">
            <h2 class="headline__title">
              事業内容
            </h2><!-- /.headline__title -->
            <p class="headline__backtitle">
              SERVICE
            </p><!-- /.headline__backtitle -->
          </div><!-- /.service__headline headline -->
          <div class="service__image">
            <img src="<?php echo get_template_directory_uri(); ?>/img/TOP_service_illustration.png" alt="事業案内のイメージ画像です。">
          </div><!-- /.service__image -->
          <div class="service__content">
            <div class="service__content-box">
              <div class="service__content-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/residential_construction_renovation.png" alt="事業案内のイメージ画像です。">
              </div><!-- /.service__content-image -->
              <div class="service__content-writing service__content-writing_right">
                <p class="service__content-number service__content-number_right">
                    01
                </p><!-- /.service__content-number -->
                <p class="service__content-title">
                  住宅建築・リフォーム
                </p><!-- /.service__content-title -->
                <p class="service__content-text">
                  注文住宅では、お客様のニーズや希望に合わせて、オーダーメイドの家を提供します。私たちは、建物の設計から完成までのプロセスで、お客様と緊密に連携し、理想の暮らしを実現するための最適な解決策を提案します。
                </p><!-- /.service__content-text -->
                <div class="service__linkbox linkbox">
                  <a href="<?php echo esc_url( home_url( '/service#home-build' ) ); ?>" class="linkbox__area">
                    <p class="link-title">Read More</p>
                    <p class="link-button">⚫︎</p>
                  </a>
                </div><!-- /.service__linkbox linkbox -->
              </div><!-- /.service__content-writing -->
            </div><!-- /.service__content-box -->
            <div class="service__content-box">
              <div class="service__content-writing service__content-writing_left">
                <p class="service__content-number service__content-number_left">
                    02
                </p><!-- /.service__content-number -->
                <p class="service__content-title">
                  法人新築・リフォーム
                </p><!-- /.service__content-title -->
                <p class="service__content-text">
                  法人新築では、商業施設やオフィスビル、工場など、さまざまなニーズに応じた建物の新築を手がけています。お客様のビジネスの要件やイメージに合わせて、効率的で機能的な建物を設計・施工します。
                </p><!-- /.service__content-text -->
                <div class="service__linkbox linkbox">
                  <a href="<?php echo esc_url( home_url( '/service#office-build' ) ); ?>" class="linkbox__area">
                    <p class="link-title">Read More</p>
                    <p class="link-button">⚫︎</p>
                  </a>
                </div><!-- /.service__linkbox linkbox -->
              </div><!-- /.service__content-writing -->
              <div class="service__content-image service__content-image_right">
                <img src="<?php echo get_template_directory_uri(); ?>/img/corporate_new_build_renovation.png" alt="事業案内のイメージ画像です。">
              </div><!-- /.service__content-image -->
            </div><!-- /.service__content-box -->
            <div class="service__content-box">
              <div class="service__content-image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/public_construction.png" alt="事業案内のイメージ画像です。">
              </div><!-- /.service__content-image -->
              <div class="service__content-writing service__content-writing_right">
                <p class="service__content-number service__content-number_right">
                    03
                </p><!-- /.service__content-number -->
                <p class="service__content-title">
                  公共工事
                </p><!-- /.service__content-title -->
                <p class="service__content-text">
                  公共工事では、道路や橋梁、公共施設など、地域社会に欠かせないインフラや施設の建設・改修を行います。私たちは、公共の福祉と安全を考慮しながら、厳格な規制や基準に適合した施工を行います。
                </p><!-- /.service__content-text -->
                <div class="service__linkbox linkbox">
                  <a href="<?php echo esc_url( home_url( '/service#public-work' ) ); ?>" class="linkbox__area">
                    <p class="link-title">Read More</p>
                    <p class="link-button">⚫︎</p>
                  </a>
                </div><!-- /.service__linkbox linkbox -->
              </div><!-- /.service__content-writing -->
            </div><!-- /.service__content-box -->
          </div><!-- /.service__content -->
        </div><!-- /.service__inner -->
      </section><!-- /.service -->

      <section id="news fade-section" class="news"><!-- お知らせ開始 -->
        <div class="news__inner range">
          <div class="news__headline headline">
            <h2 class="headline__title">お知らせ</h2>
            <p class="headline__backtitle">NEWS</p>
          </div>
          <div class="news__content">
            <!-- 最初のお知らせボックス -->
            <div id="newsContentBox1" class="news__content-box">
              <div class="news__content-writing">
                <div class="news__content-info">
                  <p class="news__content-topic">イベント情報</p>
                  <p class="news__content-date">2024.06.03</p>
                </div>
                <p class="news__content-text">住宅設計相談会を実施します。弊社建築士と将来の家造りを真剣に考えませんか？</p>
              </div>
              <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" alt="矢印" class="news__content-arrow">
            </div>
      
            <!-- 2番目のお知らせボックス -->
            <div id="newsContentBox2" class="news__content-box">
              <div class="news__content-writing">
                <div class="news__content-info">
                  <p class="news__content-topic">イベント情報</p>
                  <p class="news__content-date">2024.05.23</p>
                </div>
                <p class="news__content-text">安全管理研修を行いました。</p>
              </div>
              <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" alt="矢印" class="news__content-arrow">
            </div>
      
            <!-- 3番目のお知らせボックス -->
            <div id="newsContentBox3" class="news__content-box">
              <div class="news__content-writing">
                <div class="news__content-info">
                  <p class="news__content-topic news__content-update">更新情報</p>
                  <p class="news__content-date">2024.05.01</p>
                </div>
                <p class="news__content-text">ホームページをリニューアルしました！！</p>
              </div>
              <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" alt="矢印" class="news__content-arrow">
            </div>
          </div>
        </div>
      </section>
      
      <!-- お知らせモーダル1 -->
      <div id="mask1" class="hidden"></div>
      <section id="modal1" class="hidden">
        <div class="close-button" data-target="modal1" data-mask="mask1">
          <span class="line1"></span>
          <span class="line2"></span>
        </div>
        <div class="news__content-writing">
          <div class="news__content-info">
            <p class="news__content-topic">イベント情報</p>
            <p class="news__content-date">2024.06.03</p>
          </div>
          <p class="news__content-text news__content-text_modal">住宅設計相談会を実施します。弊社建築士と将来の家造りを真剣に考えませんか？</p>
        </div>
        <div class="news__content-imaga">
          <img src="<?php echo get_template_directory_uri(); ?>/img/news_housing_design_consultation.png" alt="住宅設計相談会を実施します。">
        </div><!-- /.news__content-imaga -->
        <div class="news__content-sentence">
          <p>みなさま、こんにちは！弊社では、住宅設計相談会を開催することになりました！将来の家造りを真剣に考える皆様、ぜひご参加ください。</p>
          <br>
          <p>家を建てるというのは、人生の中で最も重要なイベントの一つです。そのためには、慎重な計画と適切なアドバイスが欠かせません。そこで、弊社の建築士が皆様のお悩みやご要望をお聞きし、最適な家づくりの提案をさせていただきます。</p>
          <br>
          <p>住宅設計相談会では、以下のようなことについてご相談いただけます：</p>
          <br>
          <ul>
            <li>理想の間取りやデザインについて</li>
            <li>予算や資金計画の相談</li>
            <li>土地選びや法的手続きについてのアドバイス</li>
            <li>新しい住宅技術や省エネルギーの取り入れ方について</li>
          </ul>
          <br>
          <p>また、相談会に参加いただいた方には、特別なサービスやプレゼントもご用意しています。家造りに関するご質問や疑問点がある方は、ぜひこの機会にお気軽にご参加ください。</p>
          <br>
          <p>弊社の建築士が、皆様のご要望にお応えし、一緒に理想の家づくりを実現するお手伝いをさせていただきます。ぜひお越しください！</p>
        </div><!-- /.news__content-sentence -->
                <div class="close linkbox" data-target="modal1" data-mask="mask1">
          <div class="linkbox__area">
            <p class="link-title">閉じる</p>
            <p class="link-button">⚫︎</p>
          </div>
        </div>
      </section>
      
      <!-- お知らせモーダル2 -->
      <div id="mask2" class="hidden"></div>
      <section id="modal2" class="hidden">
        <div class="close-button" data-target="modal2" data-mask="mask2">
          <span class="line1"></span>
          <span class="line2"></span>
        </div>
        <div class="news__content-writing">
          <div class="news__content-info">
            <p class="news__content-topic">イベント情報</p>
            <p class="news__content-date">2024.05.23</p>
          </div>
          <p class="news__content-text news__content-text_modal">安全管理研修を行いました。</p>
        </div>
        <div class="news__content-imaga">
          <img src="<?php echo get_template_directory_uri(); ?>/img/news_safety_management_training.png" alt="安全管理研修を行いました。">
        </div><!-- /.news__content-imaga -->
        <div class="news__content-sentence">
          <p>弊社では、従業員の安全意識向上と安全管理の強化を目的として、安全管理研修を実施しました。この研修では、従業員全員が安全な作業環境を確保するための重要性や具体的な対策について学び、より安全な職場づくりに向けた取り組みを行いました。</p>
          <br>
          <p>研修では、以下の内容を中心に学びました：</p>
          <br>
          <ul>
            <li>作業中の事故や災害を防ぐための基本的な安全ルールや手順</li>
            <li>安全装置や保護具の正しい使用方法と管理について</li>
            <li>作業現場での危険予知や事故対応のためのトレーニング</li>
          </ul>
          <br>
          <p>また、実際の事例やケーススタディを通じて、事故や災害が発生した際の適切な対応方法についても学びました。参加者全員が積極的に議論し、知識を深めることができました。</p>
          <br>
          <p>安全管理研修を通じて、従業員一人ひとりが安全に対する意識を高め、安全な職場環境の実現に向けて一層の努力をすることを確認しました。今後も定期的に研修を実施し、安全管理の徹底を図ってまいります。</p>
        </div><!-- /.news__content-sentence -->
        <div class="close linkbox" data-target="modal2" data-mask="mask2">
          <div class="linkbox__area">
            <p class="link-title">閉じる</p>
            <p class="link-button">⚫︎</p>
          </div>
        </div>
      </section>
      
      <!-- お知らせモーダル3 -->
      <div id="mask3" class="hidden"></div>
      <section id="modal3" class="hidden">
        <div class="close-button" data-target="modal3" data-mask="mask3">
          <span class="line1"></span>
          <span class="line2"></span>
        </div>
        <div class="news__content-writing">
          <div class="news__content-info">
            <p class="news__content-topic">更新情報</p>
            <p class="news__content-date">2024.05.01</p>
          </div>
          <p class="news__content-text news__content-text_modal">ホームページをリニューアルしました！！</p>
        </div>
        <div class="news__content-imaga">
          <img src="<?php echo get_template_directory_uri(); ?>/img/news_website_renewal.png" alt="ホームページをリニューアルしました！！">
        </div><!-- /.news__content-imaga -->
        <div class="news__content-sentence">
          <p>弊社は、お客様により良いサービスを提供するため、ホームページをリニューアルいたしました。新しいデザインと使いやすさを追求し、お客様が情報をより簡単に見つけられるように工夫しました。</p>
          <br>
          <p>新しいホームページでは、以下のような改善点がございます：</p>
          <br>
          <ul>
            <li>モダンでスタイリッシュなデザインにより、情報の見やすさと視覚的な魅力を向上</li>
            <li>より直感的で分かりやすいナビゲーションメニューにより、目的の情報へのアクセスがスムーズになりました</li>
            <li>より多くの情報やサービスを掲載し、お客様のニーズに合った情報を提供するようになりました</li>
            <li>モバイルフレンドリーなデザインで、スマートフォンやタブレットからも快適に閲覧できます</li>
          </ul>
          <br>
          <p>弊社のホームページは、お客様とのコミュニケーションや情報提供の重要なツールです。より使いやすく、わかりやすいホームページを提供することで、お客様との良好な関係を築いていくことが目標です。</p>
          <br>
          <p>ぜひ、新しいホームページをご覧いただき、お客様のご意見やご要望をお聞かせください。今後もお客様により良いサービスを提供できるよう努めてまいります。</p>
        </div><!-- /.news__content-sentence -->
        <div class="close linkbox" data-target="modal3" data-mask="mask3">
          <div class="linkbox__area">
            <p class="link-title">閉じる</p>
            <p class="link-button">⚫︎</p>
          </div>
        </div>
      </section>

<?php get_footer(); ?> 
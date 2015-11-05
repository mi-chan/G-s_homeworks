<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style02.css">
    <link rel="stylesheet" href="jquery.bxslider/jquery.bxslider.css" />
</head>
<body>

    <section class="main_visual">
        <div class="inner">
            <p class="catch text-center">あなたと相性が良い娘は?<span class="catch-small">あなたにぴったりなμ'sメンバー見つけます！</span></p>
        </div>
    </section>

    <section class="feature contents-box">
        <div class="inner">
            <h2 class="section-title text-center">
                <span class="section-title__white">introduce</span><span class="section-title-ja text-center">キャラクター紹介</span>
            </h2>
            <ul class="bxslider">
              <li><img src="jquery.bxslider/images/honoka_slide.png" title="高坂穂乃果"/></li>
              <li><img src="jquery.bxslider/images/umi_slide.png" title="園田海未"/></li>
              <li><img src="jquery.bxslider/images/kotori_slide.png" title="南ことり"/></li>
              <li><img src="jquery.bxslider/images/maki_slide.png" title="西木野真姫"/></li>
              <li><img src="jquery.bxslider/images/hanayo_slide.png" title="小泉花陽"/></li>
              <li><img src="jquery.bxslider/images/rin_slide.png" title="星空凛"/></li>
              <li><img src="jquery.bxslider/images/eli_slide.png" title="絢瀬絵理"/></li>
              <li><img src="jquery.bxslider/images/nozomi_slide.png" title="東條希"/></li>
              <li><img src="jquery.bxslider/images/nico_slide.png" title="矢澤にこ"/></li>
            </ul>
            <!-- <ul class="list-feature">
                <li><img src="img/point1.png" alt=""></li>
                <li><img src="img/point2.png" alt=""></li>
                <li><img src="img/point3.png" alt=""></li>
            </ul> -->
        </div>
    </section>

    <section class="entry-form">
      <form action="confirm_enq.php" method="post" class="form-module">
      <div class="contents-heading bg-orange">
          <h2 class="section-title text-center">
              <span class="section-title">profile</span><span class="section-title__white section-title-ja text-center">あなたの情報を入力してください</span></h2>
      </div>
      <div class="inner contents-box">
        <table class="form-module01">
            <tr>
                <td class="form-text">氏名:</td>
                <td><input type="text" name="name" value="<?php if(isset($_SESSION['name'])){ echo $_SESSION['name']; } ?>" required/></td>
            </tr>
            <tr>
                <td class="form-text">フリガナ:</td>
                <td><input type="text" name="kana" value="<?php if(isset($_SESSION['kana'])){ echo $_SESSION['kana']; } ?>" required></td>
            </tr>
            <tr>
                <td class="form-text">年齢:</td>
                <td><input type="text" name="age" value="<?php if(isset($_SESSION['age'])){ echo $_SESSION['age']; } ?>" required></td>
            </tr>
            <tr>
                <td class="form-text">E-mail:</td>
                <td><input type="email" name="email" value="<?php if(isset($_SESSION['email'])){ echo $_SESSION['email']; } ?>" required></td>
            </tr>
            <tr>
                <td class="form-text">性別:</td>
                <td><input type="radio" name="sex" value="男性" id="male" checked required><label for="male">男性</label></td>
                <td><input type="radio" name="sex" value="女性" id="female" required><label for="female">女性</label></td>
            </tr>
          </table>
      </div>
        <div class="contents-heading bg-orange">
            <h2 class="section-title text-center">
                <span class="section-title">Select</span><span class="section-title__white section-title-ja text-center">あなたの好みを選んでね！</span></h2>
        </div>
        <div class="inner contents-box" id = "serector">
          <div class = "division">
                <table>
                    <tr>
                        <td class="text-center characters01">性格</td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="honoka01"><input type="radio" name="character" value="ほのか" id="honoka01" required>マイペース、情熱家、ポジティブ、努力家、<br>&nbsp;&nbsp;&nbsp;脳筋、リーダー気質（ほのか）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="eli01"><input type="radio" name="character" value="えり" id="eli01" required>真面目、天才肌、どこか抜けている所がある<br>&nbsp;&nbsp;（えり）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="umi01"><input type="radio" name="character" value="うみ" id="umi01" required>生真面目、恥ずかしがり屋、冷静、おしとやか<br>&nbsp;&nbsp;&nbsp;ツッコミ担当（うみ）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="kotori01"><input type="radio" name="character" value="ことり" id="kotori01" required>おっとり、天然、おしゃれ好き<br>&nbsp;&nbsp;（ことり）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="rin01"><input type="radio" name="character" value="りん" id="rin01" required>天真爛漫、元気っ子、感情豊<br>&nbsp;&nbsp;（りん）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="maki01"><input type="radio" name="character" value="まき" id="maki01" required>クール、戦略家、プライド高い、負けず嫌い、<br>&nbsp;&nbsp;&nbsp;ツンデレ（まき）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="nozomi01"><input type="radio" name="character" value="のぞみ" id="nozomi01" required>潤滑油、母親気質、寂しがり屋<br>&nbsp;&nbsp;&nbsp;（のぞみ）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="hanayo01"><input type="radio" name="character" value="はなよ" id="hanayo01" required>平和主義、癒し系、臆病<br>&nbsp;&nbsp;&nbsp;（はなよ）</label></td>
                    </tr>
                    <tr>
                        <td class="umi"><label for="nico01"><input type="radio" name="character" value="にこ" id="nico01" required>努力家、芯が強い、人情家、探求家、理想家、<br>&nbsp;&nbsp;&nbsp;自分と他人に厳しい（にこ）</label></td>
                    </tr>
                </table>
                <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
            <!-- </form> -->
          </div>

        <div class = "division">
          <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
              <table>
                  <tr>
                      <td class="text-center characters01">容姿</td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="honoka02"><input type="radio" name="looks" value="ほのか" id="honoka02" required>セミロング&特徴的なサイドテール（ほのか）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="kotori02"><input type="radio" name="looks" value="ことり" id="kotori02" required>ロングヘアー&頭にとさか型の癖っ毛（ことり）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="hanayo02"><input type="radio" name="looks" value="はなよ" id="hanayo02" required>ショートボブ（はなよ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="umi02"><input type="radio" name="looks" value="うみ" id="umi02" required>綺麗なロングヘアー（うみ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="rin02"><input type="radio" name="looks" value="りん" id="rin02" required>ショート（りん）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="nozomi02"><input type="radio" name="looks" value="のぞみ" id="nozomi02" required>ツインテール(おさげ)（のぞみ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="maki02"><input type="radio" name="looks" value="まき" id="maki02" required>セミロングボブの毛先くるくる（まき）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="eli02"><input type="radio" name="looks" value="えり" id="eli02" required>ポニーテール（えり）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="nico02"><input type="radio" name="looks" value="にこ" id="nico02" required>ツインテール（にこ）</label></td>
                  </tr>
              </table>
              <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
          <!-- </form> -->
        </div>

      <div class = "division">
        <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
            <table>
                <tr>
                    <td class="text-center characters01">趣味</td>
                </tr>
                <tr>
                    <td class="umi"><label for="nico03"><input type="radio" name="hobby" value="にこ" id="nico03" required>おしゃれ（にこ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="rin03"><input type="radio" name="hobby" value="りん" id="rin03" required>スポーツ全般、特に陸上系（りん）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="hanayo03"><input type="radio" name="hobby" value="はなよ" id="hanayo03" required>絵を描くこと（はなよ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="honoka03"><input type="radio" name="hobby" value="ほのか" id="honoka03" required>水泳、シール集め（ほのか）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="maki03"><input type="radio" name="hobby" value="まき" id="maki03" required>写真、天体観測（まき）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="eli03"><input type="radio" name="hobby" value="えり" id="eli03" required>キルト、アクセサリー制作（えり）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="kotori03"><input type="radio" name="hobby" value="ことり" id="kotori03" required>おかし作り（ことり）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="umi03"><input type="radio" name="hobby" value="うみ" id="umi03" required>読書、書道（うみ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="nozomi03"><input type="radio" name="hobby" value="のぞみ" id="nozomi03" required>昼寝、占い（のぞみ）</label></td>
                </tr>
            </table>
            <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
        <!-- </form> -->
      </div>
      </div>

      <div class="inner contents-box" id = "serector">
        <div class = "division">
          <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
              <table>
                  <tr>
                      <td class="text-center characters02">特技</td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="umi04"><input type="radio" name="animal" value="うみ" id="umi04" required>日舞、剣道、弓道（うみ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="nozomi04"><input type="radio" name="animal" value="のぞみ" id="nozomi04" required>ハンドパワー（のぞみ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="rin04"><input type="radio" name="animal" value="りん" id="rin04" required>バスケのシュート（りん）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="nico04"><input type="radio" name="animal" value="にこ" id="nico04" required>ヘアアレンジ（にこ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="maki04"><input type="radio" name="animal" value="まき" id="maki04" required>テストで満点を取る（まき）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="honoka04"><input type="radio" name="animal" value="ほのか" id="honoka04" required>元気な笑顔（ほのか）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="eli04"><input type="radio" name="animal" value="えり" id="eli04" required>ロシア語（えり）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="hanayo04"><input type="radio" name="animal" value="はなよ" id="hanayo04" required>折り紙（はなよ）</label></td>
                  </tr>
                  <tr>
                      <td class="umi"><label for="kotori04"><input type="radio" name="animal" value="ことり" id="kotori04" required>柔軟（ことり）</label></td>
                  </tr>
              </table>
              <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
          <!-- </form> -->
      </div>

      <div class = "division">
        <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
            <table>
                <tr>
                    <td class="text-center characters02">好きな食べ物</td>
                </tr>
                <tr>
                    <td class="umi"><label for="maki05"><input type="radio" name="like" value="まき" id="maki05" required>トマト（まき）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="honoka05"><input type="radio" name="like" value="ほのか" id="honoka05" required>いちご（ほのか）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="eli05"><input type="radio" name="like" value="えり" id="eli05" required>チョコレート（えり）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="hanayo05"><input type="radio" name="like" value="はなよ" id="hanayo05" required>白いご飯（はなよ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="nozomi05"><input type="radio" name="like" value="のぞみ" id="nozomi05" required>焼肉（のぞみ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="rin05"><input type="radio" name="like" value="りん" id="rin05" required>ラーメン（りん）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="kotori05"><input type="radio" name="like" value="ことり" id="kotori05" required>チーズケーキ（ことり）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="nico05"><input type="radio" name="like" value="にこ" id="nico05" required>おかし（にこ）</label></td>
                </tr>
                <tr>
                    <td class="umi"><label for="umi05"><input type="radio" name="like" value="うみ" id="umi05" required>穂乃果の家のまんじゅう（うみ）</label></td>
                </tr>
            </table>
            <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
        <!-- </form> -->
      </div>

    <div class = "division">
      <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
          <table>
              <tr>
                  <td class="text-center characters02">嫌いな食べ物</td>
              </tr>
              <tr>
                  <td class="umi"><label for="honoka06"><input type="radio" name="dislike" value="ほのか" id="honoka06" required>ピーマン（ほのか）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="umi06"><input type="radio" name="dislike" value="うみ" id="umi06" required>炭酸飲料（うみ）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="kotori06"><input type="radio" name="dislike" value="ことり" id="kotori06" required>にんにく（ことり）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="maki06"><input type="radio" name="dislike" value="まき" id="maki06" required>みかん（まき）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="rin06"><input type="radio" name="dislike" value="りん" id="rin06" required>魚（りん）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="hanayo06"><input type="radio" name="dislike" value="はなよ" id="hanayo06" required>なし（はなよ）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="eli06"><input type="radio" name="dislike" value="えり" id="eli06" required>梅干し、のり（えり）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="nozomi06"><input type="radio" name="dislike" value="のぞみ" id="nozomi06" required>キャラメル（のぞみ）</label></td>
              </tr>
              <tr>
                  <td class="umi"><label for="nico06"><input type="radio" name="dislike" value="にこ" id="nico06" required>辛いもの（にこ）</label></td>
              </tr>
          </table>
          <!-- <p class="text-center"><input type="submit" class="entry-btn"></p> -->
      <!-- </form> -->
    </div>
    </div>
    <!-- <form action="confirm_enq.php" method="post" class="form-module"> -->
      <input type="submit" value="Result!" id="button"/>
      <input type="radio" name="character" value="ほのか" id="honoka01">
    </form>
    </section>
    <section>
      <div id = "results">
      </div>
      <div id = "answer">
      </div>
    </section>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="love02.js"></script>
<script src="jquery.bxslider/jquery.bxslider.min.js"></script>
</body>
</html>

<?php
$title = 'Biscotti cioccolato e mirtilli';
$eggs = 167;
$ratio = $eggs / 60;
$chocolate = round(50 * $ratio);
$cocoa = round(10 * $ratio);
$blueberries = round(60 * $ratio);
$erythritol = round(10 * $ratio);
$butter = round(50 * $ratio);
$flour = round(140 * $ratio);
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" fr-FR> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" fr-FR> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" fr-FR> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" fr-FR> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="fr-FR">
<!--<![endif]-->
<!-- the "no-js" class is for Modernizr. -->

<head>
    <meta charset="UTF-8">
    <title>
        <?php echo $title; ?>
    </title>
</head>

<body>
    <h1>
        <?php echo $title; ?>
    </h1>
    <table>
        <tr>
            <td>Uova:</td>
            <td>
                <?php echo $eggs; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Cioccolato:</td>
            <td>
                <?php echo $chocolate; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Cacao:</td>
            <td>
                <?php echo $cocoa; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Eritritolo:</td>
            <td>
                <?php echo $erythritol; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Mirtilli:</td>
            <td>
                <?php echo $blueberries; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Burro:</td>
            <td>
                <?php echo $butter; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Farina:</td>
            <td>
                <?php echo $flour; ?> grammi
            </td>
        </tr>
        <tr>
            <td>Lievito</td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Sale</td>
            <td>
            </td>
        </tr>
    </table>
</body>

</html>
<!DOCTYPE html>
<html>
<head>
    <title>Task1</title>
    <style type="text/css">
        table,th,td
        {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th
        {
            text-align: left;
        }
        td
        {
            padding: 5px;
            text-align: left;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>RNo</th>
            <th>SName</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Result</th>
        </tr>
        <tr>
            <th><?php echo $_POST["Rno"]; ?></th>
            <th><?php echo $_POST["sname"]; ?></th>
            <th><?php echo $_POST["sub1"]+$_POST["sub2"]+$_POST["sub3"]; ?></th>
            <th><?php echo ($_POST["sub1"]+$_POST["sub2"]+$_POST["sub3"])/3; ?></th>
            <th><?php 
               $t =($_POST["sub1"]+$_POST["sub2"]+$_POST["sub3"])/3;
               if ($t > 60) {
                   echo "First Class";
               }
               
               elseif ($t > 50) {
                   echo "Second Class";
               }
               elseif ($t > 30) {
                   echo "Third Class";
               }
               else{
                   echo "Fail";
               }
            ?></th>
            
        </tr>
    </table>

</body>
</html>
<?php
session_start();
error_reporting(E_ALL^E_NOTICE^E_WARNING);
header('Content-Type:text/html;charset=utf-8');

$appid = "wxc7605a3db36950e7";
$secret = "c65134387424cf5ed07e39286b0612ca";


$wx_login = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=http://www.elinkworld.com.cn/zqj2016/login_wx.php&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";// snsapi_userinfo

$gourl = "index.php";

// if(isset($_GET["gourl"]))
// {
//     $gourl = $_GET["gourl"];
//     if(isset($_GET["urlId"]))
//     {
//       $urlId = $_GET["urlId"];
//       $gourl.= "?urlId=$urlId";
//     }
//     $wx_login = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_urihttp://www.elinkworld.com.cn/zqj2016/login_wx.php?gourl={$gourl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";// snsapi_userinfo
// }


if(isset($_GET["code"]))
{
  $code = $_GET['code'];//获取code


  $weixin =  file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$secret&code=".$code."&grant_type=authorization_code");//通过code换取网页授权access_token

  $jsondecode = json_decode($weixin); //对JSON格式的字符串进行编码
  $array = get_object_vars($jsondecode);//转换成数组
  $access_token = $array['access_token'];//输出access_token
  $openid = $array['openid'];//输出openid




  //获取头像等
  if($openid==null || $openid=="")
  {
    header("Location:".$wx_login);
    exit;
  }

  $get_user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';

  $res=file_get_contents($get_user_info_url);
  //解析json
  $user_obj = json_decode($res,true);

  if($user_obj!=null)
  {
    $NickName=$user_obj["nickname"];
    $Head=$user_obj["headimgurl"];
    //$openid=$user_obj["openid"];
    $Sex=$user_obj["sex"];
    $WxAddr=$user_obj["country"].$user_obj["province"].$user_obj["city"];

    if($NickName=="" && $Head=="")
    {
    	  header("Location:".$wx_login);
 	 exit; 
    }

    reg($NickName,$Head,$openid,$Sex,$WxAddr);
    header("Location:$gourl");
    //echo $gourl;
    exit;
  }
  else
  {
    //header("Location:".$wx_login);
  }
}
else
{
  header("Location:".$wx_login);
  exit; 
}

function reg($NickName,$Head,$OpenId,$Sex,$WxAddr)
 {
  /*if($WxAddr=="美国" ||$NickName=="")
    {
        return ;
    }*/
    include 'lib/db/Init.php'; //包含数据库操作类

    date_default_timezone_set ('Asia/Shanghai');
    $IP = get_user_ip();
    $date =  date('Y-m-d H:i:s');


  // //判断ip是否存在
  //   $sql = "select * from member where IP='$IP'";

  //   $res = mysql_query($sql);

  //   $count = mysql_num_rows($res);
  //   if($count>=10)
  //   {
  //     return ;
  //   }


    //判断是否存在
    $sql = "select * from member where OpenId='$OpenId'";

    $res = mysql_query($sql);

    $count = mysql_num_rows($res);

    if($count==0)
    {

      $data = array(
      'NickName'=>$NickName,
      'UserName'=>$NickName,
      'Tel'=>'',
      'MemberTypeId'=>0,
      'Head'=>$Head,
      'IP'=>$IP,
      'OpenId'=>$OpenId,
      'Sex'=>$Sex,
      'WxAddr'=>$WxAddr,
      'LastLogin'=>$date,
      'CreateDate'=>$date,
      );

      $keyword = $db->table('member')->add($data);//插入数据库
      $_SESSION["zqj2016"] = $keyword;
      $_SESSION["LoginName"] = $NickName;

    }
    else
    {
      $MemberId = 0;
      $CreateDate = "";

      while ($row = mysql_fetch_array($res))
      {
        $MemberId =  $row["MemberId"];
        $_SESSION["zqj2016"] = $MemberId;
        $_SESSION["LoginName"] = $row["NickName"];
        $CreateDate= $row["CreateDate"];
      }

    $CreateDate = date("Y-m-d", strtotime($CreateDate));
    $today = date("Y-m-d",time());
      //判断日期是否是今天
      if($CreateDate!=$today)
      {
        $sql = "update member set LastLogin='$date',NickName='$NickName',
        Head='$Head' where MemberId=$MemberId";
        mysql_query($sql);
      }

    }
}


// 获取用户IP地址
function get_user_ip() {
    if (getenv('HTTP_CLIENT_IP')) {
        $onlineip = getenv('HTTP_CLIENT_IP');
    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {
        $onlineip = getenv('HTTP_X_FORWARDED_FOR');
    } elseif (getenv('REMOTE_ADDR')) {
        $onlineip = getenv('REMOTE_ADDR');
    } else {
        $onlineip = $_SERVER['REMOTE_ADDR'];
    }
    return $onlineip;
}


?>

export default {
	login: {
		title: '約愛派對',
		type: '註冊',
		languageDialog: {
			title: '請揀你懸長的語言',
		},
		buttons: ['語言', '登入', '註冊'],
		inputs: ['請輸入你嘅號碼', '請輸入密碼', '請輸入邀請碼'],
		gender: ['男', '女'],
		message: ['用戶名抑是密碼袂使為空', '請輸入邀請碼', '邀請碼錯誤', '登錄成功', '註冊成功', '你還沒有注冊', '密碼錯誤', '登錄失敗', '該帳號已經註冊矣',
			'用戶名或密碼不能少於六位']
	},
	mine: {
		vipStatus: [' 製作中…', ' 未激活 ', ' 激活中 ', ' 已激活 ', ' 待生成 ', ' 已放棄 ', ' 修復中 '],
		account: '帳戶積分',
		buttons: ['點擊申請', '提領現金', '充值', '修改密碼', '交友安全', '使用條款', '隱私政策', '退出登錄'],
		dialog: {
			input: '輸入姓名',
			buttons: ['取消', '確認']
		},
		upload:['請上傳您辦理的第一個會員手續轉賬憑證','請上傳您辦理的第二個會員手續轉賬憑證','請上傳您辦理的第三個會員手續轉賬憑證'],
		message:['請輸入密碼', '請輸入新密碼', '密碼不能少於六位', '兩次新密碼輸入不一致', '修改成功', '密碼錯誤'],
		model: {
			titles: ['積分', '剩餘積分', '提領現金紀錄', '舊密碼', '新密碼', '確認密碼'],
			buttons: ['取消', '確認'],
			message: ['請輸入積分', {
				title: '系統提示',
				content: '你已經提交一張申請矣',
				okText: '我知矣'
			}, '提交成功', '請上傳頭像', '請輸入姓名', '只會使上傳 JPG/PNG 格式嘅圖片！', '圖片大小袂使超過 2MB！', '頭像上傳失敗，請稍後再試！'],
		},
		txts: [' 數據出錯 ', ' 已放棄 ', ' 修復中 ', ' 帳戶凍結 ']
	},
	gift: {
		title: '年度模特評選',
		buttons: ['提交'],
		txts: ['投票結果', '目前選擇', '每單積分'],
		gift: ['玫瑰', '百合', '煙火', '氣球'],
		message: ['請揀1份禮物', '請寫積分','餘額不足'],
		dialog: {
			buttons: ['清空訂單', '確認提交']
		},
		model: {
			title: '系統錯誤',
			content: [' 數據出錯 ', ' 已放棄會員資格 ', ' 數據修復中 ', ' 帳戶已凍結 '],
			okText: '我知矣'
		}
	},
	main: {
		dating: {
			txts: ['提領現金成功', '充值成功']
		},
		square: {
			buttons: ['按讚', '評論', '分享']
		},
	},
	PL: {
		height: '身高',
		weight: '體重',
		xw: '胸圍',
		job: '職業',
		city: '城市',
		button: '我要預約',
		tabs: ['男士專區', '女士專區'],
		party: ['泳池派對', '遊艇派對', '別墅派對', '私人派對']
	},

	tabbar: {
		buttons: ['主頁', '私約', '投票', '我的'],
		service: '客服'
	},
	message: {
		title: "會員未激活",
		msg: '請聯繫客服激活'
	}
}
const contract2_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const contract1_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"LogA","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"text","type":"string"}],"name":"LogS","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LogU","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"_pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quote_amount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPriceList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTimeList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote_token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetVotations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quote_amount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_quote_token","type":"address"}],"name":"setQuoteToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_swap_ratio","type":"uint256"}],"name":"setSwapRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setowner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swap_ratio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vote_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"voted_options","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voters_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const contract2_address = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const contract1_address = '0xe74ae52c614B4E418e37fe9c10D14235bd4DC77a';
const contract_chain_id = "0x38";



let eth_decimals = Math.pow(10, 18);

window.onload = async function load() {
	await loadWeb3();
	if(window.web3_connector){
		const chainId = await window.web3_connector.request({ method: 'eth_chainId' });
		if (chainId == contract_chain_id){
			console.log(chainId);
			window.contract1 = await loadContract(contract1_abi, contract1_address);
			window.contract2 = await loadContract(contract2_abi, contract2_address);
			window.contract1_symbol = await contractSymbol(window.contract1);
			window.contract2_symbol = await contractSymbol(window.contract2);
			window.token_price = await tokenPrice();
			await getOwnerAddress();
			start();
			await getVotedData(["Option A", "Option B", "Option C"],[1,2,3]);
			show_home_page();
			
		}else{
			window.alert("Please select Binance Smart Chain in Your wallet");
			console.log(chainId);
		}
	}else{		
		document.getElementById("instalation").style.display = "block";
	}

}

async function loadWeb3() {
	if (window.BinanceChain) {
		window.web3 = new Web3(window.BinanceChain);
		window.web3_connector = window.BinanceChain;
		window.BinanceChain.on('chainChanged', (_chainId) => {
			window.location.reload()
			});
		window.BinanceChain.on('accountsChanged', handleAccountsChanged);
		window.BinanceChain.request({method: 'eth_accounts'})
			.then(handleAccountsChanged)
			.catch((err) =>{
				console.log(err);
		});
	}
	else if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.web3_connector = window.ethereum;
		ethereum.on('chainChanged', (_chainId) => {
			window.location.reload()
			});
		window.ethereum.on('accountsChanged', handleAccountsChanged);
		window.ethereum.request({method: 'eth_accounts'})
			.then(handleAccountsChanged)
			.catch((err) =>{
				console.log(err);
		});
	}
	else{
		//window.alert("Please install MetaMask");
	}
}


const handleAccountsChanged = async (a) => {
	console.log("Account Changed!");
	window.accounts = a;
	if(window.web3_connector){
		if(a.length > 0){
			document.getElementById("active_account").innerHTML = "Active Account:  " + window.accounts[0];
			document.getElementById("connect").style.display = "none";
			bnb_balance = await checkEthBalance();
			if (bnb_balance){
				text_ = "Account BNB balance:  " + parseFloat(bnb_balance.toFixed(6));
			}else{
				text_ = "";
			}
			document.getElementById("eth_balance").innerHTML = text_;
				
			t1_balance = await contractBalanceOf(window.contract1, window.accounts[0]) / eth_decimals;
			document.getElementById("token1_balance").innerHTML = "Account "+ window.contract1_symbol +" balance:  " + parseFloat(t1_balance.toFixed(6));
			
			t2_balance = await contractBalanceOf(window.contract2, window.accounts[0]) / eth_decimals;
			document.getElementById("token2_balance").innerHTML = "Account "+ window.contract2_symbol +" balance:  " + parseFloat(t2_balance.toFixed(6));

			document.getElementById("active_account_info").style.display = "block";
			document.getElementById("methods").style.display = "block";
		}else{
			document.getElementById("methods").style.display = "none";
			document.getElementById("connect").style.display = "block";
		}
	}
}

function show_votation_page() {
	document.getElementById("methods").style.display = "none";
	document.getElementById("active_account_info").style.display = "none";
	document.getElementById("go_home").style.display = "block";
	document.getElementById("go_vote").style.display = "none";
	show_pie_chart();
}

function show_home_page() {
	document.getElementById("active_account_info").style.display = "block";
	document.getElementById("go_home").style.display = "none";
	document.getElementById("go_vote").style.display = "block";
	document.getElementById("methods").style.display = "block";
}

async function enable() {
	window.web3_connector.enable();
}

async function loadContract(abi, address) {
	return await new window.web3.eth.Contract(abi, address);
}

async function getCurrentAccount() {
	const accounts = await window.web3.eth.getAccounts();
	return accounts[0];
}

async function getOwnerAddress() {
	window.owner_address = await window.contract1.methods.owner().call();	
}

async function contractBalanceOf(contract, address) {
	const balance = await contract.methods.balanceOf(address).call();
	return balance;
}

async function tokenPrice() {
	const price = await contract1.methods.swap_ratio().call();
	return parseFloat(price) / 100;
}


async function contractSymbol(contract) {
	const symbol = await contract.methods.symbol().call();
	return symbol;
}

async function getPriceList() {
	const price_list = await contract1.methods.getPriceList().call();
	return price_list;
}

async function getTimeList() {
	const time_list = await contract1.methods.getTimeList().call();
	return time_list;
}

async function rebuyAllowance() {
	const amount = await contract2.methods.allowance(window.owner_address, contract1_address).call();
	return amount;
}

async function rebuyApprove(amount) {
	amount = amount * eth_decimals;
	amount = amount.toString();
	await contract2.methods.approve(contract1_address, amount).send({ from: window.accounts[0]});
}

const checkEthBalance = async () =>  {
	let balance = await window.web3_connector.request({method: 'eth_getBalance', 
		params:[window.accounts[0]]
	}).catch((err)=>{
        console.log(err);
    })
	return parseInt(balance) / eth_decimals;
}

async function buyTokens() {
	amount = document.getElementById("buy_amount").value;
	console.log(amount); 
	if(amount > 0.0){
		amount = amount * eth_decimals;
		console.log(amount); 
		available = await contractBalanceOf(window.contract1, window.owner_address);
		if(amount <= available){
			t2_balance = await contractBalanceOf(window.contract2, window.accounts[0]);
			if(amount <= t2_balance){
				amount = amount.toLocaleString('fullwide', {useGrouping:false});
				console.log(amount); 
				await contract2.methods.approve(contract1_address, amount).send({ from: window.accounts[0]});
				await contract1.methods.buy(amount).send({ from: window.accounts[0]});
			}else{
				window.alert("Insufficient "+window.contract2_symbol+" quantity available: " + parseInt(t2_balance) / eth_decimals);
			}
		}else{
			console.log(available); 
			console.log(amount);
			window.alert("Insufficient  "+window.contract1_symbol+" quantity to sell: "+  + parseInt(available) / eth_decimals);
		}
	}else{
		window.alert("The amount haz to be greater than 0.");
	}

}

async function sellTokens() {
	amount = document.getElementById("sell_amount").value ;
	if(amount > 0.0){
		amount = amount * eth_decimals;
		available = await rebuyAllowance();
		if(amount <= available){
			t1_balance = await contractBalanceOf(window.contract1, window.accounts[0]);
			if(amount <= t1_balance){
				amount = amount.toLocaleString('fullwide', {useGrouping:false});
				await contract1.methods.sell(amount).send({ from: window.accounts[0]});
			}else{
			window.alert("Insufficient "+window.contract1_symbol+" quantity available: " + parseInt(t1_balance) / eth_decimals);
		}
		}else{
			console.log(available); 
			console.log(amount); 
			window.alert("Insufficient "+window.contract2_symbol+" liquidity: " + parseInt(available) / eth_decimals);
		}
	}else{
		window.alert("The amount haz to be greater than 0.");
	}
}

async function getVoteCount(vote_option) {
	const v_balance = await contract1.methods.voted_options(vote_option).call();
	return v_balance;
}

async function hasVoted() {
	const v_time = await contract1.methods.voted_options(vote_option).call();
	return v_time;
}

async function vote(vote_option) {
	let vote_time = await contract1.methods.vote_time().call();
	let voter_time = await contract1.methods.voters(window.accounts[0]).call();
	console.log(vote_time);
	console.log(voter_time);
	if (voter_time < vote_time){
		const resp = await contract1.methods.vote(vote_option).send({ from: window.accounts[0]});
	}else{
		window.alert("You have already voted!");
	}
}

async function getVotedData(options_names, options) {
	v_data = [];
	v_data.push(['Task', 'Votations Chart']);
	n = 0;
	for (n; n < options.length; n += 1) {
		option_value = await getVoteCount(options[n]);
		v_data.push([options_names[n], option_value / eth_decimals]);
	}
	console.log(v_data);
	window.vote_data = v_data;
}

function show_pie_chart() {
	// Load google charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

}

// Draw the chart and set the chart values
function drawChart() {
	var data = google.visualization.arrayToDataTable(window.vote_data);

	  // Optional; add a title and set the width and height of the chart
	  var options = {'title':'Votation Chart', 'width': 'auto', 'height':600, backgroundColor: '#3e3e40', is3D: true, sliceVisibilityThreshold: 0};

	  // Display the chart inside the <div> element with id="piechart"
	  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	  chart.draw(data, options);
}


// Highcharts methods
async function start() {
	time_list = await getTimeList();
	price_list = await getPriceList();
	
	data_ = [];
	i = 0;
	for (i; i < time_list.length; i += 1) {
		data_.push([time_list[i] * 1000, price_list[i] / 100]);
	}
	showChart(data_);
	
};
function showChart(data) {
	
		Highcharts.createElement('link', {
			href: 'https://fonts.googleapis.com/css?family=Unica+One',
			rel: 'stylesheet',
			type: 'text/css'
		}, null, document.getElementsByTagName('head')[0]);
		Highcharts.theme = {
			colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
				'#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
			chart: {
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
					stops: [
						[0, '#2a2a2b'],
						[1, '#3e3e40']
					]
				},
				style: {
					fontFamily: '\'Unica One\', sans-serif'
				},
				plotBorderColor: '#606063'
			},
			title: {
				style: {
					color: '#E0E0E3',
					textTransform: 'uppercase',
					fontSize: '20px'
				}
			},
			subtitle: {
				style: {
					color: '#E0E0E3',
					textTransform: 'uppercase'
				}
			},
			xAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: '#E0E0E3'
					}
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				title: {
					style: {
						color: '#A0A0A3'
					}
				}
			},
			yAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: '#E0E0E3'
					}
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				tickWidth: 1,
				title: {
					style: {
						color: '#A0A0A3'
					}
				}
			},
			tooltip: {
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				style: {
					color: '#F0F0F0'
				}
			},
			plotOptions: {
				series: {
					dataLabels: {
						color: '#F0F0F3',
						style: {
							fontSize: '13px'
						}
					},
					marker: {
						lineColor: '#333'
					}
				},
				boxplot: {
					fillColor: '#505053'
				},
				candlestick: {
					lineColor: 'white'
				},
				errorbar: {
					color: 'white'
				}
			},
			legend: {
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				itemStyle: {
					color: '#E0E0E3'
				},
				itemHoverStyle: {
					color: '#FFF'
				},
				itemHiddenStyle: {
					color: '#606063'
				},
				title: {
					style: {
						color: '#C0C0C0'
					}
				}
			},
			credits: {
				style: {
					color: '#666'
				}
			},
			labels: {
				style: {
					color: '#707073'
				}
			},
			drilldown: {
				activeAxisLabelStyle: {
					color: '#F0F0F3'
				},
				activeDataLabelStyle: {
					color: '#F0F0F3'
				}
			},
			navigation: {
				buttonOptions: {
					symbolStroke: '#DDDDDD',
					theme: {
						fill: '#505053'
					}
				}
			},
			// scroll charts
			rangeSelector: {
				buttonTheme: {
					fill: '#505053',
					stroke: '#000000',
					style: {
						color: '#CCC'
					},
					states: {
						hover: {
							fill: '#707073',
							stroke: '#000000',
							style: {
								color: 'white'
							}
						},
						select: {
							fill: '#000003',
							stroke: '#000000',
							style: {
								color: 'white'
							}
						}
					}
				},
				inputBoxBorderColor: '#505053',
				inputStyle: {
					backgroundColor: '#333',
					color: 'silver'
				},
				labelStyle: {
					color: 'silver'
				}
			},
			navigator: {
				handles: {
					backgroundColor: '#666',
					borderColor: '#AAA'
				},
				outlineColor: '#CCC',
				maskFill: 'rgba(255,255,255,0.1)',
				series: {
					color: '#7798BF',
					lineColor: '#A6C7ED'
				},
				xAxis: {
					gridLineColor: '#505053'
				}
			},
			scrollbar: {
				barBackgroundColor: '#808083',
				barBorderColor: '#808083',
				buttonArrowColor: '#CCC',
				buttonBackgroundColor: '#606063',
				buttonBorderColor: '#606063',
				rifleColor: '#FFF',
				trackBackgroundColor: '#404043',
				trackBorderColor: '#404043'
			}
		};

		Highcharts.setOptions(Highcharts.theme);
	
    // create the chart
    chart =  Highcharts.stockChart('container', {


        title: {
            text: window.contract1_symbol +' Price'
        },

        subtitle: {
            text: ("1 " +window.contract1_symbol+ " = " + window.token_price + " " + window.contract2_symbol)
        },

        xAxis: {
            gapGridLineWidth: 0
        },

        rangeSelector: {
            buttons: [{
                type: 'hour',
                count: 1,
                text: '1h'
            }, {
                type: 'day',
                count: 1,
                text: '1D'
            }, {
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 2,
            inputEnabled: false
        },

        series: [{
            name: window.contract2_symbol,
            type: 'area',
            data: data,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            threshold: null
        }]
    });
	return chart;
}




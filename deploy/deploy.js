var compiledContractDefinition = {"contracts": {"ECCMath": {"bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a723058203c5461f3f2a45071cdfe22c823e06e6284f5aa402362abf54b42f2e585f3e1100029", "abi": []}, "owned": {"bin": "0x6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b61015c8061003c6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610048578063f2fde38b14610084575b600080fd5b341561005357600080fd5b61005b6100b2565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561008f57600080fd5b6100b073ffffffffffffffffffffffffffffffffffffffff600435166100ce565b005b60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000543373ffffffffffffffffffffffffffffffffffffffff9081169116146100f657600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff83161790555b5b505600a165627a7a7230582052f1ae05f5106493cc6f4f682cf446f3d91acca3d981cd05f996989b258d71340029", "abi": [{"inputs": [], "constant": true, "name": "owner", "outputs": [{"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "newOwner"}], "constant": false, "name": "transferOwnership", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}]}, "Secp256k1": {"bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a723058201d1ced838d88d6f3e8791719e0ea23490cf79e5c53025fe816eb9d03778b4aff0029", "abi": []}, "Voting": {"bin": "0x6060604052341561000f57600080fd5b5b5b60008054600160a060020a03191633600160a060020a03161790555b60008054819060a060020a60ff02191674010000000000000000000000000000000000000000825b02179055505b5b6117dc8061006b6000396000f300606060405236156100755763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633c26afc9811461007a5780638da5cb5b1461009f578063c19d93fb146100db578063d1733b4d14610112578063e29c2afa1461022c578063f2fde38b14610254575b600080fd5b341561008557600080fd5b61008d610282565b60405190815260200160405180910390f35b34156100aa57600080fd5b6100b2610288565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34156100e657600080fd5b6100ee6102a4565b604051808260048111156100fe57fe5b60ff16815260200191505060405180910390f35b341561011d57600080fd5b61021860046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080604001906002806020026040519081016040528092919082600260200280828437509395506102c5945050505050565b604051901515815260200160405180910390f35b341561023757600080fd5b61008d6004356102e0565b60405190815260200160405180910390f35b341561025f57600080fd5b61028073ffffffffffffffffffffffffffffffffffffffff600435166102f7565b005b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005474010000000000000000000000000000000000000000900460ff1681565b60006102d48686868686610359565b90505b95945050505050565b6002818181106102ec57fe5b0160005b5054905081565b6000543373ffffffffffffffffffffffffffffffffffffffff90811691161461031f57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff83161790555b5b50565b60006103636116ad565b61036b6116d3565b6103736116ad565b600061037d6116ad565b6103856116ad565b61038d6116ad565b7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817988760005b60200201527f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88760015b602002015260028c518115156103ee57fe5b046040518059106103fc5750595b908082528060200260200182016040525b5095508a8660008151811061041e57fe5b602090810290910101526104318c61057e565b9450600093505b60028c5181151561044557fe5b04841015610569578b846002028151811061045c57fe5b906020019060200201518360005b60200201528b600160028602018151811061048157fe5b906020019060200201518360015b60200201526104ca8a85815181106104a357fe5b90602001906020020151888887815181106104ba57fe5b90602001906020020151866105cc565b91506105028a85815181106104db57fe5b90602001906020020151868887815181106104f257fe5b906020019060200201518c6105cc565b9050600160028d5181151561051357fe5b0403841015610547576105298c8a8f8585610644565b86856001018151811061053857fe5b6020908102909101015261055d565b6105548c8a8f8585610644565b8b14975061056e565b5b600190930192610438565b600097505b5050505050505095945050505050565b6105866116ad565b61058e6116e5565b61059f61059a8461076a565b6107b6565b90508060005b60200201518260005b60200201528060015b60200201518260015b60200201525b50919050565b6105d46116ad565b6105dc6116e5565b6105e46116ad565b6106006105f1888861083d565b6105fb878761083d565b610d33565b9150610612826401000003d019610f88565b8160005b60200201518160005b60200201528160015b60200201518160015b60200201529150815b5050949350505050565b6000858585858560405180868051906020019060200280838360005b838110156106795780820151818401525b602001610660565b5050505090500185600260200280838360005b838110156106a55780820151818401525b60200161068c565b5050505090500184805190602001908083835b602083106106d857805182525b601f1990920191602091820191016106b8565b6001836020036101000a038019825116818451161790925250505091909101905083604080838360005b8381101561071b5780820151818401525b602001610702565b5050505090500182600260200280838360005b838110156107475780820151818401525b60200161072e565b505050509050019550505050505060405190819003902090505b95945050505050565b60008160405180828051906020019060200280838360005b8381101561079b5780820151818401525b602001610782565b5050505090500191505060405190819003902090505b919050565b6107be6116e5565b6107c66116ad565b7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817988160005b60200201527f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88160015b6020020152610824838261083d565b91506105c6826401000003d019610f88565b5b50919050565b6108456116e5565b600080600061085261170c565b61085a6116e5565b61086261173a565b6401000003d0199550600080808b151561087b57610d23565b6000604051985061020089016040525b8c156108c35760018d16156108b2575060208c06808989015360206010821102818e03019c505b60028d049c5060018801975061088b565b506060604051908101604052808c60005b602002015181526020018c60015b6020020151815260016020909101528660005b602002015261090b8660005b6020020151610fe4565b9450610917858c61109a565b8660015b6020020152610932858760015b6020020151610d33565b8660025b602002015261095185876002610928565b6020020151610d33565b8660035b602002015261097085876003610928565b6020020151610d33565b8660045b602002015261098f85876004610928565b6020020151610d33565b8660055b60200201526109ae85876005610928565b6020020151610d33565b8660065b60200201526109cd85876006610928565b6020020151610d33565b8660075b60200201528560015b602002015160025b60200201518460005b6020020152888460005b60200201518760025b602002015160025b6020020151098460015b6020020152888460015b60200201518760035b602002015160025b6020020151098460025b6020020152888460025b60200201518760045b602002015160025b6020020151098460035b6020020152888460035b60200201518760055b602002015160025b6020020151098460045b6020020152888460045b60200201518760065b602002015160025b6020020151098460055b6020020152888460055b60200201518760075b602002015160025b6020020151098460065b6020020152610ae08460065b60200201518a6112e3565b8460075b60200201528360075b60200201518460085b6020020152888460085b60200201518560055b60200201510984600f5b6020020152600692505b60028310610b9657888460085b6020020151876001860160088110610b3e57fe5b602002015160025b6020020151098460085b6020020152888460085b602002015185600119860160108110610b6f57fe5b602002015109846008850160108110610b8457fe5b60200201525b60001990920191610b1d565b888460085b60200201518760025b602002015160025b6020020151098460095b6020020152600092505b6007831015610c3057610c24866001850160088110610bdb57fe5b6020020151856009860160108110610bef57fe5b60200201518b876009880160108110610c0457fe5b6020020151886009890160108110610c1857fe5b6020020151098c61137b565b5b600190920191610bc0565b5b6000871115610d2357600019808801978901015160001a9150610c538a6113c6565b6010821115610cbb576002601f8390035b049050610cb68a6040805190810160405280898560088110610c8257fe5b602002015160005b60200201518152602001898560088110610ca057fe5b602002015160015b60200201518d039052611472565b610d1c565b6000821115610d1c57600260001983015b049050610d1c8a6040805190810160405280898560088110610cea57fe5b602002015160005b60200201518152602001898560088110610d0857fe5b602002015160015b60200201519052611472565b5b5b610c30565b5b50505050505050505092915050565b610d3b6116e5565b6000610d45611762565b610d4d611762565b6000808080808a60025b60200201511515610d6a57899850610f7a565b8960025b60200201511515610d81578a9850610f7a565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b6020020152878a60025b60200201518b60025b6020020151098760025b6020020152878760025b60200201518b60025b6020020151098760035b6020020152608060405190810160405280898960025b60200201518e60005b6020020151098152602001898960035b60200201518e60015b6020020151098152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b60200201511415610eb1578560035b60200201518660015b602002015114610ea157610f7a565b610eaa8b610fe4565b9850610f7a565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b602002015287808b60025b60200201518d60025b60200201510986098960025b60200201525b505050505050505092915050565b600080610f9d8460025b6020020151846112e3565b915082828309905082818560005b6020020151098460005b602002015282808284098560015b6020020151098460015b602002015260018460025b60200201525b50505050565b610fec6116e5565b6401000003d019600080808080808860025b6020020151151561100e5761108e565b8860005b602002015195508860015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808a60025b602002015187096002098860025b60200201525b50505050505050919050565b6110a26116e5565b60006110ac6116ad565b6110b4611762565b6000808080808a60025b602002015115156110fd576060604051908101604052808b60005b602002015181526020018b60015b6020020151815260200160018152509850610f7a565b8960015b60200201511515611114578a9850610f7a565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b60200201526080604051908101604052808c60005b602002015181526020018c60015b60200201518152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b60200201511415611213578560035b60200201518660015b6020020151146112045760008b815b602002015260008b60015b602002015260008b60025b6020020152610f7a565b61120d8b610fe4565b50610f7a565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b6020020152878b60025b60200201518609896002610f74565b60200201525b505050505050505092915050565b600080808080808715806112f657508688145b806112ff575086155b1561130957600080fd5b8688111561132057868881151561131c57fe5b0697505b600193508692508791505b811561135657818381151561133c57fe5b94959404858102909403939192838302900391905061132b565b600085121561136c578460000387039550611370565b8495505b505050505092915050565b80828560005b6020020151098460005b60200201528080838509856001610fc3565b602002015109846001610fcd565b60200201526001846002610fd8565b60200201525b50505050565b6401000003d019600080808080808760025b602002015115156113e857611468565b8760005b602002015195508760015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808960025b602002015187096002098860025b60200201525b5050505050505050565b600061147c6116ad565b611484611762565b6000808080808960015b602002015115156114cd578860005b60200201518a60005b60200201528860015b60200201518a60015b602002015260018a60025b60200201526116a1565b8860015b602002015115156114e1576116a1565b6401000003d0199750878a60025b60200201518b60025b6020020151098760005b6020020152878760005b60200201518b60025b6020020151098760015b60200201526080604051908101604052808b60005b602002015181526020018b60015b60200201518152602001898960005b60200201518c60005b6020020151098152602001898960015b60200201518c60015b602002015109905295508560025b60200201518660005b602002015114156115e3578560035b60200201518660015b6020020151146115d55760008a815b602002015260008a60015b602002015260008a60026114c3565b60200201526116a1565b6115de8a6113c6565b6116a1565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808a60005b6020020152878082810381868a60005b6020020151090885098a60015b60200201528780838860015b60200201510989038b60015b6020020151088a60015b6020020152878a60025b602002015186098a60025b60200201525b50505050505050505050565b604080519081016040526002815b60008152602001906001900390816116bb5790505090565b60206040519081016040526000815290565b60606040519081016040526003815b60008152602001906001900390816116bb5790505090565b6103006040519081016040526008815b6117246116e5565b81526020019060019003908161171c5790505090565b6102006040519081016040526010815b60008152602001906001900390816116bb5790505090565b60806040519081016040526004815b60008152602001906001900390816116bb5790505090565b60606040519081016040526003815b60008152602001906001900390816116bb57905050905600a165627a7a72305820bf487dae98159da6dc589d8dc26934d8bc1131abbefff11d0418c8de2bac917f0029", "abi": [{"inputs": [], "constant": true, "name": "numVoterPerRing", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "owner", "outputs": [{"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "state", "outputs": [{"type": "uint8", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "message"}, {"type": "uint256[]", "name": "y"}, {"type": "uint256", "name": "c_0"}, {"type": "uint256[]", "name": "s"}, {"type": "uint256[2]", "name": "link"}], "constant": true, "name": "verifyRingSignature", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "thresholdKey", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "newOwner"}], "constant": false, "name": "transferOwnership", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}]}, "LinkableRingSignature": {"bin": "0x6060604052341561000f57600080fd5b5b6110958061001f6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632efbad27811461003d575b600080fd5b610048600435610081565b6040518082606080838360005b8381101561006e5780820151818401525b602001610055565b5050505090500191505060405180910390f35b610089610f78565b610091610f9f565b7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817988160005b60200201527f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88160015b60200201526100ef8382610108565b9150610101826401000003d0196105fe565b5b50919050565b610110610f78565b600080600061011d610fc5565b610125610f78565b61012d610ff3565b6401000003d0199550600080808b1515610146576105ee565b6000604051985061020089016040525b8c1561018e5760018d161561017d575060208c06808989015360206010821102818e03019c505b60028d049c50600188019750610156565b506060604051908101604052808c60005b602002015181526020018c60015b6020020151815260016020909101528660005b60200201526101d68660005b602002015161065a565b94506101e2858c610710565b8660015b60200201526101fd858760015b6020020151610955565b8660025b602002015261021c858760026101f3565b6020020151610955565b8660035b602002015261023b858760036101f3565b6020020151610955565b8660045b602002015261025a858760046101f3565b6020020151610955565b8660055b6020020152610279858760056101f3565b6020020151610955565b8660065b6020020152610298858760066101f3565b6020020151610955565b8660075b60200201528560015b602002015160025b60200201518460005b6020020152888460005b60200201518760025b602002015160025b6020020151098460015b6020020152888460015b60200201518760035b602002015160025b6020020151098460025b6020020152888460025b60200201518760045b602002015160025b6020020151098460035b6020020152888460035b60200201518760055b602002015160025b6020020151098460045b6020020152888460045b60200201518760065b602002015160025b6020020151098460055b6020020152888460055b60200201518760075b602002015160025b6020020151098460065b60200201526103ab8460065b60200201518a610bae565b8460075b60200201528360075b60200201518460085b6020020152888460085b60200201518560055b60200201510984600f5b6020020152600692505b6002831061046157888460085b602002015187600186016008811061040957fe5b602002015160025b6020020151098460085b6020020152888460085b60200201518560011986016010811061043a57fe5b60200201510984600885016010811061044f57fe5b60200201525b600019909201916103e8565b888460085b60200201518760025b602002015160025b6020020151098460095b6020020152600092505b60078310156104fb576104ef8660018501600881106104a657fe5b60200201518560098601601081106104ba57fe5b60200201518b8760098801601081106104cf57fe5b60200201518860098901601081106104e357fe5b6020020151098c610c46565b5b60019092019161048b565b5b60008711156105ee57600019808801978901015160001a915061051e8a610c91565b6010821115610586576002601f8390035b0490506105818a604080519081016040528089856008811061054d57fe5b602002015160005b6020020151815260200189856008811061056b57fe5b602002015160015b60200201518d039052610d3d565b6105e7565b60008211156105e757600260001983015b0490506105e78a60408051908101604052808985600881106105b557fe5b602002015160005b602002015181526020018985600881106105d357fe5b602002015160015b60200201519052610d3d565b5b5b6104fb565b5b50505050505050505092915050565b6000806106138460025b602002015184610bae565b915082828309905082818560005b6020020151098460005b602002015282808284098560015b6020020151098460015b602002015260018460025b60200201525b50505050565b610662610f78565b6401000003d019600080808080808860025b6020020151151561068457610704565b8860005b602002015195508860015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808a60025b602002015187096002098860025b60200201525b50505050505050919050565b610718610f78565b6000610722610f9f565b61072a61101b565b6000808080808a60025b60200201511515610773576060604051908101604052808b60005b602002015181526020018b60015b6020020151815260200160018152509850610947565b8960015b6020020151151561078a578a9850610947565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b60200201526080604051908101604052808c60005b602002015181526020018c60015b60200201518152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b60200201511415610889578560035b60200201518660015b60200201511461087a5760008b815b602002015260008b60015b602002015260008b60025b6020020152610947565b6108838b61065a565b50610947565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b6020020152878b60025b602002015186098960025b60200201525b505050505050505092915050565b61095d610f78565b600061096761101b565b61096f61101b565b6000808080808a60025b6020020151151561098c57899850610947565b8960025b602002015115156109a3578a9850610947565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b6020020152878a60025b60200201518b60025b6020020151098760025b6020020152878760025b60200201518b60025b6020020151098760035b6020020152608060405190810160405280898960025b60200201518e60005b6020020151098152602001898960035b60200201518e60015b6020020151098152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b60200201511415610ad3578560035b60200201518660015b602002015114610ac357610947565b610acc8b61065a565b9850610947565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b602002015287808b60025b60200201518d60025b6020020151098609896002610941565b60200201525b505050505050505092915050565b60008080808080871580610bc157508688145b80610bca575086155b15610bd457600080fd5b86881115610beb578688811515610be757fe5b0697505b600193508692508791505b8115610c21578183811515610c0757fe5b949594048581029094039391928383029003919050610bf6565b6000851215610c37578460000387039550610c3b565b8495505b505050505092915050565b80828560005b6020020151098460005b60200201528080838509856001610639565b602002015109846001610643565b6020020152600184600261064e565b60200201525b50505050565b6401000003d019600080808080808760025b60200201511515610cb357610d33565b8760005b602002015195508760015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808960025b602002015187096002098860025b60200201525b5050505050505050565b6000610d47610f9f565b610d4f61101b565b6000808080808960015b60200201511515610d98578860005b60200201518a60005b60200201528860015b60200201518a60015b602002015260018a60025b6020020152610f6c565b8860015b60200201511515610dac57610f6c565b6401000003d0199750878a60025b60200201518b60025b6020020151098760005b6020020152878760005b60200201518b60025b6020020151098760015b60200201526080604051908101604052808b60005b602002015181526020018b60015b60200201518152602001898960005b60200201518c60005b6020020151098152602001898960015b60200201518c60015b602002015109905295508560025b60200201518660005b60200201511415610eae578560035b60200201518660015b602002015114610ea05760008a815b602002015260008a60015b602002015260008a6002610d8e565b6020020152610f6c565b610ea98a610c91565b610f6c565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808a60005b6020020152878082810381868a60005b6020020151090885098a60015b60200201528780838860015b60200201510989038b60015b6020020151088a60015b6020020152878a60025b602002015186098a60025b60200201525b50505050505050505050565b60606040519081016040526003815b6000815260200190600190039081610f875790505090565b604080519081016040526002815b6000815260200190600190039081610f875790505090565b6103006040519081016040526008815b610fdd610f78565b815260200190600190039081610fd55790505090565b6102006040519081016040526010815b6000815260200190600190039081610f875790505090565b60806040519081016040526004815b6000815260200190600190039081610f875790505090565b60606040519081016040526003815b6000815260200190600190039081610f8757905050905600a165627a7a723058207cc8374a9409aa2904ecf55b0bd85186354c0d1626391393f050e3307c4dec360029", "abi": [{"inputs": [{"type": "uint256", "name": "r"}], "constant": true, "name": "mapToCurve", "outputs": [{"type": "uint256[3]", "name": "rG"}], "payable": false, "type": "function"}]}}, "version": "0.4.14+commit.c2215d46.Darwin.appleclang"};
var contract = web3.eth.contract(compiledContractDefinition['contracts']['Voting']['abi']);

personal.unlockAccount("0x33bfbdc0048f477810434707de9c13031abd47ca", "sastres")

var address = '';



var instance = contract.new(
   {
     from: web3.eth.accounts[0], 
     data: compiledContractDefinition['contracts']['Voting']['bin'], 
     gas: '4689378'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         address = contract.address;
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
});

miner.start();


var abi = 0;
var contract = 0;

setTimeout(function() {
    abi = compiledContractDefinition['contracts']['Voting']['abi'];
    contract = web3.eth.contract(abi).at(address);
    miner.stop();
}, 3000);

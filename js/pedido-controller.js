app.controller("pedidoCtrl", function ($scope, $http, runxbusAPI) {
	$scope.titulo  = 'Menu de pedidos';
	$scope.pedidos = [];
	$scope.items   = [];
	$scope.total   = 0;
	//$scope.items = [{id: 1, descricao: "coca", preco: "5"},
	//				{id: 2, descricao: "pepsi", preco: "4"},
	//				{id: 3, descricao: "fruki", preco: "6"}];

	$scope.fazerPedido = function (pedido) {
		pedido.subTotal = (pedido.quantidade * pedido.item.preco);
		pedido.dataPedido = new Date();

		$scope.pedidos.push(angular.copy(pedido));
		delete $scope.pedido;

		//Reseta o estado dos campos do foumlario para futura validacao
		$scope.pedidoForm.$setPristine();

		$scope.total = ($scope.total + pedido.subTotal);
	};

	$scope.fazerPedidoAjax = function (pedido) {
		pedido.subTotal = (pedido.quantidade * pedido.item.preco);
		pedido.dataPedido = new Date();

		//Forcar o pedido para ficar igual ao do rest
		var pedidoPost = {
						quantidade: pedido.quantidade,
						item: {
							id: pedido.item.id,
							descricao: pedido.item.descricao,
							preco: pedido.item.preco,
							imagem: pedido.item.imagem,
							detalhes: pedido.item.detalhes
						}
					};

		runxbusAPI.salvarPedido(pedidoPost).success(function(data, status) {
			$scope.carregarPedidos();
		}).error(function(data, status) {
			console.log(data);
		});

		delete $scope.pedido;

		//Reseta o estado dos campos do foumlario para futura validacao
		$scope.pedidoForm.$setPristine();

		$scope.total = ($scope.total + pedido.subTotal);
	};

	$scope.ordernarPor = function(campo) {
		$scope.campo = campo;
		$scope.direcao = !$scope.direcao;
	};

	$scope.carregarItens = function() {
		runxbusAPI.carregarItems().success(function(data, status) {
			$scope.items =  data;
		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.carregarPedidos = function() {
		runxbusAPI.carregarPedidos().success(function(data, status) {
			$scope.pedidos = data;
			//@TODO: foreach pedidos para calcular total dos pedidos
			//$scope.total
		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.carregarItens();
	$scope.carregarPedidos();
});
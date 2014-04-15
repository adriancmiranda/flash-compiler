package server {
	import flash.events.EventDispatcher;
	
	dynamic public class FMSClient extends EventDispatcher {
		public function FMSClient() {
			super();
		}

		public function onRegisterUser(user:String, result:Object):void {
			trace('FMSClient.onRegisterUser:', user, result);
		}

		public function onSigninUser(user:String, result:Object):void {
			trace('FMSClient.onSigninUser:', user, result);
		}

		public function onStartGame(user:String):void {
			trace('FMSClient.onStartGame:', user);
		}

		public function onChangePlayer(user:String, player:uint):void {
			trace('FMSClient.onChangePlayer:', user, player);
		}
		
		public function onUpdateScore(user:String, score:uint):void {
			trace('FMSClient.onUpdateScore:', user, score);
		}

		public function onDisconnect(user:String):void {
			trace('FMSClient.onDisconnect:', user);
		}
		
		public function dispose():void {
			trace('FMSClient.diposed');
		}
	}
}


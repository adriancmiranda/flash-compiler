package {
	import flash.display.Sprite;
	import flash.text.TextField;
	import flash.events.Event;

	[SWF(width='{{WIDTH}}',height='{{HEIGHT}}',frameRate='{{FPS}}',backgroundColor='{{BGCOLOR}}')] //half 1080p
	public final class boot extends Sprite {
		// Some sample asset embed strings (handy for various things)
		//[Embed(source='data/fonts/Helvetica.dfont',fontFamily='Helvetica',embedAsCFF='false')] protected var junk:String;
		//[Embed(source='data/text.txt',mimeType='application/octet-stream')] protected var FileText:Class;
		//[Embed(source='data/sounds/music.mp3')] protected var SoundMusic:Class;
		//[Embed(source='data/icon.png')] protected var ImgIcon:Class;

		public function boot() {
			if (stage) onInitialize();
			else addEventListener(Event.ADDED_TO_STAGE, onInitialize);
		}

		protected function onInitialize(ev:Event=null):void {
			removeEventListener(Event.ADDED_TO_STAGE, onInitialize);
			addEventListener(Event.REMOVED_FROM_STAGE, onFinalize);
			var textField:TextField = new TextField();
			textField.text = 'boot is up and running!';
			stage.addChild(textField);
		}

		protected function onFinalize(ev:Event=null):void {
			removeEventListener(Event.REMOVED_FROM_STAGE, onFinalize);
			// Entry point
		}

		protected function onActivate():void {
		}

		protected function onDeactivate():void {
		}

		protected function onFullScreen():void {
		}

		protected function onNormalScreen():void {
		}

		protected function onResize():void {
		}

		protected function onRender():void {
		}

		protected function onMove():void {
		}

		protected function onMaximize():void {
		}

		protected function onMinimize():void {
		}

		protected function onRestore():void {
		}

		protected function onClose():void {
		}

		protected function onPresence():void {
		}

		protected function onIdle():void {
		}
	}
}

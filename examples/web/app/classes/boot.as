package {
    import flash.display.Sprite;

    [SWF(backgroundColor='#000000', frameRate='32', width='720', height='480')]
    public final class boot extends Sprite {

        public function boot() {
            super();
        }

        protected function initialize():void {
            // N/A yet.
        }

        protected function finalize():void {
            // N/A yet.
        }

        public function arrange():void {
            // N/A yet.
        }

        private function removeLoader():void {
            // N/A yet.
        }

        private function ready():void {
            // N/A yet.
        }

        private function progress(event:*):void {
            // N/A yet.
        }

        private function complete(event:*):void {
            // N/A yet.
        }

        private function setup():void {
            // N/A yet.
        }

        private function run():void {
            removeLoader();
            arrange();
        }
    }
}

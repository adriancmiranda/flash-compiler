package server {
    import flash.net.NetConnection;
    import flash.net.Responder;

    public final class FMSConnection extends NetConnection {

        public function FMSConnection(command:String = null, ...rest) {
            command && this.connect.apply(null, [command].concat(rest));
        }

        public function dispose():void {
            this.close();
        }

        override public function connect(command:String, ...rest):void {
            try {
                super.connect.apply(null, [command].concat(rest));
            } catch (error:Error) {
                trace(this.toString(), 'Can\'t connect...the connection name is already being used by another SWF.');
            }
        }

        override public function close():void {
            try {
                super.close();
            } catch (error:Error) {
                trace(this.toString(), error.message);
            }
        }

        override public function call(command:String, responder:Responder, ...rest):void {
            super.call.apply(null, [command, responder].concat(rest));
        }

        override public function toString():String {
            return '[FMSConnection]';
        }
    }
}

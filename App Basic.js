ide.AddModule( "react-uuid" )


class Main extends App
    {
        onStart()
        {
            // Creates a fullscreen layout with objects vertically centered.
            this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY" )
            this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )
            
            ui.addImage( this.main, "Img/20230310_231116_0000.png" )

            // Adds a text control to the layout.
            this.txt = ui.addText( this.main, "Email: ", "", 0.7 )

            // Adds a button to show the dialog.
            this.btn = ui.addButton( this.main, "Show Dialog", "Contained,Primary" )
            this.btn.setOnTouch( this.showDialog )
            
            //var uuid = import( "react-uuid" )
            var bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."

            // Initialize the dialog.
            this.dlg = ui.addDialog( "Subscribe", "", "Cancel,Subscribe" )
            this.dlg.setOnAction( this.onAction )

            // Adding textfield to the layout
            this.tfd = ui.addTextField( this.dlg.layout, "", "Filled", 1 )
            this.tfd.label = "Email Address"
            
            app.EnableBackKey(  )
        }

        showDialog()
        {
            this.dlg.show()
        }

        onAction( action )
        {
            // Check the button that is click.
            if( action == "Subscribe" )
            {
                // Change the text of the text control.
                this.txt.text = "Email : " + this.tfd.text
            }
        }
        
        onBack()
        {
        		ui.showPopup( "Salir" )
        }
    }
# react-components-yee

##install
`npm install react-components-yee --save` 

##components
1、tips()  
```javascripts
tips({info: "tips", duration: 500})
```  
2、fadeAlert() 
```javascripts
fadeAlert({info: "alert", 
  buttons: [{
    label: "Cancel",
    type: "cancel"
  }, {
    label: "confirm",
    type: "confirm",
    onClick: () => {}
  }]})
```  
3、Modal  
```javascripts
class YourComponent extends React.Component {

  render() {
    const { visible, close, startPosition } = this.props
    //close is a func (optional)
    //startPosition is the position of Modal pop out (optional)
    return (
      <Modal
        visible={visible}
        close={close}
        startPosition={startPosition}>

      </Modal>
    )
  }
}
```  

export class UI {
    static ToggleDashboardPanel(t){
        $('#DashboardPanel').slideToggle("fast",()=>{
            if($('#DashboardPanel').css("display") == "none") {
                $(t).css({"background-color":"rgb(44, 44, 44)"});
            }else{
                $(t).css({"background-color":"rgb(107,107,107)"});
            }
        });
    }
    static ToggleEditablePanel(t){
        $('#EditablePanel').slideToggle("fast",()=>{
            if($('#EditablePanel').css("display") == "none") {
                $(t).css({"background-color":"rgb(44, 44, 44)"});
            }else{
                $(t).css({"background-color":"rgb(107,107,107)"});
            }
        });
    }
}
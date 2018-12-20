export class UI {
    static ToggleDashboardPanel(t){
        $('#DashboardPanel').slideToggle("fast");
        $(t).css({"background-color":"rgb(107,107,107)"});
    }
}
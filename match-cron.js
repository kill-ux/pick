const matchCron = (tab, date) => {
    let cron = tab.split(" ")
    const DayOfWeek = date.getDay()
    const Month = date.getMonth() + 1
    const Day = date.getDate()
    const Hour = date.getHours()
    const Minute = date.getMinutes()
    return (cron[0] == Minute || cron[0] == "*") &&
        (cron[1] == Hour || cron[1] == "*") &&
        (cron[2] == Day || cron[2] == "*") &&
        (cron[3] == Month || cron[3] == "*") &&
        (cron[4] == DayOfWeek || cron[4] == "*")
} 
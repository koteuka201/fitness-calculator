export const activityDescription = (value: number): {title: string, description: string} => {
    if (value <= 38) {
        return {
            title: "Низкая",
            description: "Большую часть времени вы проводите сидя, выполняя легкие повседневные задачи.",
        }
    } else if (value <= 56) {
        return {
            title: "Средняя",
            description: "Вы регулярно занимаетесь физическими упражнениями (2-3 занятия в неделю) или выполняете работу, требующую умеренных усилий.",
        }
    } else if (value <= 74) {
        return {
            title: "Высокая",
            description: "Вы занимаетесь интенсивными упражнениями (4-5 занятия в неделю) или выполняете работу, требующую значительных физических усилий.",
        }
    } else {
        return {
            title: "Очень высокая",
            description: "Вы активно занимаетесь спортом (6 и более раз в неделю) или выполняете работу, требующую экстремальных физических усилий.",
        }
    }
}
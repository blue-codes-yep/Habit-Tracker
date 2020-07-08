import HabitButton from './HabitButton'

const SingleHabit = ({ habit }) => {
    const dates = getWeek()
    return (
        <article>
            <h3>{habit}</h3>
            <div>
                {dates.map(date =>
                    (<HabitButton key={date.getMilliseconds()} date={date} />
                    ))}
            </div>
        </article>
    )
}

const getWeek = () => {
    const dates = '43210'.split('').map(day => {
        const tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - day)
        return tempDate;
    })
    return dates;
}

export default SingleHabit;
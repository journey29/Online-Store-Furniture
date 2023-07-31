import { ActivitiesList } from "./ActivitiesList"


export const Activities: React.FC = () => {
    return (
        <section className='activities'>
            <div className="container">
                <h2 className='activities__title'>WHAT WE <span>ARE DOING</span></h2>
                <p className='activities__text'>Includes Business as well as Professionals</p>
                <ActivitiesList />
            </div>
        </section>
    )
}

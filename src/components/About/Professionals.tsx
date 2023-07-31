import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ProfessionalsItem } from "./ProfessionalsItem"
import { faFacebookF, faPinterestP, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const Professionals: React.FC = () => {
    const social: IconDefinition[] = [faFacebookF, faPinterestP, faYoutube, faTwitter]
    return (
        <section className='professionals'>
            <div className="container">
                <ul className="professionals__list">
                    <ProfessionalsItem job='Procurement' name='Boyd Kelly' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t1_1024x1024_ff8180bb-b8a0-4103-b228-7d6cfa9f3f3c_800x.jpg?v=1613172406' />
                    <ProfessionalsItem job='Online Billing' name='Tasha Elliott' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t2_1024x1024_b8155bee-eb1f-4999-9bdd-75521c7aec12_800x.jpg?v=1613172406' />
                    <ProfessionalsItem job='Customer Care' name='Nathan Wolfe' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t3_1024x1024_a256c437-2310-4def-b690-85b4ca076153_800x.jpg?v=1613172406' />
                </ul>
            </div>
        </section>
    )
}

import './Plans.css';
import { plans } from '../../data';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';

const Plans = () => {
    return <>
        <Header title='Membership Plan' content='Choose from a variety of fitness plans to achieve your goals today.' image={HeaderImage}>
        </Header>

        <section className='plans'>
            <div className='plans__container'>
                {
                    plans.map((plan) => {
                        return <Card key={plan.id} className='plan'>
                            <h3>{plan.name}</h3>
                            <small>{plan.desc}</small>
                            <h1>{`$${plan.price}`}</h1><h2>/mo</h2>
                            <h4>Features</h4>
                            {
                                plan.features.map(({ feature, available }, index) => {
                                    return <p key={index} className={available ? 'available' : 'unavailable'}>
                                        {feature}
                                    </p>
                                })
                            }
                            <button className='btn lg'>Choose Plan</button>
                        </Card>
                    })
                }
            </div>
        </section>
    </>
};

export default Plans;
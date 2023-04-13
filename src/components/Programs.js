import './Programs.css';
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';
import { programs } from '../data';
import SectionHead from './SectionsHead';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead title='Programs' icon={<FaCrown />} />
                <div className='programs__wrapper'>
                    {programs.map((program) => (
                        <Card className="programs__program" key={program.id}>
                            <span>{program.icon}</span>
                            <h4>{program.title}</h4>
                            <small>{program.info}</small>
                            <Link to={program.path} className='btn sm'>Learn More <AiFillCaretRight /></Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Programs;
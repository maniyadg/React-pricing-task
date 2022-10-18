import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Card(props){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
            <h6 className="card-price text-center">${props.card.price}<span class="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature1}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature2}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.feature3}
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li> */
                props.card.feature.map((item) => {
                return item.isEnabled ? <li><FontAwesomeIcon icon={faCheck} />  {item.name}</li> :<li className="text-muted"><FontAwesomeIcon icon={faXmark} />  {item.name}</li>
                })
                }

            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )

}
export default Card;
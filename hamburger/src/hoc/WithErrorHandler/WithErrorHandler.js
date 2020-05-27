import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'

//va importer instance de axios concernée ()
//componentDidMount -> du coup bon pour soit hook soit class-based 
//

const WithErrorHandler = (WrappedComponents, axios) => {
    return class extends Component{

        constructor(props)
        {
            super(props)
            this.state = {
                error : null
            }
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error : null})
                return req
            })
            this.reponseInterceptor = axios.interceptors.response.use(response => response, error => this.setState({error : error}))
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.reponseInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error : null})
        }

        render()
        {
            return(
                <Aux>
                    <Modal visible={this.state.error} change={this.errorConfirmedHandler.bind(this)}>
                        {this.state.error ? 'Humm Something went wrong : ' + this.state.error.message : null} 
                    </Modal>
                    <WrappedComponents {...this.props} />
                </Aux>
            )
        }
    }
}

export default WithErrorHandler
//pas dans lee componentDidMount mais dans le constructeur 
import axios from 'axios';
import decode from 'jwt-decode';
import router from '../router';

let request = axios.create({
    baseURL: 'localhost:8080',
    withCredentials: true,
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4=',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
class Oauth {
    constructor() {
      this.carregarToken();
    }
    login(login, senha) {
        let body = `username=${login}&password=${senha}&grant_type=password`;
        return new Promise((resolve, reject) => {
          request
            .post('oauth/token', body)
            .then(res => {
              this.armazenarToken(res.data.access_token);
              resolve();
            })
            .catch(error => {
              this.notifyErrors([{
                mensagemUsuario: 'Usuário/Senha incorretos por favor verifique'
              }])
              reject(error.response);
            });
        });
      }

      getNewAccessToken() {
        // if (!token) return;
        const body = `grant_type=refresh_token`;
        return new Promise((resolve, reject) => {
          request
            .post('oauth/token', body)
            .then(res => {
              this.armazenarToken(res.data.access_token);
              resolve();
            })
            .catch(error => {
              resolve(null);
            });
        });
      }

      armazenarToken(token) {
        this.jwtPayload = decode(token);
        localStorage.setItem('token', token);
      }
    
      carregarToken() {
        const token = localStorage.getItem('token');
        if (token) {
          this.armazenarToken(token);
        }
      }
    
      getAccessToken() {
        return localStorage.getItem('token');
      }
    
      isLogged() {
        return !!this.getAccessToken();
      }
    
      isAccessTokenValid() {
        const token = this.getAccessToken();
        return token && !this.isTokenExpired(token);
      }
    
      tokenExpirationTime() {
        const token = this.getAccessToken();
        if (!token) {
          return 0;
        }
    
        const decodedToken = decode(token);
        return decodedToken.exp - new Date().getTime() / 1000;
      }
    
      isTokenExpired(jwtToken) {
        let token = decode(jwtToken);
        return token.exp < new Date().getTime() / 1000;
      }
    
      hasRole(permission) {
        // console.log("Entrou aqui")
        if (this.jwtPayload) {
          // console.log("Ainda aqui")
          console.log(this.jwtPayload)
          // console.log(permission);
          for (var role of this.jwtPayload.authorities) {
            // console.log("here")
            var regex = new RegExp(permission);
            // console.log(regex);
            if (regex.test(role)) {
              return true;
            }
          }
        }
    
        return false;
      }

      logout() {
        let options = {
          headers: {
            Authorization: 'Bearer ' + auth.getAccessToken(),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
        localStorage.removeItem('token');
        this.jwtPayload = null;
        request.delete('tokens/revoke', options);
        router.push('/login');
      }
    
      /**
       * Notificações
       */
      notifyErrors(msg = []) {
        msg.forEach(m => {
          $.notify({
            message: m.mensagemUsuario,
            icon: "fa fa-exclamation-triangle"
          }, {
            type: "danger"
          });
        });
      }
    
    }

    export const auth = new Oauth();
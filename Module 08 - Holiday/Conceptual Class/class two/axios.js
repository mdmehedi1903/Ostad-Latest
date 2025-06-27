const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');



const myFun = () => {
    axios.get('https://reqres.in/api/users').then(response => {
      console.log(response);
    });
  };
  
  const sendData = () => {
    axios
      .post(
        'https://reqres.in/api/register',
        {
          email: 'eve.holt@reqres.in',
          password: 'pistol'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Test':'Faisal ahmed'
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  



getBtn.addEventListener('click', myFun)
postBtn.addEventListener('click', sendData)





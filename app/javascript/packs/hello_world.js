import $ from 'jquery/dist/jquery';
import Greeter from '../modules/greeter';

// document.getElementById('button').onclick = function() {
//     const g = new Greeter('alice');
//     g.hello();
// }

$('#button').on('click', function() {
    const g = new Greeter('alice');
    g.hello();
});
import { Injectable } from '@angular/core';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  listOfCart: Cart[] = [
    new Cart(
      'Pothos',
      'Best of all, pothos is one of the top houseplants for improving indoor air quality, making home and office environments cleaner.Calling all black thumbs: This trailing vine has earned the nickname devils ivy for its ability to withstand nearly pitch-black conditions as well as under- and over-watering.',
      'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'String of Pearls',
      'Add this little guy to a shelf and watch it trail down. Make sure that you place it in bright, indirect sunlight and water every one to two weeks.',
      'https://images.unsplash.com/photo-1595313356207-52d15f1a35be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'Lady Palm',
      `Having a full and vibrant palm in your home is always a nice addition and the lady palm is a great one to start off with. Unlike other types of palms, this one is easier to care for and only needs indirect sunlight.`,
      'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631220195-il_794xN.2940620720_7fuw.jpg?crop=1.00xw:0.751xh;0,0.132xh&resize=768:*',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'Jade Plant',
      `Jade retains water in its round leaves, so it can sometimes survive more than a month without any attention whatsoever. "If they do get water, they start to rehydrate and grow," says Neil Mattson, an associate professor in the horticulture department at Cornell University. Position it in a sunny window (south- or west-facing, preferably) and water when the soil feels dry.`,
      'https://images.unsplash.com/photo-1616189596748-20a7a4687a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'Asparagus Fern',
      `This fluffy plant tolerates a lot more abuse than other ferns — thanks to the fact that it's technically not a fern. Asparagus setaceus adapts to both bright spots and darker corners. Keep the soil moist and it'll thrive.`,
      'https://images.unsplash.com/photo-1634137489444-066f6137b6af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'Chinese Money Plant',
      `Pilea peperomioides grows best in a shady spot (or winter windowsill) with weekly watering, according to The Little Book of House Plants and Other Greenery. Bonus: You can replant the offshoots that sprout from the base of the stem and give them as gifts.`,
      'https://images.unsplash.com/photo-1641816481523-17312c62d112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'test@test.com',
      new Date()
    ),
    new Cart(
      'Peace Lily',
      `If you're prone to overwatering, try Spathiphyllum. Peace lilies can "almost grow in a fish tank," Fried says. With enough light, they'll also produce their spade-shaped flowers throughout the year.`,
      'https://images.unsplash.com/photo-1575805501150-e064fbd815dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      'test@test.com',
      new Date()
    ),

  ];
  getPosts() {
    return this.listOfCart;

  }
  //facility 2
  deletePost(index: number) {
    this.listOfCart.splice(index, 1);
  }
  //faciluity 3
  addPosts(cart : Cart){
    this.listOfCart.push(cart);

  }
  //facility 4
  updatePosts(index: number, cart: Cart){
    this.listOfCart[index] = cart;

  }
}

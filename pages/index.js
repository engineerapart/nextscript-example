import Link from 'next/link';
import { withRouter } from 'next/router';

const items = [
  'Apples',
  'Bananas',
  'Oranges',
  'Mangos'
];

export default withRouter(({ router }) => (
  <div>
    <div>Try adding one of the following items to the url:</div>

    <ul>
      {items.map((item) => (
        <li key={item}><Link href={`/?fruit=${item}`}><a>{item}</a></Link></li>
      ))}
      <li><Link href="/?fruit=Lemons"><a>Lemons</a></Link></li>
      <li><Link href="/"><a>No selection</a></Link></li>
    </ul>

    {!router.query.fruit && (
      <h5>No item selected</h5>
    )}

    {router.query.fruit && !items.includes(router.query.fruit) && (
      <div>
        <h5>You selected item {router.query.fruit} but that item is not in the collection.</h5>
      </div>
    )}

    {router.query.fruit && items.includes(router.query.fruit) && (
      <div>
        <h5>You selected item {router.query.fruit} at index {items.findIndex((v) => v === router.query.fruit)}</h5>
      </div>
    )}
  </div>
));

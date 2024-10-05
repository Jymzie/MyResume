import { MyTemplate } from './email';
import { render } from '@vue-email/render';

const html = await render(MyTemplate,{
  title: 'some title',
},{
  pretty: true,
});

console.log(html);
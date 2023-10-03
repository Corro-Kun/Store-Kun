import Style from './style.module.css';
import Body from './components/Body/Body';
import HeadBar from './components/HeadBar/HeadBar';
import Category from './components/Category/Category';
import Content from './components/Contenet/Contenet';

export default function Home() {
  return(
    <Body>
      <HeadBar />
      <Category />
      <Content />
    </Body>
  );
}

import NO_IMAGE from '../../../../assets/images/no_image.png';
import * as S from './style';

interface Poster {
  imageUrl?: string;
}

export default function Card({ imageUrl }: Poster) {
  const url = imageUrl === undefined ? NO_IMAGE : imageUrl;
  return (
    <S.Card>
      <S.Poster src={url} />
    </S.Card>
  );
}

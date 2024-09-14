import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEffectBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.716 12.524c0-.445-.25-.836-.648-1.02l-4.17-1.977-1.917-4.11a1.11 1.11 0 0 0-1.018-.65c-.442 0-.832.25-1.019.65L7.967 9.587l-4.106 1.917a1.11 1.11 0 0 0-.652 1.02c0 .445.25.836.649 1.019l4.168 1.977 1.918 4.11c.187.4.577.649 1.019.649s.832-.248 1.018-.65l1.978-4.166 4.105-1.918c.402-.185.652-.576.652-1.02M20.093 4.682a.3.3 0 0 0-.178-.28l-1.148-.545-.528-1.131a.31.31 0 0 0-.28-.18.31.31 0 0 0-.28.18l-.545 1.147-1.13.528a.31.31 0 0 0-.18.281c0 .122.07.23.179.28l1.147.544.528 1.132c.052.11.16.179.28.179a.31.31 0 0 0 .281-.18l.545-1.146 1.13-.528c.11-.051.18-.159.18-.281M22.46 18.878a.37.37 0 0 0-.215-.337l-1.381-.656-.636-1.362a.37.37 0 0 0-.337-.215.37.37 0 0 0-.338.215l-.655 1.382-1.36.635a.37.37 0 0 0-.216.338c0 .147.082.277.215.338l1.38.655.636 1.362a.37.37 0 0 0 .338.215.37.37 0 0 0 .337-.215l.656-1.381 1.36-.636a.37.37 0 0 0 .216-.338"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterEffectBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletFavoriteTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.498 14.406h-3.807a2.531 2.531 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.512 11.814h-.003M3.5 10.67V8.624a4.936 4.936 0 0 1 4.936-4.935h8.128A4.936 4.936 0 0 1 21.5 8.622v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.1 14.12.817 1.643c.041.083.12.14.211.153l1.829.265c.073.01.14.049.186.108a.27.27 0 0 1-.03.364l-1.325 1.28a.27.27 0 0 0-.08.248l.318 1.808c.021.15-.08.29-.23.314a.3.3 0 0 1-.182-.028l-1.628-.853a.27.27 0 0 0-.262 0l-1.64.858a.287.287 0 0 1-.38-.116.28.28 0 0 1-.028-.177l.317-1.808a.28.28 0 0 0-.08-.246L3.58 16.652a.28.28 0 0 1 0-.392v0q.068-.062.16-.078l1.827-.266a.28.28 0 0 0 .212-.155l.816-1.64a.28.28 0 0 1 .377-.126q.084.041.127.125"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletFavoriteTwoTone;

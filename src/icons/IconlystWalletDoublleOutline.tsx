import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleOutline = ({
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
      d="M17.163 12.246a1.645 1.645 0 1 0 0 3.29h3.602a.75.75 0 0 1 0 1.5h-3.602a3.145 3.145 0 1 1 0-6.29h3.602a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.2 13.836a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.067 6.879a3.92 3.92 0 0 1 3.938 3.903zm0 0-7.692.034a3.92 3.92 0 0 0-3.903 3.938l.024 5.497a3.92 3.92 0 0 0 3.938 3.903l7.691-.033a3.92 3.92 0 0 0 3.904-3.938l-.024-5.498M16.06 5.38a5.42 5.42 0 0 1 5.444 5.397l.024 5.497a5.42 5.42 0 0 1-5.397 5.445l-7.692.033a5.42 5.42 0 0 1-5.444-5.396m0 0-.024-5.498a5.42 5.42 0 0 1 5.396-5.444l7.693-.034"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.02 10.184a.75.75 0 0 1 .75-.75h4.805a.75.75 0 0 1 0 1.5H7.77a.75.75 0 0 1-.75-.75M16.5 4.283c-.434-.402-1.02-.617-1.79-.503h-.004l-6.936.997H7.77c-.7.104-1.17.43-1.479.881-.32.469-.499 1.123-.49 1.904a.75.75 0 0 1-1.5.014c-.01-1 .214-1.978.752-2.765.55-.804 1.394-1.355 2.5-1.518h.002l6.935-.996h.002c1.204-.179 2.25.163 3.029.887.76.705 1.213 1.723 1.379 2.836l.07.43a.75.75 0 0 1-1.48.245l-.073-.45c-.128-.868-.466-1.543-.917-1.962"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletDoublleOutline;

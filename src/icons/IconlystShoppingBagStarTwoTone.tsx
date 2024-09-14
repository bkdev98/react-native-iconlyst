import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagStarTwoTone = ({
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
      d="M20.763 10.777V7.82c0-2.825-1.76-4.821-4.587-4.821h-8.09C5.268 3 3.5 4.996 3.5 7.821v7.621c0 2.825 1.758 4.821 4.586 4.821h3.423"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.565 8.582a3.43 3.43 0 0 1-3.432 3.433v0a3.433 3.433 0 0 1-3.434-3.433"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.122 14.247.89 1.791a.31.31 0 0 0 .23.169l1.994.288c.08.01.154.052.203.118a.295.295 0 0 1-.033.396l-1.444 1.397a.3.3 0 0 0-.087.27l.345 1.97a.3.3 0 0 1-.25.343.33.33 0 0 1-.198-.03l-1.776-.93a.3.3 0 0 0-.285 0l-1.788.935a.31.31 0 0 1-.415-.127.3.3 0 0 1-.03-.192l.345-1.972a.3.3 0 0 0-.086-.268l-1.453-1.397a.3.3 0 0 1 0-.427v0a.35.35 0 0 1 .173-.086l1.995-.29a.31.31 0 0 0 .23-.168l.89-1.79a.3.3 0 0 1 .176-.153.31.31 0 0 1 .374.153"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagStarTwoTone;

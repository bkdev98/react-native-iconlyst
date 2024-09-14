import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLoveTwoTone = ({
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
      d="M21.498 14.406h-3.807a2.53 2.53 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.819h-.003M3.5 10.67V8.624a4.936 4.936 0 0 1 4.936-4.935h8.128A4.936 4.936 0 0 1 21.5 8.622v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.917 20.257a13 13 0 0 1-2.222-1.73 4.4 4.4 0 0 1-1.058-1.685c-.396-1.237.066-2.65 1.364-3.068a2.21 2.21 0 0 1 2.005.337 2.21 2.21 0 0 1 2-.337c1.298.419 1.763 1.831 1.368 3.068a4.4 4.4 0 0 1-1.057 1.686 13 13 0 0 1-2.223 1.73l-.086.053z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletLoveTwoTone;

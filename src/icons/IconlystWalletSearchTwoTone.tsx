import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletSearchTwoTone = ({
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
      d="M21.5 14.406h-3.807a2.53 2.53 0 0 1 0-5.062H21.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.819h-.003M3.5 10.67V8.623a4.935 4.935 0 0 1 4.936-4.935h8.128A4.935 4.935 0 0 1 21.5 8.622v6.75a4.936 4.936 0 0 1-4.936 4.935h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 20.309 1.696-1.696m.002-.001a3.13 3.13 0 1 0 4.426-4.426 3.13 3.13 0 0 0-4.426 4.426"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletSearchTwoTone;

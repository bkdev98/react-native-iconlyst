import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCheckTwoTone = ({
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
      d="M21.5 14.406h-3.808a2.532 2.532 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.819h-.003M3.5 11.611V8.623a4.936 4.936 0 0 1 4.936-4.935h8.128A4.936 4.936 0 0 1 21.5 8.622v6.75a4.936 4.936 0 0 1-4.936 4.936h-4.367"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.532 17.571 2.22 2.225 4.575-4.577"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletCheckTwoTone;

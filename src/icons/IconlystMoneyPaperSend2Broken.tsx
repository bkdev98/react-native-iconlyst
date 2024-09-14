import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSend2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.312 19.114H6.189C4.223 19.114 3 17.726 3 15.763V8.364c0-1.963 1.223-3.35 3.188-3.35l1.942-.002M21 10.363V8.364c0-1.963-1.229-3.35-3.188-3.35l-6.776-.002M16.727 16.201l2.136-2.136L21 16.2M18.863 14.065v5.05M6.213 8.516h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.777a2.287 2.287 0 1 0 2.289 2.288"
    />
  </Svg>
);
export default IconlystMoneyPaperSend2Broken;

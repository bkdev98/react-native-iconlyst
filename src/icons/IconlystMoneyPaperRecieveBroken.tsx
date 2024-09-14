import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRecieveBroken = ({
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
      d="M13.297 19.103H6.184C4.221 19.103 3 17.718 3 15.757V8.37c0-1.96 1.221-3.346 3.184-3.346h1.118M20.974 10.365V8.369c0-1.96-1.227-3.346-3.183-3.346h-7.587M6.209 8.52H7.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.986 9.777a2.284 2.284 0 1 0 2.284 2.285M18.09 14.45l-2.133 2.132 2.134 2.134M15.957 16.582H21"
    />
  </Svg>
);
export default IconlystMoneyPaperRecieveBroken;

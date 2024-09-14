import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRecieveLight = ({
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
      d="M13.297 19.103H6.184C4.221 19.103 3 17.718 3 15.757V8.37c0-1.96 1.221-3.346 3.184-3.346H17.79c1.956 0 3.183 1.386 3.183 3.346v1.996M6.209 8.52H7.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.701 12.062a2.284 2.284 0 1 1 4.568 0 2.284 2.284 0 0 1-4.568 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.09 14.45-2.133 2.132 2.134 2.134M15.957 16.582H21"
    />
  </Svg>
);
export default IconlystMoneyPaperRecieveLight;
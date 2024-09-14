import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeachTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.46 15.67c-1.933-4.031-.367-6.64.907-7.822m0 0c1.527-1.417 5.217-1.203 6.707.847C22.394 13.259 17.911 21 11.944 21c-4.049 0-8.148-3.738-8.148-8.58 0-5.316 5.497-6.893 8.57-4.572"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.681 7.066c0-3.224 1.19-4.066 4.131-4.066 0 3.248-1.155 4.066-4.131 4.066M12.262 7.066C12.262 3.842 11.072 3 8.13 3c0 3.248 1.155 4.066 4.13 4.066"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeachTwoTone;

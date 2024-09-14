import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.33 7.51a.22.22 0 0 1-.22.22H4.89a.22.22 0 0 1-.22-.22c0-2.28 1.39-3.76 3.54-3.76h7.58c2.15 0 3.54 1.48 3.54 3.76m-4.25 5.92H8.93a.749.749 0 1 1 0-1.5h6.15a.749.749 0 1 1 0 1.5m0 3.5H8.93c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.15a.749.749 0 1 1 0 1.5m.71-14.68H8.21c-2.97 0-5.04 2.17-5.04 5.26v8.98c0 3.15 2.03 5.26 5.04 5.26h7.58c3.01 0 5.04-2.11 5.04-5.26V7.51c0-3.14-2.02-5.26-5.04-5.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.235 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75M15.785 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.33.75-.745.75M12.01 6.785H12a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOven2Bold;

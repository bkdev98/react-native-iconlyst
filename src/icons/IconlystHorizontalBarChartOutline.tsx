import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalBarChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 2.368a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 4.918a.75.75 0 0 1 .75-.75h5.001c.938 0 1.75.737 1.75 1.71v3.84a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-3.09c0-.088-.082-.21-.25-.21h-5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 9.718a.75.75 0 0 1 .75-.75h10c.938 0 1.75.737 1.75 1.71v3.841a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1 0-1.5h10.25v-3.09c0-.088-.082-.21-.25-.21h-10a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 14.517a.75.75 0 0 1 .75-.75h15c.938 0 1.75.737 1.75 1.71v2.88c0 .974-.812 1.71-1.75 1.71h-15a.75.75 0 0 1 0-1.5h15c.168 0 .25-.122.25-.21v-2.88c0-.088-.082-.21-.25-.21h-15a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizontalBarChartOutline;

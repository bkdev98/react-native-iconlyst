import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBrokencurved = ({
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
      d="M14.511 15.45h-5.4M12.466 11.439H9.11M12.245 21.25c6.3 0 8.4-2.31 8.4-9.25 0-1.42-.09-2.65-.28-3.7l-5.67-5.4a18 18 0 0 0-2.45-.15c-6.29 0-8.39 2.32-8.39 9.25 0 5.863 1.499 8.422 5.757 9.075"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.139 5.494a3.363 3.363 0 0 0 3.364 3.363h2.95"
    />
  </Svg>
);
export default IconlystPaperBrokencurved;
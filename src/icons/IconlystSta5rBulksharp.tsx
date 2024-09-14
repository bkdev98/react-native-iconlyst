import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rBulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 1.313C10.3 6.57 6.76 10.077 1.558 12c5.261 1.941 8.763 5.491 10.692 10.687z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 1.313C14.2 6.57 17.74 10.077 22.942 12c-5.261 1.941-8.763 5.491-10.692 10.687z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSta5rBulksharp;

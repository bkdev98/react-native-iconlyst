import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBulksharp = ({
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
      d="m18.938 13.304 1.832 4.928H3.73l1.832-4.928V8.813c0-3.688 3-6.688 6.689-6.688 3.687 0 6.687 3 6.687 6.688z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.14 18.232h-1.5a2.41 2.41 0 0 1-2.388 2.143 2.41 2.41 0 0 1-2.39-2.143h-1.5c.144 2.03 1.824 3.643 3.89 3.643s3.745-1.613 3.888-3.643"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotificationBulksharp;

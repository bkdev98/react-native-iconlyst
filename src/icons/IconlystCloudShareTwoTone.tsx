import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShareTwoTone = ({
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
      d="M19.064 16.27a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.603 6.723 7.603 8.356C5.333 8.376 3.5 9.9 3.5 12.496c0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.824 20.543-1.38-1.381 1.38-1.38M16.178 20.543l1.38-1.381-1.38-1.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.271 13.918v3.472c0 .98-.794 1.773-1.774 1.773H7.443M13.73 13.918v3.472c0 .98.794 1.773 1.774 1.773h2.054"
    />
  </Svg>
);
export default IconlystCloudShareTwoTone;

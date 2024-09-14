import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLockLight = ({
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
      d="M13.749 15.52V14.44a1.75 1.75 0 0 0-3.498-.008v1.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.464 20.045h-2.93a1.454 1.454 0 0 1-1.454-1.454v-1.645c0-.803.651-1.454 1.454-1.454h2.93c.804 0 1.455.651 1.455 1.454v1.645c0 .803-.651 1.454-1.455 1.454"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.564 16.766A4.14 4.14 0 0 0 21 12.992c0-2.596-1.83-4.139-4.103-4.14 0-1.634-1.28-4.899-4.897-4.899S7.103 7.218 7.103 8.851C4.833 8.871 3 10.396 3 12.992c0 1.68 1 3.125 2.436 3.774"
    />
  </Svg>
);
export default IconlystCloudLockLight;

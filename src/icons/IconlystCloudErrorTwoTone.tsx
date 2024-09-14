import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudErrorTwoTone = ({
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
      d="M19.064 17.692a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.9-4.897-4.9s-4.897 3.267-4.897 4.9c-2.27.02-4.103 1.544-4.103 4.14 0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.504 19.027v.09M12.504 15.609v-3.601 4.107"
    />
  </Svg>
);
export default IconlystCloudErrorTwoTone;

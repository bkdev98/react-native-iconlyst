import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviconLight = ({
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
      d="m10 9-3.002 2.501L11 14.002 13 9l4.002 2.501-3.001 2.501"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.815 17.425-5.881 3.001a1.95 1.95 0 0 1-1.773-.002L5.302 17.42a1.95 1.95 0 0 1-1.044-1.5L3.014 5.54a1.946 1.946 0 0 1 1.932-2.178h14.108a1.946 1.946 0 0 1 1.935 2.156L19.865 15.9a1.95 1.95 0 0 1-1.05 1.524"
    />
  </Svg>
);
export default IconlystDeviconLight;

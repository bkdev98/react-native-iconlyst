import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLockBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.888 3.322a8.422 8.422 0 1 1-3.37.701M17.613 17.91l3.422 3.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.293 15.34a1.545 1.545 0 0 1-1.545-1.544v-1.747c0-.853.692-1.545 1.545-1.545h3.113c.853 0 1.545.692 1.545 1.545v1.747c0 .853-.692 1.545-1.545 1.545"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.707 10.531v-1.15a1.859 1.859 0 0 0-3.715-.007v1.157"
    />
  </Svg>
);
export default IconlystSearchLockBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLockTwoTone = ({
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
      d="m17.863 17.868 3.422 3.415zM12.138 3.283a8.423 8.423 0 1 1-.002 16.846 8.423 8.423 0 0 1 .002-16.846"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.656 15.3h-3.113a1.545 1.545 0 0 1-1.545-1.545v-1.747c0-.853.692-1.545 1.545-1.545h3.113c.853 0 1.545.692 1.545 1.545v1.747c0 .853-.692 1.545-1.545 1.545"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.957 10.49V9.34a1.859 1.859 0 0 0-3.715-.007v1.157"
    />
  </Svg>
);
export default IconlystSearchLockTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldRefreshLight = ({
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
      d="M11.119 20.842a8.934 8.934 0 0 1-8.206-8.911C2.913 7.006 6.91 3 11.843 3c4.564 0 8.317 3.42 8.856 7.834"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.152 11.02a20 20 0 0 0-.195-2.193C14.492 5.425 13.275 3 11.844 3 10.422 3 9.195 5.425 8.73 8.827c-.14.966-.213 2.007-.213 3.104s.073 2.146.213 3.113c.325 2.36 1.329 4.636 2.388 5.798M2.913 11.94h8.527M15.113 19.448a3.219 3.219 0 1 0-.122-3.112"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.773 16.335h-1.782v-1.773"
    />
  </Svg>
);
export default IconlystWorldRefreshLight;

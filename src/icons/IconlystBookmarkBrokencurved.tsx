import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkBrokencurved = ({
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
      d="M8.822 9.217h6.855M19.699 9.461C19.541 3.307 18.194 2.5 12.25 2.5c-6.387 0-7.466.932-7.466 8.429 0 8.393-.157 10.571 1.439 10.571 1.595 0 4.2-3.684 6.027-3.684s4.432 3.684 6.027 3.684c1.356 0 1.447-1.572 1.443-7.189"
    />
  </Svg>
);
export default IconlystBookmarkBrokencurved;

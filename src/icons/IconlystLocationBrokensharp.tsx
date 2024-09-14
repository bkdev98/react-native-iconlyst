import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationBrokensharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.737 10.807a2.487 2.487 0 1 0-2.486 2.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 2.75c4.12 0 7.587 3.695 7.46 7.847-.184 6.035-7.46 10.653-7.46 10.653s-7.276-4.739-7.46-10.653c-.082-2.671 1.323-5.152 3.433-6.583"
    />
  </Svg>
);
export default IconlystLocationBrokensharp;

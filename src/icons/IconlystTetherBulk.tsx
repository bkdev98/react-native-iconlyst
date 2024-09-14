import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTetherBulk = ({
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
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.328 16.03v-1.172c1.892-.145 3.584-.797 3.584-2.058 0-.495-.266-1.184-1.533-1.653a.75.75 0 1 0-.522 1.406c.243.09.394.178.48.242-.252.184-.944.454-2.01.554V9.75H15.1a.75.75 0 0 0 0-1.5h-5.2a.75.75 0 0 0 0 1.5h1.929v3.613c-1.157-.086-1.902-.375-2.167-.568.086-.064.237-.152.48-.242a.75.75 0 1 0-.521-1.406c-1.268.47-1.534 1.158-1.534 1.653 0 1.296 1.787 1.945 3.742 2.065v1.165a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystTetherBulk;

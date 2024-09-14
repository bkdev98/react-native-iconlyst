import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockBroken = ({
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
      d="M12.168 19.848H7.832c-2.737.007-4.582-2.24-4.582-5.005v-3.091M21.25 10.343V8.66c0-2.763-1.845-5.013-4.582-5.013H7.832c-2.737 0-4.582 2.25-4.582 5.013M17.037 20.353a1.4 1.4 0 0 1-1.398-1.398v-1.58c0-.772.626-1.398 1.398-1.398h2.816c.77 0 1.398.626 1.398 1.398v1.58c0 .772-.627 1.398-1.398 1.398"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.128 16.005v-1.04a1.682 1.682 0 0 0-3.362-.008v1.048M17.563 8.91l-3.999 3.252a2.07 2.07 0 0 1-2.574 0L6.957 8.91"
    />
  </Svg>
);
export default IconlystEmailLockBroken;

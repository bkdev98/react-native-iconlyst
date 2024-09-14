import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockTwoTone = ({
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
      d="M21.5 11.302V9.62c0-2.763-1.845-5.013-4.582-5.013H8.082C5.345 4.607 3.5 6.857 3.5 9.62v6.182c0 2.765 1.845 5.012 4.582 5.005h4.336"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.103 21.312h-2.816a1.4 1.4 0 0 1-1.398-1.398v-1.58c0-.772.626-1.398 1.398-1.398h2.816c.77 0 1.398.626 1.398 1.398v1.58c0 .772-.627 1.398-1.398 1.398"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.378 16.964v-1.04a1.682 1.682 0 0 0-3.362-.008v1.048M17.813 9.87l-3.999 3.251a2.07 2.07 0 0 1-2.574 0L7.207 9.87"
    />
  </Svg>
);
export default IconlystEmailLockTwoTone;

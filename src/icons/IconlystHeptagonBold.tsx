import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.423 13.989-1.275-5.59a3.05 3.05 0 0 0-1.656-2.08l-5.169-2.492a3.11 3.11 0 0 0-2.646 0l-.005.002-5.165 2.49A3.05 3.05 0 0 0 3.853 8.4l-1.275 5.589c-.21.909.005 1.851.59 2.584l3.574 4.48a3.04 3.04 0 0 0 2.392 1.159h5.732c.933 0 1.805-.422 2.392-1.16l3.576-4.48a3.04 3.04 0 0 0 .59-2.583"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeptagonBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBroken = ({
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
      d="M12 22v-3.161M16.062 6.08C16.062 3.828 14.244 2 12 2S7.938 3.827 7.938 6.08v4.688c0 2.254 1.818 4.08 4.062 4.08a4.07 4.07 0 0 0 4.062-4.08V9M4 10.8a8.04 8.04 0 0 0 4.5 7.23M20 10.8c0 4.44-3.581 8.038-8 8.038"
    />
  </Svg>
);
export default IconlystVoiceBroken;

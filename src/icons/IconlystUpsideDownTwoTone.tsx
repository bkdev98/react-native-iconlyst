import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownTwoTone = ({
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
      d="M12.5 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.27 14.995v.051m.006.153a.225.225 0 1 0-.003-.45.225.225 0 0 0 .003.45M15.73 14.995v.051m.046.153a.225.225 0 1 0-.003-.45.225.225 0 0 0 .003.45M15.379 9.71c-.702-.912-1.734-1.48-2.88-1.48s-2.179.568-2.88 1.48"
    />
  </Svg>
);
export default IconlystUpsideDownTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownBroken = ({
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
      d="M9.02 14.995v.052m.006.153a.225.225 0 1 0-.003-.45.225.225 0 0 0 .003.45M15.48 14.995v.052m.046.153a.225.225 0 1 0-.003-.45.225.225 0 0 0 .003.45M15.129 9.712c-.702-.912-1.734-1.482-2.88-1.482s-2.179.57-2.88 1.482"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21a9 9 0 1 1 3.473-.695"
    />
  </Svg>
);
export default IconlystUpsideDownBroken;

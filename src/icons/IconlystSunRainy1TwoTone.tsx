import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRainy1TwoTone = ({
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
      d="m16.957 3.167-.006.02m-4.494.553.009.016m8.055 2.206.037-.02m.556 4.521-.027-.007M12.383 7.055a3.515 3.515 0 1 1 4.944 4.762"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.308 17.684a3.51 3.51 0 0 0 2.066-3.2c0-2.2-1.552-3.509-3.478-3.51 0-1.384-1.086-4.153-4.152-4.153s-4.151 2.77-4.151 4.153c-1.925.017-3.479 1.31-3.479 3.51 0 1.424.847 2.65 2.066 3.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.41 19.666v-4.668m4.667 4.668v-4.668m-2.333 5.835v-4.668"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunRainy1TwoTone;

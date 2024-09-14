import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRainySnowyTwoTone = ({
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
      d="m16.897 3.167-.005.02m-4.494.553.008.016m8.055 2.206.037-.02m.556 4.521-.027-.007M12.323 7.055a3.515 3.515 0 1 1 4.944 4.762"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.249 17.684a3.51 3.51 0 0 0 2.065-3.2c0-2.2-1.551-3.509-3.478-3.51 0-1.384-1.085-4.153-4.151-4.153s-4.152 2.77-4.152 4.153c-1.924.017-3.478 1.31-3.478 3.51 0 1.424.847 2.65 2.065 3.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.108 21.17.455-1M13.298 18.17l.455-1M16.033 21.175q.005 0 .005-.005t-.005-.005-.004.005.004.005M10.573 21.175q.005 0 .005-.005t-.005-.005-.004.005.004.005M8.748 18.18q.005 0 .005-.005t-.005-.005-.004.005.004.005"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunRainySnowyTwoTone;

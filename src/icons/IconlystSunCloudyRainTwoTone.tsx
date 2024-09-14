import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCloudyRainTwoTone = ({
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
      d="m16.96 3.203-.005.02m-4.49.553.009.015m8.048 2.205.037-.02m.556 4.517-.027-.007M12.39 7.088a3.512 3.512 0 1 1 4.94 4.758"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.31 17.718a3.51 3.51 0 0 0 2.066-3.2c0-2.201-1.552-3.51-3.479-3.511 0-1.384-1.086-4.153-4.152-4.153s-4.152 2.769-4.152 4.153c-1.925.017-3.479 1.31-3.479 3.51a3.51 3.51 0 0 0 2.066 3.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.728 20.797.268-1.03m6.624 1.03.27-1.03m-1.065-1.814.41-1.375m-3.952 0-.544 1.725h2.042l-.73 2.065"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunCloudyRainTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveBatteryBroken = ({
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
      d="M10.425 17.649h4.127c2.106 0 3.564-.98 3.996-2.808.09-.37.135-.783.135-1.224v-3.348c0-.468-.054-.91-.153-1.296-.207-.874-.648-1.548-1.269-2.017"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.525 8.97h.8c1.302 0 1.794.743 1.794 2.1v1.708c0 1.333-.492 2.06-1.794 2.06h-.792M3.608 15.796c-.324-.594-.487-1.324-.487-2.179v-3.41c0-2.62 1.575-4.042 4.123-4.042h5.985M4.762 19.454 19.669 4.546"
    />
  </Svg>
);
export default IconlystRemoveBatteryBroken;

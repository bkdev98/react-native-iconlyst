import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleBroken = ({
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
      d="M13.444 5.588a1.415 1.415 0 1 0-2.83-.003 1.415 1.415 0 0 0 2.83.003"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.521 4.168-7.098 1.183m-2.786.468L3.54 7.002M12.03 20.48h7.139M4.89 20.48h3.905M12.029 17.88V7.005M9.094 17.88h5.87M5.917 8.828l2.698 5.464c-1.566 2.153-4.349 1.975-5.365 0l1.334-2.732M18.552 6.77l-2.667 5.464c1.016 1.975 3.799 2.152 5.365 0L19.9 9.502"
    />
  </Svg>
);
export default IconlystScaleBroken;

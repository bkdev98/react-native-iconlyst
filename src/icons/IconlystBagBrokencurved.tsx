import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBrokencurved = ({
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
      d="M16.58 7.385a4.32 4.32 0 0 0-4.32-4.32 4.32 4.32 0 0 0-4.339 4.3v.02M15.19 11.889h-.047M9.358 11.889h-.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 22.005c-6.508 0-7.257-2.05-8.718-7.467C2.066 9.104 5.007 7.07 12.25 7.07s10.184 2.033 8.718 7.467c-1.148 4.257-1.857 6.435-5.267 7.172"
    />
  </Svg>
);
export default IconlystBagBrokencurved;

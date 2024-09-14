import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldKeyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.453s7.324-2.218 7.324-8.331.266-6.587-.322-7.18c-.59-.593-6.041-2.49-7.002-2.49s-6.413 1.902-7.002 2.49-.321 1.066-.321 7.18S12 21.452 12 21.452"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.898 10.684a1.801 1.801 0 1 0 0-2.548l-.003.003c-.701.703-.7 1.843.003 2.545"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.895 10.69-4.347 4.348 1.274 1.274M11.766 14.367l-1.274-1.274"
    />
  </Svg>
);
export default IconlystShieldKeyLight;

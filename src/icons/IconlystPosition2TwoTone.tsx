import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPosition2TwoTone = ({
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
      d="M14.676 18.073 12.5 20.25m0 0-2.175-2.176M12.5 20.25v-5.538M10.324 6.426 12.5 4.25m0 0 2.175 2.176M12.5 4.25v5.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.676 14.425 4.5 12.25m0 0 2.176-2.176M4.5 12.25h5.539M18.323 10.074 20.5 12.25m0 0-2.176 2.175M20.5 12.25h-5.538"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPosition2TwoTone;

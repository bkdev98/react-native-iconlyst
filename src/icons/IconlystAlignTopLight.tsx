import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignTopLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.198 3h2.604C9.016 3 10 3.984 10 5.198v13.604A2.2 2.2 0 0 1 7.802 21H5.198A2.2 2.2 0 0 1 3 18.802V5.198C3 3.984 3.984 3 5.198 3M16.198 3h2.604C20.016 3 21 3.984 21 5.198v6.604A2.2 2.2 0 0 1 18.802 14h-2.604A2.2 2.2 0 0 1 14 11.802V5.198C14 3.984 14.984 3 16.198 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignTopLight;

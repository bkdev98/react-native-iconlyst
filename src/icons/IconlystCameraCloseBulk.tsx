import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraCloseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.957 6.852a1.38 1.38 0 0 1-.944-.42c-.045-.05-.222-.27-.637-1.049a2.73 2.73 0 0 0-2.412-1.445h-3.911c-.995 0-1.911.54-2.392 1.41-.437.792-.618 1.024-.666 1.079-.251.263-.59.415-.933.43A3.567 3.567 0 0 0 2.5 10.415v5.642a4.61 4.61 0 0 0 4.606 4.607h9.788a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.598-3.56-3.543-3.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.314 15.63a.75.75 0 0 0 0-1.061l-1.253-1.253 1.253-1.252a.75.75 0 1 0-1.061-1.061L12 12.256 10.744 11a.75.75 0 0 0-1.061 1.06l1.256 1.256-1.256 1.256a.749.749 0 1 0 1.061 1.06L12 14.376l1.253 1.254a.75.75 0 0 0 1.061 0"
    />
  </Svg>
);
export default IconlystCameraCloseBulk;

import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFanSpeedSquareTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.034 14.63c.713.977-.621 1.828-.635 2.828-.01.72.45 1.216 1.142 1.355 3.12.628 4.683-3.042 1.88-4.765l-1.312-.666M11.466 11.14c-.714-.978.62-1.828.634-2.828.01-.72-.45-1.217-1.141-1.356-3.121-.628-4.683 3.043-1.88 4.766l1.312.665M10.505 13.669c-.978.713-1.828-.621-2.828-.635-.72-.01-1.217.45-1.356 1.142-.628 3.12 3.042 4.683 4.765 1.88l.666-1.312M13.994 12.1c.978-.713 1.829.621 2.829.635.72.01 1.216-.45 1.355-1.141.628-3.121-3.042-4.683-4.765-1.88l-.666 1.312"
    />
    <Circle
      cx={12.25}
      cy={12.884}
      r={1.918}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.032 3.885h8.435c2.948 0 4.783 2.081 4.783 5.026v7.947c0 2.946-1.835 5.027-4.784 5.027H8.032c-2.948 0-4.782-2.081-4.782-5.027V8.911c0-2.945 1.843-5.026 4.782-5.026"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFanSpeedSquareTwoTone;

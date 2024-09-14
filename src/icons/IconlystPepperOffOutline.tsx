import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPepperOffOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.332 12.55a.75.75 0 0 1 .25 1.03c-1.255 2.055-3.477 2.9-5.59 2.951a8.65 8.65 0 0 1-3.563-.67c.907 1.553 2.517 2.46 4.405 2.767 2.605.425 5.619-.33 7.682-2.065a.75.75 0 1 1 .966 1.147c-2.417 2.034-5.877 2.89-8.89 2.399-3.04-.495-5.741-2.4-6.332-5.958a.75.75 0 0 1 1.279-.644c.905.935 2.625 1.568 4.417 1.525 1.773-.043 3.434-.742 4.345-2.233a.75.75 0 0 1 1.031-.25M14.28 8.717c.814-.814 1.869-.816 2.64-.816 1.062 0 1.99.29 2.657.927.671.64.977 1.535.977 2.536 0 1.41-.344 2.68-.941 3.787a.75.75 0 1 1-1.32-.713c.48-.89.76-1.915.76-3.074 0-.698-.206-1.16-.511-1.45-.31-.297-.824-.513-1.623-.513-.835 0-1.258.056-1.579.377-.17.17-.313.395-.445.702a.75.75 0 1 1-1.377-.595c.18-.419.417-.823.761-1.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.8 6.07c-.436.651-.632 1.643-.632 2.581a.75.75 0 0 1-1.5 0c0-1.08.216-2.412.883-3.413.342-.514.816-.958 1.45-1.21.634-.251 1.365-.285 2.175-.09a.75.75 0 1 1-.352 1.459c-.568-.137-.975-.091-1.27.026q-.444.177-.755.646M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPepperOffOutline;

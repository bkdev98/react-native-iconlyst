import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPepperOutline = ({
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
      d="M14.28 8.717c.814-.814 1.868-.816 2.64-.816 1.062 0 1.99.29 2.657.927.671.64.977 1.535.977 2.536 0 5.024-4.278 8.04-8.502 8.687-2.134.327-4.358.077-6.17-.87-1.836-.96-3.223-2.626-3.622-5.03a.75.75 0 0 1 1.279-.644c1.006 1.04 3.085 1.678 5.13 1.426 2.001-.248 3.751-1.316 4.33-3.442l.018-.062c.26-.953.542-1.991 1.262-2.712m2.64.684c-.836 0-1.259.056-1.58.377-.4.4-.6 1.03-.893 2.107-.786 2.883-3.184 4.239-5.595 4.537-1.503.185-3.1-.027-4.43-.583.518.884 1.265 1.547 2.155 2.012 1.472.77 3.36 1.007 5.248.717 3.82-.585 7.229-3.21 7.229-7.204 0-.698-.207-1.16-.512-1.45-.31-.297-.824-.513-1.623-.513"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.8 6.07c-.436.651-.632 1.643-.632 2.581a.75.75 0 0 1-1.5 0c0-1.08.216-2.412.883-3.413.342-.514.816-.958 1.45-1.21.634-.251 1.365-.285 2.175-.09a.75.75 0 1 1-.352 1.459c-.568-.137-.975-.091-1.27.026q-.444.177-.755.646"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPepperOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasHatLight = ({
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
      d="M11.325 9.451c.647 1.475 2.416 4.736 4.315 5.987M4.613 12.849c-.623-.018-1.697.309-1.968 1.617-.193.93-.627 4.693 2.2 5.232 4.442.863 8.654.54 11.48 0 .802-.152 1.02-.504 1.342-.968"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.873 12.972-.824-3.467c-.413-1.816-2.49-5.231-7.49-4.368s-5.941 6.651-5.787 9.438c2.474.9 7.859.711 9.506 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.293 13.556c.267-.013.544-.128.741-.307a1.144 1.144 0 0 1 1.52 0c.197.179.475.294.74.307a1.144 1.144 0 0 1 1.075 1.074c.014.266.128.544.307.741a1.144 1.144 0 0 1 0 1.52 1.23 1.23 0 0 0-.306.74 1.144 1.144 0 0 1-1.075 1.075 1.23 1.23 0 0 0-.741.307 1.144 1.144 0 0 1-1.52 0 1.23 1.23 0 0 0-.74-.307 1.144 1.144 0 0 1-1.075-1.074 1.23 1.23 0 0 0-.307-.741 1.144 1.144 0 0 1 0-1.52c.179-.197.294-.475.307-.74a1.144 1.144 0 0 1 1.074-1.075M8.203 6.098c.819 1.091 1.487 5.488-3.03 4.845M12.602 5.067c-.17 1.226 1.231 5.01 4.535 2.516M6.549 17.652a1.016 1.016 0 0 1 1.299 0c.376.311.922.311 1.298-.001a1.02 1.02 0 0 1 1.299 0c.377.312.922.312 1.299 0"
    />
  </Svg>
);
export default IconlystChristmasHatLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmptyBatteryOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.459 6.757c.889-.852 2.126-1.25 3.536-1.25h7.311c1.41 0 2.649.406 3.537 1.271.892.868 1.337 2.108 1.337 3.584v3.35c0 1.46-.447 2.683-1.342 3.537-.89.849-2.127 1.243-3.532 1.243H7.987c-1.408 0-2.646-.394-3.534-1.244-.894-.855-1.336-2.078-1.332-3.537v-3.415c0-1.458.445-2.682 1.338-3.54M5.497 7.84c-.532.51-.876 1.304-.876 2.456v3.418c-.003 1.152.34 1.943.869 2.45.535.513 1.359.828 2.497.828h7.32c1.133 0 1.957-.315 2.495-.828.532-.508.878-1.3.878-2.452v-3.35c0-1.175-.348-1.988-.883-2.509-.539-.524-1.362-.845-2.49-.845H7.994c-1.137 0-1.961.317-2.498.832"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.527 9.064a.75.75 0 0 1 .75-.75h.8c.795 0 1.496.233 1.97.82.444.553.574 1.285.574 2.03v1.708c0 .734-.13 1.46-.58 2.006-.474.578-1.174.804-1.964.804h-.792a.75.75 0 0 1 0-1.5h.792c.511 0 .708-.138.805-.256.124-.15.24-.455.24-1.054v-1.709c0-.612-.117-.93-.244-1.087-.099-.123-.295-.262-.8-.262h-.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmptyBatteryOutline;

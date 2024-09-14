import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLowBatteryOutline = ({
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
      d="M4.459 6.757c.888-.852 2.126-1.25 3.536-1.25h7.31c1.41 0 2.649.406 3.537 1.271.892.868 1.337 2.107 1.337 3.584v3.35c0 1.46-.447 2.682-1.342 3.536-.89.85-2.126 1.244-3.531 1.244h-7.32c-1.408 0-2.645-.394-3.533-1.245-.894-.855-1.336-2.078-1.332-3.536v-3.415c0-1.458.445-2.683 1.338-3.54M5.497 7.84c-.532.51-.876 1.304-.876 2.456v3.418c-.003 1.152.34 1.943.869 2.45.535.512 1.359.828 2.497.828h7.319c1.133 0 1.958-.316 2.495-.829.533-.508.878-1.3.878-2.451v-3.35c0-1.175-.348-1.988-.883-2.509-.538-.524-1.362-.845-2.49-.845H7.995c-1.137 0-1.961.317-2.498.832"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.736 9.427a.75.75 0 0 1 .75.75v3.646a.75.75 0 0 1-1.5 0v-3.646a.75.75 0 0 1 .75-.75M18.527 9.064a.75.75 0 0 1 .75-.75h.8c.795 0 1.496.233 1.97.82.444.553.574 1.285.574 2.03v1.708c0 .734-.13 1.46-.58 2.005-.474.579-1.174.804-1.964.804h-.792a.75.75 0 0 1 0-1.5h.792c.511 0 .708-.137.805-.255.124-.15.24-.455.24-1.054v-1.709c0-.613-.117-.93-.244-1.088-.1-.122-.295-.26-.8-.26h-.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLowBatteryOutline;

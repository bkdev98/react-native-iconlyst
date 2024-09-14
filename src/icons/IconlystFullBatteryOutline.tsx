import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullBatteryOutline = ({
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
      d="M3.838 6.757c.888-.852 2.126-1.25 3.536-1.25h7.311c1.41 0 2.648.406 3.537 1.271.892.868 1.337 2.108 1.337 3.584v3.35c0 1.46-.447 2.683-1.342 3.537-.89.849-2.127 1.243-3.532 1.243h-7.32c-1.407 0-2.645-.394-3.533-1.244-.894-.855-1.336-2.078-1.332-3.537v-3.415c0-1.458.445-2.682 1.338-3.54M4.876 7.84C4.344 8.35 4 9.144 4 10.296v3.418c-.003 1.152.34 1.943.869 2.45.535.513 1.359.828 2.497.828h7.319c1.133 0 1.958-.315 2.496-.828.532-.508.878-1.3.878-2.452v-3.35c0-1.175-.348-1.988-.883-2.509-.539-.524-1.362-.845-2.491-.845H7.374c-1.137 0-1.961.317-2.498.832"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.906 9.064a.75.75 0 0 1 .75-.75h.8c.796 0 1.497.233 1.97.821.444.552.574 1.285.574 2.028v1.709c0 .734-.13 1.46-.579 2.005-.474.579-1.174.805-1.965.805h-.792a.75.75 0 0 1 0-1.5h.792c.512 0 .709-.138.806-.256.123-.15.238-.455.238-1.054v-1.709c0-.613-.116-.93-.243-1.088-.099-.122-.295-.26-.8-.26h-.8a.75.75 0 0 1-.75-.75M7.115 9.427a.75.75 0 0 1 .75.75v3.647a.75.75 0 0 1-1.5 0v-3.647a.75.75 0 0 1 .75-.75m3.86 0a.75.75 0 0 1 .75.75v3.647a.75.75 0 0 1-1.5 0v-3.647a.75.75 0 0 1 .75-.75m3.678 0a.75.75 0 0 1 .75.75v3.647a.75.75 0 0 1-1.5 0v-3.647a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullBatteryOutline;

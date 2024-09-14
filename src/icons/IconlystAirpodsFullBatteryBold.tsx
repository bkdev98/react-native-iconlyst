import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsFullBatteryBold = ({
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
      d="M13.194 6.557c0-1.267.61-2.436 1.521-3.271s2.137-1.351 3.393-1.293h.001c1.32.067 2.491.729 3.244 1.727.306.405.454.905.454 1.403v2.342c0 .496-.145.996-.453 1.402a4.64 4.64 0 0 1-3.682 1.817h-.87v2.164a.5.5 0 0 1-.5.5h-2.608a.5.5 0 0 1-.5-.5zm5.517-1.63a.75.75 0 0 0-.75.75v1.366a.75.75 0 1 0 1.5 0V5.677a.75.75 0 0 0-.75-.75M11.38 9.05c0-1.266-.611-2.436-1.521-3.27S7.722 4.428 6.466 4.486h-.001c-1.32.068-2.491.73-3.244 1.727a2.33 2.33 0 0 0-.455 1.404V9.96c0 .496.146.995.454 1.402a4.64 4.64 0 0 0 3.682 1.817h.87v6c0 1 .807 1.81 1.804 1.81s1.804-.81 1.804-1.81zM5.863 7.422a.75.75 0 0 1 .75.75v1.364a.75.75 0 1 1-1.5 0V8.171a.75.75 0 0 1 .75-.75M13.38 14.873c.414-.397.981-.572 1.602-.572h3.043c.621 0 1.189.179 1.602.581.416.405.614.974.614 1.626v1.69c0 .647-.2 1.21-.617 1.608-.414.396-.98.57-1.6.57H14.98c-.62 0-1.187-.174-1.6-.57-.418-.4-.615-.963-.613-1.608V16.48c0-.645.197-1.208.614-1.608m1.867 1.098a.75.75 0 0 1 .75.75v1.236a.75.75 0 0 1-1.5 0v-1.236a.75.75 0 0 1 .75-.75m3.175.75a.75.75 0 0 0-1.5 0v1.236a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M21.5 15.674a.75.75 0 0 1 .75.75v1.828a.75.75 0 0 1-1.5 0v-1.828a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default IconlystAirpodsFullBatteryBold;

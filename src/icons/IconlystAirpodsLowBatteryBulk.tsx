import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsLowBatteryBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.715 3.286c-.91.835-1.521 2.004-1.521 3.27v6.292a.5.5 0 0 0 .5.5H16.3a.5.5 0 0 0 .5-.5v-2.164h.87c1.483 0 2.846-.71 3.683-1.817a2.32 2.32 0 0 0 .453-1.402V5.123a2.33 2.33 0 0 0-.454-1.403 4.34 4.34 0 0 0-3.244-1.727c-1.257-.058-2.484.458-3.394 1.293M9.859 5.78c.91.834 1.521 2.004 1.521 3.27V19.18c0 .999-.807 1.81-1.804 1.81s-1.804-.812-1.804-1.81v-6h-.87A4.64 4.64 0 0 1 3.22 11.36a2.32 2.32 0 0 1-.454-1.402V7.617c0-.498.149-.998.455-1.404a4.34 4.34 0 0 1 3.244-1.727c1.257-.058 2.484.459 3.394 1.294" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.38 14.873c.414-.397.981-.572 1.602-.572h3.043c.621 0 1.189.179 1.602.581.416.405.614.974.614 1.626v1.69c0 .647-.2 1.21-.617 1.608-.414.396-.98.57-1.6.57H14.98c-.62 0-1.187-.174-1.6-.57-.418-.4-.615-.963-.613-1.608V16.48c0-.645.197-1.208.614-1.608m1.867 1.098a.75.75 0 0 1 .75.75v1.236a.75.75 0 0 1-1.5 0v-1.236a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M22.25 16.424a.75.75 0 0 0-1.5 0v1.828a.75.75 0 0 0 1.5 0zM17.962 5.677a.75.75 0 0 1 1.499 0v1.366a.75.75 0 1 1-1.5 0zM6.612 8.171a.75.75 0 0 0-1.499 0v1.365a.75.75 0 1 0 1.5 0z"
    />
  </Svg>
);
export default IconlystAirpodsLowBatteryBulk;

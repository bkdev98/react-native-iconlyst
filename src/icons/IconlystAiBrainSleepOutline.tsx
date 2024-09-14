import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainSleepOutline = ({
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
      d="M4.056 13.233a.75.75 0 0 0-1.01-.326c-.53.271-.91.8-1.111 1.36a3.1 3.1 0 0 0-.05 1.956c.407 1.319 1.679 2.34 3.959 2.636v1.04a.83.83 0 0 0 .827.831H8.36a.83.83 0 0 0 .761-.506l.974-2.305c.28.008.592-.02.908-.108.41-.113.828-.328 1.183-.685.766.408 1.68.49 2.477.267 1.1-.307 2.04-1.214 2.105-2.665a.75.75 0 1 0-1.499-.066c-.032.723-.453 1.131-1.009 1.286-.6.168-1.291.015-1.716-.398a.75.75 0 0 0-1.19.194 1.16 1.16 0 0 1-.751.622 1.6 1.6 0 0 1-.78.012.75.75 0 0 0-.887.432l-1.023 2.42h-.568v-1.054a.75.75 0 0 0-.706-.749c-2.391-.142-3.13-1.031-3.32-1.646a1.6 1.6 0 0 1 .027-1.005c.115-.316.288-.484.385-.534a.75.75 0 0 0 .326-1.01m3.683 6.406"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.062 8.899a.75.75 0 0 0-.205 1.04c1.037 1.546.594 3.334-.694 4.116-.418.254-.95.376-1.476.366-.535-.01-.978-.154-1.233-.336a2.4 2.4 0 0 1-.85-1.145.75.75 0 0 0-1.42.485 3.9 3.9 0 0 0 1.4 1.882c.565.403 1.327.6 2.074.614.755.014 1.58-.156 2.284-.584 2.09-1.27 2.626-4.05 1.16-6.233a.75.75 0 0 0-1.04-.205M16.259 6.159q.028.016.055.033a.75.75 0 0 0 .762-1.293l-.099-.058c-1.012-.598-3.05-1.804-5.668-1.53a.75.75 0 0 0 .156 1.492c2.119-.222 3.786.762 4.794 1.356"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.453 9.574c-.146.476-.506.896-1.233 1.081a.75.75 0 0 0 .37 1.454c1.222-.312 1.993-1.106 2.297-2.094.293-.952.134-2.012-.32-2.904-.457-.897-1.245-1.688-2.297-2.065-1.07-.384-2.333-.313-3.667.38a.75.75 0 0 0 .69 1.33c1.012-.524 1.842-.524 2.47-.298.645.231 1.16.729 1.467 1.334.312.611.381 1.268.223 1.781"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.31 8.473a.75.75 0 0 0-1.027.243c-.002-.002-.068.068-.272.12a1.4 1.4 0 0 1-.7-.01.75.75 0 1 0-.408 1.443 2.9 2.9 0 0 0 1.474.02c.423-.106.911-.342 1.182-.785a.75.75 0 0 0-.25-1.03M1.433 4.418a.75.75 0 0 1 .75-.75h2.701a.75.75 0 0 1 .556 1.254L3.875 6.648h1.01a.75.75 0 1 1 0 1.5H2.182a.75.75 0 0 1-.556-1.254l1.565-1.726h-1.01a.75.75 0 0 1-.75-.75M6.562 7.414a.75.75 0 0 1 .75-.75h2.88a.75.75 0 0 1 .556 1.254L9.004 9.84h1.188a.75.75 0 1 1 0 1.5h-2.88a.75.75 0 0 1-.556-1.253L8.5 8.164H7.312a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainSleepOutline;
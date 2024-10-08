import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonOutline = ({
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
      d="M5.793 5.793C8.507 3.007 12.56 2.014 16.1 3.315q.023.008.044.018c.148.065.305.08.522.052.166-.022.305-.056.48-.1.105-.026.224-.055.369-.087.335-.073.76-.14 1.222-.055.481.088.937.328 1.364.756s.668.883.757 1.364c.084.463.017.887-.056 1.222-.032.145-.061.264-.087.369a4 4 0 0 0-.1.48c-.028.217-.013.374.052.522l.018.044c1.3 3.54.308 7.593-2.477 10.307-2.721 2.793-6.79 3.784-10.336 2.467l-.052-.021c-.148-.068-.305-.088-.518-.07-.163.014-.302.04-.476.075-.1.02-.213.041-.35.065-.324.055-.733.102-1.174.01-.458-.094-.894-.326-1.301-.733-.408-.408-.64-.844-.735-1.302-.091-.44-.044-.85.011-1.175.024-.136.046-.248.065-.349.034-.174.061-.313.075-.476.018-.213-.002-.37-.07-.518l-.021-.052C2.009 12.582 3 8.513 5.793 5.793m9.77-1.077C12.61 3.64 9.18 4.46 6.861 6.846l-.016.015c-2.39 2.324-3.21 5.766-2.123 8.72.197.446.22.873.189 1.244a7 7 0 0 1-.116.734q-.024.124-.04.216c-.045.268-.055.455-.021.619.03.146.106.325.326.545s.399.296.545.326c.164.034.351.024.62-.021q.091-.016.215-.04c.216-.042.49-.095.734-.116a2.5 2.5 0 0 1 1.243.189c2.955 1.086 6.397.268 8.721-2.123l.015-.015c2.385-2.319 3.206-5.75 2.13-8.701a2.4 2.4 0 0 1-.156-1.299c.032-.247.1-.528.155-.75q.032-.128.053-.224c.06-.274.077-.464.046-.63-.027-.149-.103-.337-.341-.576-.24-.238-.427-.314-.575-.341-.167-.03-.357-.014-.631.046l-.225.053c-.221.054-.502.123-.749.155-.384.05-.83.044-1.299-.156"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.148 15.112a.75.75 0 0 1 .015 1.06c-1.296 1.335-3.247 1.818-4.96 1.182a.75.75 0 1 1 .522-1.406c1.125.417 2.457.111 3.363-.82a.75.75 0 0 1 1.06-.016"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLemonOutline;

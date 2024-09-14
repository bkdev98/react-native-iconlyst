import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockBold = ({
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
      d="M12.953 12.416a2.802 2.802 0 0 1-3.515.004L5.402 9.168A.75.75 0 0 1 6.344 8l4.033 3.25a1.31 1.31 0 0 0 1.635-.002l3.994-3.246a.75.75 0 0 1 .946 1.164zm1.61 2.336a.33.33 0 0 0 .09-.185c.26-2.07 1.947-3.645 4.05-3.692h.046c.52 0 1.013.101 1.47.276.209.08.447-.066.447-.29V8.334c0-3.14-2.185-5.51-5.082-5.51H6.748c-2.898 0-5.082 2.37-5.082 5.51v6.181c0 1.617.57 3.076 1.604 4.106.922.918 2.118 1.403 3.456 1.403h6.502c.197 0 .34-.187.304-.38a3.4 3.4 0 0 1-.059-.62v-1.58c0-1.044.416-1.992 1.09-2.692"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.834 19.025c0 .364-.285.65-.648.65H17.37a.643.643 0 0 1-.648-.65v-1.58c0-.353.291-.64.648-.64h2.816c.357 0 .648.287.648.64zm-2.067-4.9h.01c.51 0 .928.41.934.91v.27H17.85v-.257a.94.94 0 0 1 .918-.923m2.444 1.451v-.551a2.44 2.44 0 0 0-2.442-2.4h-.027a2.44 2.44 0 0 0-2.393 2.41v.539a2.13 2.13 0 0 0-1.127 1.871v1.58c0 1.186.964 2.15 2.148 2.15h2.816a2.15 2.15 0 0 0 2.148-2.15v-1.58c0-.808-.457-1.505-1.123-1.869"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailLockBold;

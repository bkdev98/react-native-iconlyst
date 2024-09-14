import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiveTvBold = ({
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
      d="M14.534 13.855c.11.1.24.25.24.44s-.13.35-.24.45a8.2 8.2 0 0 1-2.33 1.47c-.18.07-.35.08-.45.01-.11-.06-.14-.22-.15-.29-.12-1.13-.12-2.23-.01-3.25.02-.11.06-.25.17-.31.06-.03.12-.05.18-.05q.12 0 .24.06c.9.37 1.69.87 2.35 1.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.544 15.855c-.82.74-1.78 1.35-2.79 1.75-.28.11-.56.16-.83.16-.34 0-.66-.08-.94-.25-.48-.29-.79-.79-.87-1.41q-.195-1.89 0-3.6c.08-.64.4-1.14.9-1.43.52-.3 1.15-.33 1.75-.08 1.06.44 1.99 1.03 2.78 1.75.47.43.73.98.73 1.55s-.26 1.13-.73 1.56m2.27-8.96h-3.29l3.37-3.01c.31-.27.33-.75.06-1.06a.765.765 0 0 0-1.06-.06l-4.05 3.62-3.94-3.61a.747.747 0 0 0-1.06.05c-.28.3-.26.78.05 1.06l3.29 3.01h-3.32c-2.49 0-4.53 2.04-4.53 4.53v5.46c0 2.5 2.04 4.53 4.53 4.53h9.95a4.53 4.53 0 0 0 4.52-4.53v-5.46c0-2.49-2.03-4.53-4.52-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiveTvBold;

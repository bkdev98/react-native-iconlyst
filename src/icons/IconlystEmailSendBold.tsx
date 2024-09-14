import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSendBold = ({
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
      d="m10.025 12.374-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.1.3.1.8-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6q-.9 0-1.8-.6m2.8 5.5a2.5 2.5 0 0 1 2.5-2.5h.4c.11 0 .2-.09.208-.2a2.498 2.498 0 0 1 4.26-1.567l.79.79a.198.198 0 0 0 .338-.132c.074-1.991.004-4 .004-5.991 0-3.2-2.2-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h5.971c.2 0 .297-.291.164-.44a2.48 2.48 0 0 1-.635-1.66"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.555 17.444-2.6-2.6a.749.749 0 1 0-1.06 1.06l1.22 1.22h-3.92a.75.75 0 0 0 0 1.5h4.12l-1.42 1.42a.749.749 0 1 0 1.06 1.06l2.6-2.6a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailSendBold;

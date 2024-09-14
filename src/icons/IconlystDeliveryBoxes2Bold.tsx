import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxes2Bold = ({
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
      d="M18.85 16.25h-2c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h2a.749.749 0 1 1 0 1.5m1.11-3.75-4.21-.01c-1.47 0-2.39 1.04-2.39 2.51l-.01 3.97c-.01 1.47.91 2.52 2.38 2.52l4.21.01c1.48 0 2.4-1.03 2.4-2.51l.01-3.97c0-1.47-.91-2.51-2.39-2.52M8.85 16.25h-2a.749.749 0 1 1 0-1.5h2c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m1.12-3.75-4.21-.01c-1.48 0-2.4 1.04-2.4 2.51l-.01 3.97c0 1.47.92 2.52 2.38 2.52l4.22.01c1.47 0 2.39-1.03 2.4-2.51v-3.97c.01-1.47-.91-2.51-2.38-2.52M11.85 4.75h2a.749.749 0 1 1 0 1.5h-2c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75m-1.12 6.75 4.22.01c1.47 0 2.39-1.04 2.39-2.51l.01-3.97c0-1.47-.91-2.52-2.39-2.52l-4.21-.01c-1.47 0-2.39 1.03-2.39 2.51l-.01 3.97c-.01 1.47.91 2.51 2.38 2.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxes2Bold;

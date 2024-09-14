import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxesBold = ({
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
      d="M18.87 16.78h-1.6a.749.749 0 1 1 0-1.5h1.6c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m.96-4.03-3.54.01c-.7 0-1.32.24-1.77.7-.47.47-.73 1.15-.73 1.92l.01 3.05c.01 1.53 1.04 2.59 2.51 2.59l3.54-.01c.71 0 1.32-.24 1.77-.69.47-.47.73-1.15.73-1.92l-.01-3.05c0-1.53-1.03-2.6-2.51-2.6M17.27 5.51h1.6c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-1.6a.749.749 0 1 1 0-1.5m-2.73 4.81c.45.44 1.05.67 1.75.67h3.56c1.5-.01 2.5-1.06 2.5-2.62l-.01-2.79c0-1.53-1.03-2.6-2.51-2.6l-3.54.01c-.7 0-1.31.24-1.77.7-.47.47-.73 1.15-.73 1.92l.01 2.79c.01.77.27 1.45.74 1.92M8.43 10.3H6.82a.749.749 0 1 1 0-1.5h1.61a.749.749 0 1 1 0 1.5m.96-4.34H5.85c-.74.01-1.37.28-1.81.74-.44.47-.69 1.11-.69 1.88l.01 9.61c0 .77.26 1.45.73 1.92.45.44 1.06.67 1.75.67h3.57c1.47-.01 2.5-1.09 2.49-2.62v-9.6c0-.77-.27-1.45-.74-1.92-.45-.45-1.08-.67-1.77-.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxesBold;

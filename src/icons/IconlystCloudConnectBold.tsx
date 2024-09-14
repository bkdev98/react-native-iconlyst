import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectBold = ({
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
      d="M11.989 19.751a.727.727 0 0 1-.723-.699c0-.011.006-.021.006-.033s-.006-.021-.006-.032a.727.727 0 0 1 .723-.698c.384 0 .691.3.721.676-.002.019-.011.035-.011.054 0 .02.01.036.011.055a.726.726 0 0 1-.721.677m4.616-4.346c.33 0 .999-.045 1.785-.36a4.42 4.42 0 0 0 2.588-4.019c0-2.412-1.579-4.155-3.896-4.381C16.857 4.618 15.222 2 11.99 2 8.757 2 7.122 4.618 6.897 6.645 4.58 6.871 3 8.614 3 11.026a4.42 4.42 0 0 0 2.61 4.022 4.8 4.8 0 0 0 1.757.357h3.874v1.522a2.23 2.23 0 0 0-1.343 1.342H6.235a.75.75 0 0 0 0 1.5h3.663a2.23 2.23 0 0 0 2.091 1.482 2.23 2.23 0 0 0 2.093-1.482h3.663a.75.75 0 0 0 0-1.5h-3.663a2.23 2.23 0 0 0-1.341-1.341v-1.523z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudConnectBold;

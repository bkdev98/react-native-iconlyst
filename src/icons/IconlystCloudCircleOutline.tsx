import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudCircleOutline = ({
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
      d="M9.843 8.63c.554-.733 1.446-1.318 2.712-1.318 1.265 0 2.157.585 2.712 1.317.352.466.571.993.679 1.473a2.97 2.97 0 0 1 1.46.752c.573.547.899 1.322.899 2.229a3.05 3.05 0 0 1-1.823 2.795 3.3 3.3 0 0 1-1.208.24H9.833a3.3 3.3 0 0 1-1.234-.255 3.05 3.05 0 0 1-1.794-2.78c0-.908.325-1.682.899-2.23a2.97 2.97 0 0 1 1.46-.75 3.9 3.9 0 0 1 .679-1.474m1.196.904c-.327.432-.455.953-.455 1.249a.75.75 0 0 1-.743.75c-.465.004-.844.16-1.102.406-.25.239-.434.609-.434 1.144 0 .622.367 1.16.899 1.407.238.094.47.128.629.128h5.44c.162 0 .396-.032.636-.126.53-.246.896-.785.896-1.41 0-.534-.184-.904-.435-1.143-.257-.246-.636-.402-1.101-.406a.75.75 0 0 1-.743-.75c0-.296-.128-.816-.455-1.248-.304-.402-.773-.723-1.516-.723-.744 0-1.212.321-1.516.723"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.388 6.166A8.25 8.25 0 1 0 6.721 17.834 8.25 8.25 0 0 0 18.388 6.166M5.66 5.106c3.808-3.808 9.981-3.808 13.789 0s3.808 9.98 0 13.788-9.981 3.808-13.789 0-3.807-9.98 0-13.788"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudCircleOutline;

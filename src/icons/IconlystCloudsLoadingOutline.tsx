import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsLoadingOutline = ({
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
      d="M7.36 4.6a.75.75 0 0 1-.09 1.056q-.751.634-1.332 1.423A.75.75 0 0 1 4.73 6.19 9.8 9.8 0 0 1 6.302 4.51a.75.75 0 0 1 1.057.09M18.707 18.624a.75.75 0 0 1-.128 1.053 9.758 9.758 0 0 1-8.15 1.835.75.75 0 0 1 .329-1.463c.777.174 1.59.24 2.425.178a8.2 8.2 0 0 0 4.471-1.73.75.75 0 0 1 1.053.127M3.983 14.893a.75.75 0 0 1 .989.384 8.27 8.27 0 0 0 2.859 3.467.75.75 0 1 1-.853 1.234 9.77 9.77 0 0 1-3.379-4.096.75.75 0 0 1 .384-.989M4.077 8.82c.4.11.635.522.526.922a8.2 8.2 0 0 0-.274 2.78.75.75 0 0 1-1.496.111 9.7 9.7 0 0 1 .323-3.286.75.75 0 0 1 .921-.526M12.169 2.257a9.76 9.76 0 0 1 10.126 9.378 9.67 9.67 0 0 1-1.457 5.484.75.75 0 0 1-1.275-.79 8.17 8.17 0 0 0 1.233-4.636 8.26 8.26 0 0 0-8.57-7.937.75.75 0 0 1-.058-1.499"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.663 8.713c.554-.732 1.446-1.317 2.712-1.317s2.158.585 2.712 1.317c.353.466.572.993.679 1.474a2.97 2.97 0 0 1 1.46.75c.574.548.899 1.322.899 2.23a3.05 3.05 0 0 1-1.822 2.795 3.3 3.3 0 0 1-1.21.24h-5.44a3.3 3.3 0 0 1-1.233-.255 3.05 3.05 0 0 1-1.795-2.78c0-.908.326-1.682.9-2.23a2.97 2.97 0 0 1 1.46-.75 3.9 3.9 0 0 1 .678-1.474m1.196.905c-.326.432-.454.953-.454 1.249a.75.75 0 0 1-.744.75c-.465.004-.844.16-1.101.406-.251.239-.435.609-.435 1.144 0 .622.367 1.16.9 1.407.237.094.47.128.628.128h5.44c.163 0 .396-.033.636-.126.53-.246.896-.785.896-1.41 0-.534-.184-.904-.434-1.143-.258-.246-.637-.402-1.102-.406a.75.75 0 0 1-.743-.75c0-.296-.128-.816-.455-1.248-.304-.402-.772-.723-1.516-.723s-1.212.321-1.516.722"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudsLoadingOutline;

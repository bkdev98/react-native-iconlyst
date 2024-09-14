import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentExploreOutline = ({
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
      d="M16.25 21.75H8.295a4.51 4.51 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.375 4.587m-7.88-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.938 3.086h7.909a3.044 3.044 0 0 0 2.906-3.082V9a1.29 1.29 0 0 0-.362-.9L14.97 4.15a1.3 1.3 0 0 0-.937-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.814 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 1 1 1.5 0v2.894a1.81 1.81 0 0 0 1.8 1.81h2.737a.75.75 0 1 1 0 1.5zM14.847 16.935a.75.75 0 0 1-.531-.22l-.95-.95a3.359 3.359 0 1 1 1.063-1.058l.947.948a.75.75 0 0 1-.53 1.28m-3.274-5.894a1.87 1.87 0 1 0 1.322 3.2 1.87 1.87 0 0 0-1.326-3.192z"
    />
  </Svg>
);
export default IconlystDocumentExploreOutline;

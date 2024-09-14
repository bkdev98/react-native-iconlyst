import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWattpadSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.77 7.907c1.255.08 1.248 1.744 1.097 2.657.592-.811 1.937-2.768 3.2-2.366.58.252.54.918.096 1.577a31 31 0 0 0-2.205 3.836c-.368.74-.903 1.604-1.865 1.487-1.307-.143-1.489-1.811-1.414-2.845-.41.669-.71 1.395-1.05 2.1-.477.968-1.15 1.965-2.356 1.708-1.624-.52-1.784-3.017-1.772-4.404.018-1.094.08-3.303 1.548-3.448.791-.087 1.249.5 1.347 1.214.07.559.004 1.122-.049 1.68.66-1.126 1.83-3.31 3.424-3.196"
    />
  </Svg>
);
export default IconlystWattpadSquareLight;

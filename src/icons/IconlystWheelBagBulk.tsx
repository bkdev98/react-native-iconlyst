import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.5 11.25v4.69c0 2.33-1.26 3.87-3.34 4.17-.24.03-.5.05-.76.05H8.6c-.26 0-.51-.02-.75-.05-2.09-.3-3.35-1.84-3.35-4.18v-4.68c0-2.47 1.41-4.05 3.72-4.2.12-.02.25-.02.38-.02h6.8c.13 0 .26 0 .39.02 2.3.15 3.71 1.74 3.71 4.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.602 10.32a.75.75 0 0 0-.75.75v5.18a.75.75 0 0 0 1.5 0v-5.18a.75.75 0 0 0-.75-.75M12.002 10.32a.75.75 0 0 0-.75.75v5.18a.75.75 0 0 0 1.5 0v-5.18a.75.75 0 0 0-.75-.75M15.408 17a.75.75 0 0 0 .75-.75v-5.18a.75.75 0 0 0-1.5 0v5.18c0 .414.336.75.75.75M7.85 20.11V21c0 .41.34.75.75.75s.75-.34.75-.75v-.84H8.6c-.26 0-.51-.02-.75-.05M15.4 20.16h-.74V21a.749.749 0 1 0 1.5 0v-.89c-.24.03-.5.05-.76.05M15.4 7.03c.13 0 .26 0 .39.02V4.63c0-1.31-1.07-2.38-2.39-2.38h-2.8a2.38 2.38 0 0 0-2.38 2.38v2.42c.12-.02.25-.02.38-.02h1.12v-2.4c0-.49.39-.88.88-.88h2.8c.49 0 .89.39.89.88v2.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWheelBagBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.755 17.06a9.14 9.14 0 0 1-1.64-5.237 9.17 9.17 0 0 1 6.646-8.82c.05-.015.092.04.068.085a8.29 8.29 0 0 0 1.467 9.73 8.27 8.27 0 0 0 9.73 1.458c.046-.024.1.018.086.068-1.099 3.843-4.64 6.656-8.82 6.656a9.2 9.2 0 0 1-2.253-.279"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.71 4.905c-.883.008-1.596.6-1.596 1.61 0 .654.39 1.216.948 1.468.235.095.469.132.647.132h3.809c.178 0 .412-.035.65-.13a1.61 1.61 0 0 0 .946-1.47c0-1.01-.712-1.602-1.595-1.61 0-.635-.498-1.905-1.904-1.905-1.407 0-1.905 1.27-1.905 1.905"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.65 21A2.96 2.96 0 1 0 5.808 17.2 1.968 1.968 0 1 0 5.083 21zM18.24 11.522v.008M6.536 11.53v.007"
    />
  </Svg>
);
export default IconlystMoonCloudLight;

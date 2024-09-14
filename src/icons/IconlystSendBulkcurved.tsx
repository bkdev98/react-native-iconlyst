import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendBulkcurved = ({
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
      d="M11.357 12.893q.018.089.044.197c.073.323.18.779.316 1.313.272 1.065.662 2.452 1.13 3.712.235.63.492 1.238.768 1.762.272.517.579.985.923 1.31.343.323.803.573 1.335.446.501-.119.895-.537 1.217-1.095 1.049-1.817 2.44-5.775 3.453-9.454.51-1.848.929-3.648 1.164-5.1.118-.724.192-1.374.206-1.905.011-.438.01-.936-.202-1.334a.5.5 0 0 0-.206-.206c-.398-.211-.896-.213-1.334-.202-.531.014-1.18.088-1.905.206-1.452.235-3.252.655-5.1 1.164C9.487 4.72 5.53 6.11 3.712 7.16c-.559.322-.976.716-1.095 1.216-.127.533.123.993.447 1.336s.792.65 1.309.923c.524.276 1.131.533 1.762.767 1.26.47 2.647.859 3.712 1.13a51 51 0 0 0 1.51.361"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.062 5.603a.75.75 0 0 1 0 1.06l-5.531 5.532a.75.75 0 0 1-1.061-1.06l5.532-5.532a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendBulkcurved;

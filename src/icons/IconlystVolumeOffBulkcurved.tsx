import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBulkcurved = ({
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
      d="M20.463 3.797a.75.75 0 0 0-1.061 0l-3.96 3.96c-.27-1.296-.747-2.11-1.554-2.68-1.684-.994-3.23.192-4.357 1.057-.461.354-.896.688-1.224.796-.45.147-.838.194-1.214.24-.66.08-1.341.162-2.086.795-1.208 1.025-1.196 2.692-1.188 3.901-.008 1.217-.02 2.884 1.19 3.912.595.501 1.148.651 1.682.731l-2.633 2.633a.749.749 0 1 0 1.06 1.06L20.464 4.858a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.427 12.87a.5.5 0 0 0-.554.105l-4.509 4.51a.504.504 0 0 0 .073.768c.545.367 1.275.774 2.108.774.435 0 .899-.11 1.379-.396 1.183-.841 1.688-2.323 1.802-5.283a.5.5 0 0 0-.299-.478"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVolumeOffBulkcurved;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForbiddenSignOutline = ({
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
      d="M5.106 4.856c3.807-3.808 9.981-3.808 13.788 0s3.808 9.981 0 13.788-9.98 3.808-13.788 0-3.808-9.981 0-13.788M5.66 6.47a8.253 8.253 0 0 0 .506 11.114 8.253 8.253 0 0 0 11.114.506zm12.68 10.56a8.253 8.253 0 0 0-.506-11.114A8.253 8.253 0 0 0 6.72 5.41z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForbiddenSignOutline;

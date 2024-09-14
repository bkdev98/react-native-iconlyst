import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoltCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.834 6.303A8.25 8.25 0 1 0 6.166 17.97 8.25 8.25 0 0 0 17.834 6.303M5.106 5.243c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.981 0-13.789"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.419 7.507a.75.75 0 0 1 .223 1.037l-1.837 2.844h3.766a.75.75 0 0 1 .63 1.157l-2.588 4a.75.75 0 0 1-1.26-.816l1.84-2.841H9.427a.75.75 0 0 1-.63-1.157l2.584-4.001a.75.75 0 0 1 1.037-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoltCircleOutline;

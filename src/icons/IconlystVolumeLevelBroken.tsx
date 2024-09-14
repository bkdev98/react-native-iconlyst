import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLevelBroken = ({
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
      d="M18.614 19.673v.009m-12.706-.01v.01M18.614 6.989V7m-12.706-.01V7m6.343-2.682v.01m8.999 9.045v.009m-18-.009v.009M12.25 18.211a4.889 4.889 0 1 0 0-9.775 4.889 4.889 0 0 0-3.014 8.736M13.44 12.372l2.167-2.42"
    />
  </Svg>
);
export default IconlystVolumeLevelBroken;

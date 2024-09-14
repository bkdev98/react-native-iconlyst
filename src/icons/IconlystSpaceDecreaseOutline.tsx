import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceDecreaseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.065 21.766a.75.75 0 0 1 .75-.75h11.369a.75.75 0 1 1 0 1.5H6.815a.75.75 0 0 1-.75-.75M11.715 15.812v2.99a.75.75 0 0 0 1.5 0v-2.988l1.398 1.363a.75.75 0 1 0 1.047-1.074l-2.649-2.582a.748.748 0 0 0-1.07-.023l-2.673 2.605a.75.75 0 1 0 1.047 1.074zM6.065 3.766a.75.75 0 0 1 .75-.75h11.369a.75.75 0 1 1 0 1.5H6.815a.75.75 0 0 1-.75-.75M12.465 5.984a.75.75 0 0 1 .75.75v2.98l1.398-1.363a.75.75 0 0 1 1.047 1.075l-2.647 2.58a.75.75 0 0 1-1.073.024L9.268 9.426a.75.75 0 1 1 1.047-1.075l1.4 1.365V6.734a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceDecreaseOutline;

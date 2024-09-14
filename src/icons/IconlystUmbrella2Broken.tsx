import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.313 13.769h9.72c.9 0 1.596-.808 1.447-1.695-.757-4.522-4.49-7.956-8.98-7.956s-8.223 3.434-8.98 7.956a1.464 1.464 0 0 0 1.448 1.695h1.579M16.462 19.15a1.981 1.981 0 0 1-3.962 0v-5.38"
    />
  </Svg>
);
export default IconlystUmbrella2Broken;

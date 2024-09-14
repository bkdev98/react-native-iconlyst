import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPreferencesLight = ({
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
      d="M11.031 17.258h3.897M3.98 10.73h3.897M18.084 10.307h3.896M12.98 20.602v-3.344M5.928 20.6v-9.87M20.031 20.601V10.307M5.928 6.662V3.398M20.031 6.237V3.398M12.979 13.188v-9.79"
    />
  </Svg>
);
export default IconlystPreferencesLight;

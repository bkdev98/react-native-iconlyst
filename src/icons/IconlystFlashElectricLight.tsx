import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashElectricLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.999 8.606V7.029a3.89 3.89 0 0 1 3.893-3.892h1.29M2.999 15.668v1.577a3.89 3.89 0 0 0 3.893 3.892h1.257M21 15.668v1.577a3.89 3.89 0 0 1-3.893 3.892h-1.29M20.999 8.606V7.029a3.89 3.89 0 0 0-3.893-3.892h-1.257M8.368 12.36l2.018-4.924a.31.31 0 0 1 .295-.206h2.705c.216 0 .368.214.296.418l-1.197 2.809a.314.314 0 0 0 .296.418h2.555c.269 0 .413.317.235.52l-4.85 5.536c-.219.25-.624.033-.539-.287l.925-3.468a.314.314 0 0 0-.303-.394H8.662a.314.314 0 0 1-.294-.422"
    />
  </Svg>
);
export default IconlystFlashElectricLight;

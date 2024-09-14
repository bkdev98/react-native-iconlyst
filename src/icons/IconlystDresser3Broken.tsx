import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser3Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.151 9.967v8.145C5.151 19.804 6.205 21 7.9 21h8.2c1.694 0 2.749-1.196 2.749-2.888V5.888C18.848 4.196 17.793 3 16.099 3H7.9C6.21 3 5.151 4.196 5.151 5.888V6.91M12.786 18.356h-1.57M5.152 16.06h11.101M11.996 16.057V3M14.305 8.823v1.57m-4.608-1.57v1.57"
    />
  </Svg>
);
export default IconlystDresser3Broken;

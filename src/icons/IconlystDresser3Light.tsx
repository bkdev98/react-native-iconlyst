import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser3Light = ({
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
      d="M7.899 3h8.2c1.694 0 2.749 1.196 2.749 2.888v12.224c0 1.692-1.055 2.888-2.75 2.888H7.9c-1.694 0-2.748-1.196-2.748-2.888V5.888C5.151 4.196 6.21 3 7.9 3M12.786 18.356h-1.57M5.152 16.06h13.696M11.996 16.057V3M14.305 8.823v1.57m-4.608-1.57v1.57"
    />
  </Svg>
);
export default IconlystDresser3Light;

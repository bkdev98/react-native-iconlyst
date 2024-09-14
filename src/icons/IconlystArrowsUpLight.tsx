import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsUpLight = ({
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
      d="M12 4.084c.936 1.423 1.558 2.15 2.693 3.194M12 4.084c-.936 1.423-1.558 2.15-2.692 3.194M12 4.084v15.831M15.57 19.915c0-3.988 1.366-7.34 5.425-9.75m0 0 .005-.003m-.005.002.001-.002c-1.54.101-2.404.05-3.779-.198m3.778.2c-.515 1.453-.7 2.299-.833 3.689M8.43 19.915c0-3.988-1.366-7.34-5.425-9.75m0 0L3 10.161m.005.002-.001-.002c1.539.101 2.404.05 3.779-.198m-3.778.2c.514 1.453.699 2.299.833 3.689"
    />
  </Svg>
);
export default IconlystArrowsUpLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunriseLight = ({
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
      d="M12.055 3v1.235m8.1 6.865H18.92m-13.73 0H3.955m13.827-5.728-.872.873m-9.71 0-.872-.872M15.064 14.594a4.592 4.592 0 1 0-6.062-.037M12.054 16.5V21m0-4.5 1.972 1.973M12.054 16.5l-1.972 1.973M3.055 15.094a3.49 3.49 0 0 0 3.6 0 3.5 3.5 0 0 1 3.291-.167M3.055 18.7a3.49 3.49 0 0 0 3.6 0M21.055 15.094a3.49 3.49 0 0 1-3.6 0 3.5 3.5 0 0 0-3.292-.167M21.055 18.7a3.49 3.49 0 0 1-3.6 0"
    />
  </Svg>
);
export default IconlystSunriseLight;

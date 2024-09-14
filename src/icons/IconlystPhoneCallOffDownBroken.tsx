import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallOffDownBroken = ({
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
      d="M12.498 4.94c9.674-.002 8.96 3.469 9.002 3.86 0 3.467-1.058 2.947-3.788 2.948-2.83 0-.766-3.39-5.214-3.39-4.447 0-2.38 3.39-5.21 3.392-2.73 0-3.788.511-3.788-2.947.038-.346-.52-3.106 6.059-3.736M15.019 16.533 12.5 19.062l-2.519-2.529M12.5 19.062v-6.269"
    />
  </Svg>
);
export default IconlystPhoneCallOffDownBroken;

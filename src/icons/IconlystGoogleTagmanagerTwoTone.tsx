import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerTwoTone = ({
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
      d="m15.547 19.071-.02-.019m4.243-9.866-4.958-4.958C13.084 2.5 10.777 2.64 9.045 4.37L4.373 9.043c-1.731 1.732-1.876 4.033-.143 5.766l4.958 4.958c1.734 1.734 4.036 1.589 5.767-.142l4.672-4.672c1.732-1.731 1.876-4.034.143-5.767"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.024 15.55 8.492 12.02l7.054-7.054m-3.522 3.531 3.522 3.523-7.054 7.054"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleTagmanagerTwoTone;

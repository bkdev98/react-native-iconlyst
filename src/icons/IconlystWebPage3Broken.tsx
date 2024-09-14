import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage3Broken = ({
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
      d="M11.759 16.778a2.595 2.595 0 1 1-3.67-3.668 2.595 2.595 0 0 1 3.67 3.668m0 0-1.836-1.835v-2.595M15.111 13.498h3.197m-3.197 2.83h2.456M7.163 6.55h-.056m2.542 0h-.056m2.542 0h-.055"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.818 21h4.217c2.948 0 4.782-2.082 4.782-5.027V8.026C21.817 5.081 19.983 3 17.035 3H8.602C5.662 3 3.818 5.081 3.818 8.026v7.947c0 2.945 1.835 5.026 4.783 5.026h.685M18.866 9.492H3.818"
    />
  </Svg>
);
export default IconlystWebPage3Broken;

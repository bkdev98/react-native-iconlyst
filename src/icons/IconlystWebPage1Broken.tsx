import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage1Broken = ({
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
      d="M6.345 6.55h-.056m2.541 0h-.055m2.541 0h-.055M11.818 21h4.217c2.948 0 4.782-2.082 4.782-5.027V8.026C20.817 5.081 18.983 3 16.035 3H7.602C4.662 3 2.818 5.081 2.818 8.026v7.947c0 2.945 1.835 5.026 4.783 5.026h.685M17.866 9.492H2.818"
    />
  </Svg>
);
export default IconlystWebPage1Broken;

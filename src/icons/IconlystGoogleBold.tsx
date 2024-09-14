import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.564 15.172a.31.31 0 0 0 .05-.366 4.9 4.9 0 0 1-.587-2.297c0-1.022.322-1.963.854-2.751a.31.31 0 0 0-.032-.396L5.044 6.541a.292.292 0 0 0-.435.019 9.44 9.44 0 0 0-.341 11.446.292.292 0 0 0 .446.032zM8.918 8.309a.31.31 0 0 0 .392.037A4.9 4.9 0 0 1 12 7.54a4.92 4.92 0 0 1 3.107 1.089.5.5 0 0 0 .67-.04l2.474-2.52a.504.504 0 0 0-.027-.726A9.44 9.44 0 0 0 12 3.009c-2.214 0-4.25.764-5.868 2.039a.292.292 0 0 0-.022.437zM15.095 16.709a.31.31 0 0 0-.393-.037 4.95 4.95 0 0 1-2.702.807 4.9 4.9 0 0 1-3.105-1.112.313.313 0 0 0-.419.017L5.694 19.18a.293.293 0 0 0 .01.425A9.45 9.45 0 0 0 12 22.01a9.48 9.48 0 0 0 5.875-2.043.292.292 0 0 0 .023-.436zM21.338 10.795a.5.5 0 0 0-.491-.406H12c-.277 0-.5.223-.5.5v3.33a.5.5 0 0 0 .5.5h4.458a4.5 4.5 0 0 1-.325.546.31.31 0 0 0 .032.393l2.803 2.822a.292.292 0 0 0 .435-.02 9.44 9.44 0 0 0 2.097-5.95c0-.573-.055-1.15-.162-1.715"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleBold;

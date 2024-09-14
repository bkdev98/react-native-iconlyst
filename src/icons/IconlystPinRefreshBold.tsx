import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRefreshBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.912 11.24a.75.75 0 0 1-1.019.548l-1.554-.631a.75.75 0 1 1 .564-1.39l.547.222a2.5 2.5 0 0 0-2.451-2.036c-.498 0-.98.15-1.398.433a.75.75 0 0 1-.842-1.24 3.97 3.97 0 0 1 2.24-.693 3.997 3.997 0 0 1 3.912 4.787m-1.67 2.444a3.96 3.96 0 0 1-2.24.694 3.997 3.997 0 0 1-3.914-4.787.747.747 0 0 1 1.017-.548l1.435.582a.75.75 0 0 1-.564 1.39l-.425-.172A2.5 2.5 0 0 0 12 12.878c.498 0 .98-.15 1.395-.433a.75.75 0 0 1 .845 1.239M12 2.5c-4.425 0-8.026 3.6-8.026 8.027C3.974 16.162 10.566 21.5 12 21.5s8.025-5.338 8.025-10.973c0-4.427-3.6-8.027-8.025-8.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinRefreshBold;

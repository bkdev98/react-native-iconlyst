import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1Bulk = ({
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
      d="M8.21 2.25h7.58c2.97 0 5.04 2.17 5.04 5.26v8.98c0 3.15-2.02 5.26-5.04 5.26H8.21c-3.01 0-5.04-2.11-5.04-5.26V7.51c0-3.14 2.03-5.26 5.04-5.26m10.9 5.48H4.89a.22.22 0 0 1-.22-.22c0-2.28 1.39-3.76 3.54-3.76h7.58c2.15 0 3.54 1.48 3.54 3.76a.22.22 0 0 1-.22.22"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 10.48a4.12 4.12 0 0 0-3.884 2.776c-.055.159.112.298.27.241q.314-.111.644-.177a3.98 3.98 0 0 1 2.933.678c.401.288.614.363.915.363s.501-.075.89-.364c.288-.2.589-.35.902-.476.292-.11.593-.2.9-.217.147-.008.262-.15.206-.286A4.09 4.09 0 0 0 12 10.48M11.08 18.61c.3.07.6.11.92.11 2.02 0 3.683-1.463 4.026-3.393.02-.118-.073-.228-.192-.212-.232.03-.56.143-1.176.562l-.013.013c-.464.3-1.015.55-1.767.55-.877 0-1.479-.337-1.993-.713a2.1 2.1 0 0 0-1.542-.351 2.3 2.3 0 0 0-1.157.621.2.2 0 0 0-.041.206q.047.132.095.258c.04.1.09.2.14.3.01.01.02.02.02.03.11.21.25.41.4.6.23.28.49.53.78.74.08.06.16.12.25.17l.21.12c.09.05.19.1.29.15.15.06.3.12.45.16.09.04.2.06.3.08"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.46 5.285h-1.923a.75.75 0 0 0 0 1.5h1.923a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWashingMachine1Bulk;

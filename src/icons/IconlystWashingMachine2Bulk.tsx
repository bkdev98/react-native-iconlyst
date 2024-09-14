import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine2Bulk = ({
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
      d="M12 10.48a4.12 4.12 0 0 0-3.884 2.776c-.055.159.11.294.27.238l.105-.035a4 4 0 0 1 .539-.139 3.98 3.98 0 0 1 2.933.678c.401.288.614.363.915.363s.501-.075.89-.364c.288-.2.589-.35.902-.476.286-.107.594-.198.9-.216.147-.008.262-.151.206-.287A4.09 4.09 0 0 0 12 10.48M11.08 18.61c.3.07.6.11.92.11 1.989 0 3.631-1.418 4.009-3.302.028-.145-.112-.26-.252-.216-.383.122-.74.237-1.091.47l-.014.01-.015.013c-.462.298-1.011.546-1.759.546-.877 0-1.479-.338-1.993-.714a2.1 2.1 0 0 0-1.542-.351 2.05 2.05 0 0 0-.889.4q-.114.077-.223.179a.28.28 0 0 0-.065.306q.036.102.074.2c.038.095.086.19.133.286l.018.025c.01.012.013.025.02.038.108.203.244.396.389.58.23.28.49.53.78.74.08.06.16.12.25.17l.21.12c.09.05.19.1.29.15.15.06.3.12.45.16.09.04.2.06.3.08"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.447 6.785a.755.755 0 0 1-.755-.75c0-.414.33-.75.745-.75h.01a.75.75 0 0 1 0 1.5M14.382 6.785a.755.755 0 0 1-.755-.75c0-.414.33-.75.745-.75h.01a.75.75 0 0 1 0 1.5M9.471 6.785H7.547a.75.75 0 0 1 0-1.5h1.924a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWashingMachine2Bulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWatchBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M14.683 19.518a.93.93 0 0 1-.903.731h-3.56a.93.93 0 0 1-.904-.73l-.213-1.006c.087.005.166.021.255.021h5.281c.09 0 .17-.016.257-.021zM9.316 4.482a.93.93 0 0 1 .904-.731h3.56c.433 0 .813.308.903.731l.226 1.067c-.089-.004-.17-.02-.263-.02H9.358c-.094 0-.177.016-.268.021zm8.082 2.054a3.1 3.1 0 0 0-.873-.594l-.375-1.771a2.44 2.44 0 0 0-2.37-1.92h-3.56A2.436 2.436 0 0 0 7.85 4.17l-.376 1.772c-1.162.566-1.846 1.694-1.846 3.237v5.652c0 1.571.69 2.718 1.86 3.29l.361 1.71a2.435 2.435 0 0 0 2.371 1.918h3.56a2.434 2.434 0 0 0 2.37-1.919l.361-1.704c1.171-.565 1.86-1.698 1.86-3.248V9.181c.002-1.09-.334-2.005-.973-2.645"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.819 10.452c-.51.164-.625.75-.476 1.215.232.72 1.095 1.416 1.658 1.791.572-.38 1.43-1.075 1.654-1.787.15-.47.034-1.055-.477-1.219a.82.82 0 0 0-.732.126.75.75 0 0 1-.896-.002.82.82 0 0 0-.732-.124M12 15.087a.75.75 0 0 1-.358-.092c-.223-.12-2.201-1.236-2.725-2.869-.431-1.34.204-2.704 1.444-3.102a2.3 2.3 0 0 1 1.641.09 2.32 2.32 0 0 1 1.63-.092c1.245.401 1.88 1.763 1.454 3.103-.51 1.617-2.5 2.746-2.726 2.87a.74.74 0 0 1-.36.092"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWatchBulk;

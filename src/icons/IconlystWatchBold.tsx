import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWatchBold = ({
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
      d="M15.085 12.125c-.51 1.617-2.5 2.746-2.725 2.87a.75.75 0 0 1-.718.001c-.224-.122-2.202-1.237-2.726-2.87-.431-1.341.204-2.704 1.444-3.102v-.001a2.32 2.32 0 0 1 1.642.09 2.33 2.33 0 0 1 1.63-.091c1.245.401 1.88 1.763 1.453 3.103m-.401 7.393a.93.93 0 0 1-.904.732h-3.56a.93.93 0 0 1-.904-.73l-.212-1.007c.086.005.165.021.254.021h5.282c.09 0 .169-.016.257-.021zM9.316 4.482a.93.93 0 0 1 .905-.731h3.559c.434 0 .814.308.904.731l.226 1.068c-.09-.005-.172-.021-.263-.021h-5.29c-.092 0-.176.016-.267.021zm8.082 2.054a3.1 3.1 0 0 0-.872-.594l-.376-1.771a2.435 2.435 0 0 0-2.37-1.92h-3.56A2.436 2.436 0 0 0 7.85 4.17l-.375 1.772c-1.163.566-1.846 1.694-1.846 3.237v5.652c0 1.571.688 2.718 1.859 3.29l.362 1.711a2.436 2.436 0 0 0 2.37 1.918h3.56a2.43 2.43 0 0 0 2.37-1.92l.362-1.704c1.17-.565 1.859-1.698 1.859-3.248V9.181c.003-1.09-.334-2.005-.973-2.645"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.178 10.452a.82.82 0 0 0-.731.126.75.75 0 0 1-.896-.001.81.81 0 0 0-.732-.125c-.51.165-.624.749-.475 1.216.23.718 1.095 1.416 1.656 1.79.573-.381 1.43-1.075 1.655-1.787.15-.47.034-1.054-.477-1.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWatchBold;

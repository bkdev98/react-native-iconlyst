import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoBold = ({
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
      fill={props.color}
      d="M10.509 2.253a.75.75 0 0 1 .818.676l.694 7.247h-1.507l-.68-7.104a.75.75 0 0 1 .675-.819M12.494 10.176H14l.456-4.967a.75.75 0 1 0-1.494-.137zM16.551 7.847h-.227c-.314 0-.592.2-.691.498l-.493 1.334a.73.73 0 0 1-.288.376l.576-6.579a.75.75 0 0 1 1.495.131zM18.554 7.847q.154 0 .295.04l.468-1.792a.75.75 0 0 0-1.451-.379l-.557 2.131zM7.683 7.847H6.447q-.145 0-.277.035l-.5-3.175a.75.75 0 1 1 1.482-.233zM9.86 9.679a.73.73 0 0 0 .288.376l-.693-4.27a.75.75 0 1 0-1.48.24l.295 1.822h.407c.314 0 .591.2.69.498z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.184 8.467H5.667a1.25 1.25 0 0 0-1.222 1.51L6.638 20.21c.161.753.826 1.29 1.597 1.29h8.53c.771 0 1.436-.537 1.597-1.29l2.193-10.232a1.25 1.25 0 0 0-1.221-1.51h-2.518a.82.82 0 0 0-.78.562l-.556 1.297a.82.82 0 0 1-.779.562H10.3a.82.82 0 0 1-.779-.562l-.556-1.297a.82.82 0 0 0-.78-.562m6.282 7.633a1.967 1.967 0 1 0-3.933 0 1.967 1.967 0 0 0 3.933 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPotatoBold;

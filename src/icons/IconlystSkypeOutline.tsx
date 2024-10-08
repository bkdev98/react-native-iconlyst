import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeOutline = ({
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
      d="M10.155 4.308c-1.4-.81-3.272-.726-4.579.217l-.008.006a4.3 4.3 0 0 0-1.722 2.598l-.001.004a4.33 4.33 0 0 0 .465 3.027.75.75 0 0 1 .088.498 7.8 7.8 0 0 0 .375 4.049l.001.003a7.75 7.75 0 0 0 3.744 4.177l.004.002c1.466.749 3.186.993 4.819.712a.75.75 0 0 1 .503.09c1.36.788 3.167.735 4.466-.139l.009-.005a4.3 4.3 0 0 0 1.846-2.73l.001-.006a4.33 4.33 0 0 0-.478-2.972.75.75 0 0 1-.087-.498 7.8 7.8 0 0 0-.302-3.849V9.49a7.75 7.75 0 0 0-3.633-4.28l-.004-.002c-1.508-.822-3.304-1.103-5.004-.81a.75.75 0 0 1-.503-.09m.51-1.43c-1.868-.959-4.244-.81-5.962.427a5.8 5.8 0 0 0-2.325 3.513 5.83 5.83 0 0 0 .5 3.847 9.3 9.3 0 0 0 .49 4.57 9.25 9.25 0 0 0 4.474 4.991 9.27 9.27 0 0 0 5.49.895c1.814.93 4.106.823 5.811-.321a5.8 5.8 0 0 0 2.494-3.692 5.83 5.83 0 0 0-.517-3.772 9.3 9.3 0 0 0-.402-4.332 9.25 9.25 0 0 0-4.34-5.116 9.27 9.27 0 0 0-5.713-1.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.661 9.154a1.03 1.03 0 0 0-.372.822c0 .604.365.977.679 1.039l2.556.499c1.153.224 1.871 1.323 1.892 2.46v.077a2.52 2.52 0 0 1-.909 1.921c-.597.5-1.425.753-2.404.753-1.444 0-2.837-.783-3.217-2.078a.75.75 0 0 1 1.44-.422c.136.466.778 1 1.777 1 .73 0 1.184-.188 1.441-.403.244-.204.37-.478.372-.81-.005-.597-.368-.966-.678-1.026l-2.557-.5c-1.17-.228-1.892-1.355-1.892-2.51 0-.754.301-1.464.91-1.972.597-.5 1.425-.754 2.404-.754 1.444 0 2.836.785 3.216 2.078a.75.75 0 1 1-1.44.423c-.136-.467-.778-1.001-1.776-1.001-.731 0-1.185.189-1.442.404"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSkypeOutline;

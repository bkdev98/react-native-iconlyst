import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger5Bold = ({
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
      d="M16.643 17.986h2.066a3.044 3.044 0 0 0 3.041-3.041 3.02 3.02 0 0 0-1.878-2.813l-7.104-2.938c.006-.189.131-.356.334-.433 1.429-.573 2.164-2.077 1.747-3.579a2.93 2.93 0 0 0-2.036-2.001 2.96 2.96 0 0 0-2.585.504 2.92 2.92 0 0 0-1.15 2.33.75.75 0 0 0 1.5 0c0-.449.206-.865.564-1.14.366-.282.821-.37 1.288-.244.456.12.848.505.975.954.235.85-.255 1.54-.847 1.779a1.99 1.99 0 0 0-1.266 1.549.8.8 0 0 0-.218.059l-6.97 3.083c-1.127.478-1.854 1.576-1.854 2.89a3.043 3.043 0 0 0 3.04 3.041h2.063v1.2c0 .96.78 1.74 1.737 1.74h5.818c.957 0 1.735-.78 1.735-1.74zm-4.984-7.632-6.958 3.077a1.54 1.54 0 0 0-.951 1.424c0 .939.69 1.631 1.54 1.631h13.419a1.544 1.544 0 0 0 .593-2.966l-7.572-3.132-.012-.005z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger5Bold;

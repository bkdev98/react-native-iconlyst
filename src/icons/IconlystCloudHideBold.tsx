import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudHideBold = ({
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
      d="M17.508 9.872a.21.21 0 0 1-.182-.176c-.285-1.832-1.753-4.743-5.324-4.743-3.572 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.176c-2.36.29-3.957 2.098-3.957 4.584a4.64 4.64 0 0 0 2.74 4.222 5.1 5.1 0 0 0 1.668.367c.139.007.235-.131.201-.266a2.4 2.4 0 0 1-.073-.578 2.5 2.5 0 0 1 2.5-2.5h4.926a2.5 2.5 0 0 1 2.5 2.5c0 .2-.028.393-.075.578-.034.135.063.273.201.265a5.2 5.2 0 0 0 1.623-.37 4.64 4.64 0 0 0 2.716-4.218c0-2.486-1.597-4.295-3.956-4.584"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.499 17.451H9.573a.75.75 0 0 0 0 1.5h4.926a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudHideBold;

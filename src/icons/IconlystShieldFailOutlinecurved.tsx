import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.88 14.793a.74.74 0 0 1-.53-.22L12 13.223l-1.35 1.35a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.35-1.35-1.35-1.348a.75.75 0 1 1 1.06-1.06L12 11.104l1.35-1.35a.749.749 0 1 1 1.06 1.06l-1.35 1.35 1.35 1.349a.749.749 0 0 1-.53 1.28"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 22.574c-2.937 0-8.423-2.78-8.423-9.478 0-1.89-.024-3.267-.042-4.28v-.04c-.047-2.544-.056-3.075.6-3.73.832-.832 4.277-2.827 7.865-2.827 3.59 0 7.033 1.995 7.865 2.827.656.654.646 1.185.601 3.724v.008a216 216 0 0 0-.044 4.319c0 6.697-5.485 9.477-8.422 9.477m0-18.855c-3.264 0-6.319 1.9-6.805 2.388-.193.192-.2.51-.16 2.642v.044c.018 1.02.042 2.403.042 4.304 0 6.086 5.074 7.977 6.923 7.977 1.848 0 6.922-1.89 6.922-7.978 0-1.927.025-3.32.044-4.345.038-2.133.031-2.451-.162-2.644-.486-.487-3.539-2.388-6.804-2.388"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldFailOutlinecurved;

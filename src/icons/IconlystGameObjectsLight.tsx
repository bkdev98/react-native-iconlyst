import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameObjectsLight = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M5.88 3.904 3.131 8.666a1.032 1.032 0 0 0 .893 1.548h5.5c.793 0 1.29-.86.893-1.548l-2.75-4.762a1.032 1.032 0 0 0-1.787 0ZM21.01 6.906a3.464 3.464 0 1 0-6.928 0 3.464 3.464 0 0 0 6.928 0ZM19.696 13.962h-4.192c-.679 0-1.229.55-1.229 1.229v4.192c0 .679.55 1.229 1.23 1.229h4.191c.68 0 1.23-.55 1.23-1.23v-4.191c0-.68-.55-1.23-1.23-1.23Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9.74 14.29-6.126 6.127m0-6.127 6.126 6.127"
    />
  </Svg>
);
export default IconlystGameObjectsLight;

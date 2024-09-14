import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatCircleLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.746 7.348a2.597 2.597 0 0 1 2.852 2.584c0 2.272.113 3.409 2.19 4.317-.938.414-1.049.464-1.427 1.241a.65.65 0 0 1-.519.369c-1.33.108-1.86.804-2.84.804-.982 0-1.511-.696-2.84-.804a.65.65 0 0 1-.52-.369c-.378-.777-.49-.827-1.427-1.24 2.042-.894 2.186-2.007 2.19-4.203.003-1.356.99-2.57 2.341-2.699"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.775 10.477c.553.313 1.052.81 1.524 1.395M16.23 10.477c-.552.313-1.051.81-1.523 1.395"
    />
  </Svg>
);
export default IconlystSnapchatCircleLight;

import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.75 15.936a.3.3 0 0 0-.001-.424L7.784 12.55a.75.75 0 0 1 0-1.06c2.09-2.092 6.306-6.286 7.3-7.274a.29.29 0 0 0-.007-.42c-.878-.8-1.934-1.344-3.163-1.294-1.156.041-2.27.564-3.22 1.514L4.02 8.686c-1.975 1.986-2.032 4.59-.142 6.476l3.625 3.625a.3.3 0 0 0 .425-.001z" />
      <Path d="m20.126 8.835-3.59-3.59a.3.3 0 0 0-.425.001L13.288 8.1a.3.3 0 0 0 .002.423l2.968 2.966a.75.75 0 0 1 0 1.06c-2.43 2.429-4.857 4.854-7.301 7.266a.29.29 0 0 0 .003.42c.83.756 1.846 1.269 2.997 1.269 1.162 0 2.34-.51 3.355-1.522l.485-.487a.4.4 0 0 1 .044-.037.5.5 0 0 0 .094-.094l.038-.045 4.01-4.016c.98-.98 1.518-2.172 1.518-3.36 0-1.134-.476-2.21-1.376-3.108" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.231 9.584a.3.3 0 0 0-.424 0l-2.22 2.222a.3.3 0 0 0 0 .424l2.222 2.22a.3.3 0 0 0 .424 0l2.221-2.22a.3.3 0 0 0 0-.424z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleTagmanagerBulk;

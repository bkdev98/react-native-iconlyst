import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderBulkcurved = ({
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
      fillRule="evenodd"
      d="M20.542 7.254c-1.097-1.182-2.496-1.154-3.73-1.132-.772.014-1.503.029-2.025-.27-.645-.366-.868-.782-1.127-1.265-.286-.534-.61-1.14-1.491-1.615-1.626-.876-3.535-1.047-6.007-.537C3.719 2.935 2.14 5.1 2.14 7.95v6.066c0 7.272 4.19 7.835 10.11 7.835 5.728 0 10.11-.577 10.11-7.862 0-1.785 0-4.773-1.818-6.735"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.446 15.476h9.593a.75.75 0 0 0 0-1.5H7.446a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystFolderBulkcurved;

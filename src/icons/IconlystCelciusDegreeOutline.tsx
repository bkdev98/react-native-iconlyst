import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelciusDegreeOutline = ({
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
      d="m14.206 2.677 5.686 3.281a3.19 3.19 0 0 1 1.593 2.76v6.564c0 1.138-.608 2.19-1.593 2.758l-5.686 3.283c-.985.57-2.2.57-3.184 0L5.335 18.04a3.19 3.19 0 0 1-1.592-2.758V8.717c0-1.137.607-2.19 1.592-2.758l5.687-3.282a3.19 3.19 0 0 1 3.184 0m-.75 1.299c-.521-.301-1.163-.301-1.684 0L6.085 7.258c-.52.3-.842.857-.842 1.46v6.564c0 .602.321 1.158.842 1.46l5.687 3.282c.52.301 1.163.301 1.684 0l5.686-3.283c.521-.3.843-.857.843-1.459V8.717c0-.602-.322-1.159-.843-1.46z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.61 11.013a2.483 2.483 0 1 0 0 3.511.75.75 0 0 1 1.061 1.061 3.983 3.983 0 1 1 0-5.633.75.75 0 1 1-1.06 1.06M7.96 8.507a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.891 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelciusDegreeOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.688 10.308c0-4.542 4.147-8.104 8.841-7.153 2.788.57 5.04 2.809 5.623 5.598a7.335 7.335 0 0 1-3.043 7.605A1 1 0 0 0 16 16.35h-3.3a5.8 5.8 0 0 0 .329-1.506c1.076-.312 2.053-1.09 2.353-2.376.394-1.688-.463-3.192-1.256-4.171a10 10 0 0 0-1.725-1.657h-.872a9.921 9.921 0 0 0-1.725 1.657c-.792.979-1.65 2.483-1.256 4.171.369 1.578 1.662 2.369 2.957 2.51a4 4 0 0 1-.45 1.372H8q-.045 0-.09.006a7.27 7.27 0 0 1-3.222-6.049m6.841-3.668a.75.75 0 0 1 .872 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.983 13.264a8 8 0 0 0-.173-.886l-.034-.118-.01-.035-.004-.01v-.005l-.002-.002a.75.75 0 0 0-1.426.465l.005.016.022.077a6.004 6.004 0 0 1 .136.698c-.73-.127-1.313-.587-1.488-1.337-.232-.993.254-2.013.961-2.887.341-.42.703-.77.982-1.014l.013-.012.014.012c.278.244.64.593.981 1.014.707.874 1.193 1.894.961 2.887-.119.51-.466.904-.938 1.137M8.826 17.85v.97a3.19 3.19 0 0 0 3.18 3.18c1.75 0 3.18-1.43 3.18-3.18v-.97z"
    />
  </Svg>
);
export default IconlystLampBold;

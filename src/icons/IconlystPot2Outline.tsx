import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot2Outline = ({
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
      d="M12.094 2.8c.414 0 .75.34.75.75v.863c3.365.341 6.12 2.71 6.892 5.927H21c.414 0 .75.33.75.75 0 .41-.336.75-.75.75h-1.056q.007.17.007.34l.01 3.74v.01c0 1.33-.417 2.53-1.231 3.4-.819.88-1.983 1.37-3.348 1.37H8.629c-1.365 0-2.529-.49-3.348-1.37-.814-.87-1.23-2.07-1.23-3.4v-3.75q0-.17.007-.34H3a.753.753 0 0 1-.75-.75c0-.42.336-.75.75-.75h1.266c.785-3.275 3.629-5.672 7.078-5.944V3.55c0-.41.336-.75.75-.75M5.56 11.84a7 7 0 0 0-.01.34v3.75c0 1.02.318 1.83.829 2.38.505.54 1.255.89 2.25.89h6.753c.995 0 1.745-.35 2.25-.89.512-.55.829-1.36.829-2.38l-.01-3.75q0-.17-.009-.34zm12.62-1.5c-.794-2.615-3.248-4.47-6.179-4.47s-5.385 1.855-6.18 4.47z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPot2Outline;

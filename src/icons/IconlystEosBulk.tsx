import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEosBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.48 15.494-3.598 2.14a.04.04 0 0 1-.018.005q-.01.001-.017.005a.74.74 0 0 1-.347.096l-.001-.001h-.002a.7.7 0 0 1-.342-.094q-.01-.004-.02-.005l-.02-.006-3.597-2.14a.75.75 0 0 1-.335-.858l1.46-4.911a.2.2 0 0 1 .018-.038q.01-.014.017-.032a1 1 0 0 1 .055-.111q.007-.012.011-.024.005-.012.012-.023l2.137-2.93c.28-.386.93-.386 1.21 0l2.14 2.93q.009.012.013.026l.01.022a.6.6 0 0 1 .055.11q.006.015.016.03a.2.2 0 0 1 .019.04l1.459 4.91a.75.75 0 0 1-.335.859m-2.668-5.414L12.5 14.406l-1.312-4.326 1.31-1.798zm-.033 5.275 1.432-.852-.58-1.955zm-3.992-.852.581-1.955.852 2.808z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEosBulk;

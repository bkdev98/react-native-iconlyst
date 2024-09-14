import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoTwoTone = ({
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
      d="M19.226 19.226c-2.962 2.963-8.599 2.129-12.59-1.862S1.458 8.099 4.42 5.136c2.205-2.205 4.9-.974 7.947-.362 2.43.488 3.93.608 6.311 2.78 3.991 3.99 3.51 8.71.548 11.672"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.353 12.35c-.34.883-.67 1.287-1.707 1.706M12.793 20.6c.34-.885.67-1.288 1.706-1.708M7.33 17.47c.34-.884.67-1.288 1.708-1.707M12 9.497c.34-.884.67-1.288 1.707-1.707M8.184 9.497c-.34.884-.67 1.287-1.707 1.707M8.184 6.144c.34-.883.67-1.287 1.707-1.706M18.88 14.91c.34-.884.67-1.288 1.707-1.707"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPotatoTwoTone;

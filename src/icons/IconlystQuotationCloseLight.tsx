import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationCloseLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.064 18.838a10.5 10.5 0 0 0 3.973-5.72c.436-1.601.444-3.433-.513-4.79-.916-1.298-2.682-1.93-4.214-1.505-2.796.773-3.705 4.327-1.814 6.452a4.11 4.11 0 0 0 2.854 1.36 11.4 11.4 0 0 1-1.787 3.174q.75.516 1.501 1.03M17.244 18.838a10.5 10.5 0 0 0 3.973-5.72c.436-1.601.443-3.433-.513-4.79-.917-1.298-2.683-1.93-4.214-1.505-2.796.773-3.705 4.327-1.814 6.452a4.11 4.11 0 0 0 2.853 1.36 11.4 11.4 0 0 1-1.786 3.174q.749.516 1.501 1.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuotationCloseLight;

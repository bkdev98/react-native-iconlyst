import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalScrollPointOutline = ({
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
      fill="#141B34"
      fillRule="evenodd"
      d="M13.196 12a1.196 1.196 0 1 0-2.392 0 1.196 1.196 0 0 0 2.392 0M12 9.302a2.696 2.696 0 1 1 0 5.392 2.696 2.696 0 0 1 0-5.392M15.936 17.064a.75.75 0 0 1 0 1.06L12.53 21.53a.75.75 0 0 1-1.06 0l-3.406-3.405a.75.75 0 1 1 1.06-1.06L12 19.938l2.875-2.875a.75.75 0 0 1 1.06 0M15.936 6.936a.75.75 0 0 1-1.061 0L12 4.061 9.125 6.936a.75.75 0 0 1-1.06-1.06L11.47 2.47a.75.75 0 0 1 1.06 0l3.406 3.405a.75.75 0 0 1 0 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVerticalScrollPointOutline;

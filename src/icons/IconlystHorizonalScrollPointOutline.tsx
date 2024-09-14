import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizonalScrollPointOutline = ({
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
      d="M12 10.804a1.196 1.196 0 1 0 0 2.392 1.196 1.196 0 0 0 0-2.392M9.304 12a2.696 2.696 0 1 1 5.392 0 2.696 2.696 0 0 1-5.392 0M17.064 8.064a.75.75 0 0 1 1.061 0l3.406 3.406a.75.75 0 0 1 0 1.06l-3.406 3.406a.75.75 0 0 1-1.06-1.06L19.938 12l-2.875-2.875a.75.75 0 0 1 0-1.06M6.936 8.064a.75.75 0 0 1 0 1.061L4.06 12l2.875 2.875a.75.75 0 0 1-1.06 1.06L2.47 12.53a.75.75 0 0 1 0-1.06l3.405-3.406a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizonalScrollPointOutline;

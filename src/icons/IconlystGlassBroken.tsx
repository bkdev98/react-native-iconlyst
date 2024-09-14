import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassBroken = ({
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
      d="M4.82 5.003 6 18.016a2.55 2.55 0 0 0 1.555 2.136C8.634 20.61 10.225 21 12 21s3.367-.389 4.446-.847A2.55 2.55 0 0 0 18 18.016l.296-3.27m.296-3.271.593-6.541"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3c3.967 0 7.185.866 7.185 1.934S15.968 6.869 12 6.869c-3.969 0-7.186-.867-7.186-1.935 0-.766 1.656-1.428 4.057-1.742"
    />
  </Svg>
);
export default IconlystGlassBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAddLight = ({
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
      d="M8.696 16.955H3.329M6.012 19.64v-5.367M3 11.824V8.531c0-2.443 1.52-4.168 3.965-4.168h10.07C19.472 4.363 21 6.088 21 8.531v6.587c0 2.442-1.52 4.167-3.965 4.167h-5.412M21 9.658H3"
    />
  </Svg>
);
export default IconlystBankCarrdAddLight;

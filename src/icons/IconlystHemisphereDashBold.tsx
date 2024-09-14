import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereDashBold = ({
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
      d="M20.925 16.225a.75.75 0 0 0-.69.807c.033.418.003.984-.324 1.305l-.003.005-.002.002c-.23.22-.58.34-1.06.34-1.65 0-4.77-1.44-7.99-4.67-3.84-3.83-5.45-7.94-4.34-9.06l.004-.002c.328-.331.893-.355 1.305-.323a.75.75 0 1 0 .129-1.494c-1.328-.111-2.091.35-2.498.758l-.002.004a4 4 0 0 0-.188.207c-4.08 4.29-4.01 11.1.19 15.3 2.07 2.08 4.83 3.22 7.76 3.22 2.928 0 5.675-1.138 7.744-3.215l.003-.001.002-.003v-.001l.002-.001c.407-.403.867-1.16.764-2.49-.032-.411-.391-.704-.806-.688"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.301 14.226a.75.75 0 0 0 1.011.322.75.75 0 0 0 .322-1.01c-.67-1.298-1.626-2.677-2.764-3.988a.751.751 0 0 0-1.133.985c1.061 1.22 1.947 2.497 2.564 3.69M10.763 5.624c1.135.604 2.347 1.451 3.502 2.446a.746.746 0 0 0 1.058-.079.75.75 0 0 0-.08-1.057C14.006 5.867 12.7 4.956 11.47 4.3a.75.75 0 0 0-.707 1.324"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHemisphereDashBold;

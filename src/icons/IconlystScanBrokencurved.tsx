import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBrokencurved = ({
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
      d="M10.135 13.365H3.118M24.25 13.365h-9.699M4.664 9.285c.57-3.48 2.29-5.2 5.77-5.77M10.434 21.555c-3.48-.58-5.2-2.29-5.77-5.77v.004c-.122-.72-.19-1.53-.21-2.42M22.913 13.369c-.02.89-.09 1.7-.21 2.42l.002-.004c-.571 3.48-2.291 5.19-5.771 5.77M16.934 3.515c3.48.57 5.2 2.29 5.77 5.77"
    />
  </Svg>
);
export default IconlystScanBrokencurved;

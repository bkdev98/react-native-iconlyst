import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLightcurved = ({
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
      d="M22.582 12.8H1.45M2.996 8.72c.57-3.48 2.29-5.2 5.77-5.77M8.766 20.99c-3.48-.58-5.2-2.29-5.77-5.77l-.001.004c-.121-.72-.19-1.53-.21-2.42M21.245 12.804c-.02.89-.09 1.7-.21 2.42l.002-.004c-.572 3.48-2.291 5.19-5.771 5.77M15.266 2.95c3.48.57 5.2 2.29 5.77 5.77"
    />
  </Svg>
);
export default IconlystScanLightcurved;

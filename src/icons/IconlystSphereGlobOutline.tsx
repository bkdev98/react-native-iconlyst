import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75C17.635 2.25 22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.473 11.143C4.11 11.486 4 11.775 4 12c0 .225.11.514.473.857s.93.688 1.691.992c1.52.608 3.672 1.001 6.086 1.001s4.566-.393 6.086-1c.762-.305 1.328-.65 1.692-.993.361-.343.472-.632.472-.857s-.11-.513-.473-.856c-.363-.344-.93-.688-1.692-.993-1.52-.608-3.67-1-6.085-1s-4.566.392-6.086 1c-.762.305-1.328.65-1.691.993m1.134-2.385c1.738-.695 4.087-1.109 6.643-1.109s4.905.414 6.643 1.109c.866.346 1.618.778 2.165 1.295.549.52.942 1.177.942 1.946 0 .77-.393 1.427-.942 1.946-.547.518-1.299.95-2.165 1.296-1.738.695-4.087 1.108-6.643 1.108s-4.905-.413-6.643-1.108c-.866-.346-1.618-.778-2.165-1.296C2.893 13.426 2.5 12.77 2.5 12s.393-1.427.942-1.946c.547-.517 1.299-.949 2.165-1.295"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSphereGlobOutline;

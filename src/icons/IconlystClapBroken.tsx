import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClapBroken = ({
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
      d="M14.71 20.419a5.995 5.995 0 0 0 1.802-7.87l-1.574-2.731c-.3-.52-.965-.7-1.486-.398a1.9 1.9 0 0 0-.696 2.599l.033.057M6.132 18.54a5.99 5.99 0 0 0 5.958 2.893M5.649 11.705a1.52 1.52 0 0 0-2.048-.55 1.52 1.52 0 0 0-.55 2.048L4.84 16.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.839 13.904-3.496-6.06a1.5 1.5 0 0 0-2.597 1.498M10.244 13.672 7.081 8.195a1.495 1.495 0 0 0-2.048-.549 1.5 1.5 0 0 0-.699.91 1.5 1.5 0 0 0 .15 1.137l3.163 5.478M19.016 11.96a5.99 5.99 0 0 1-2.262 6.013M14.428 9.276a1.904 1.904 0 0 1 .879-2.17 1.09 1.09 0 0 1 1.486.4l1.427 2.149M9.604 7.033a1.502 1.502 0 0 1 .549-2.048 1.504 1.504 0 0 1 2.048.55l.59.991"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.34 7.385a1.494 1.494 0 0 1 .109-1.662 1.5 1.5 0 0 1 .993-.574 1.5 1.5 0 0 1 1.11.298c.155.119.286.269.384.439l.666 1.149M15.472 3.77l.09-1.258M18.358 4.784l.76-1.007M19.936 7.172l1.207-.367"
    />
  </Svg>
);
export default IconlystClapBroken;

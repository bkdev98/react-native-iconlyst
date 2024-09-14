import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.009 19.888a3.8 3.8 0 0 0 1.118-2.724M13.309 21h3.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.393 20.793c.362.126.748.198 1.152.206l2.282.001M4.874 16.098v1.068a3.74 3.74 0 0 0 .595 2.112M4.874 10.258v3.217M5.573 4.566a3.74 3.74 0 0 0-.7 2.092v.858M10.756 3H8.635a3.8 3.8 0 0 0-1.09.156"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.127 14.234V8.999c0-.529-.205-1.038-.572-1.42L15.764 3.63A2.05 2.05 0 0 0 14.286 3h-.598"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.063v2.892a2.56 2.56 0 0 0 2.554 2.561h2.738"
    />
  </Svg>
);
export default IconlystDocumentDashTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableControllerBroken = ({
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
      d="M20.997 17.19c.033 1.308-.188 2.737-1.517 3.278-1.251.46-2.273.226-2.947-.273-.728-.54-.807-1.2-1.854-1.785-1.046-.587-4.163-.69-5.358 0-1.195.689-1.125 1.244-1.854 1.785-.673.5-1.696.734-2.947.273-1.328-.541-1.55-1.97-1.517-3.277-.006-.296.241-7.082 3.037-8.543.574-.256 2.118-1.136 4.108.05 1.456.867 2.068 1.021 3.704 0 1.906-1.19 3.535-.306 4.11-.05 1.609.842 2.374 3.449 2.732 5.565M8.003 12.133v2.87m1.433-1.435h-2.87M14.57 13.577v-.01M16.006 15.012v-.01M17.44 13.577v-.01M16.006 12.143v-.01M8.201 3.284c0 .62.513 1.122 1.145 1.122h.884c.976.004 1.766.778 1.77 1.734v.66"
    />
  </Svg>
);
export default IconlystCableControllerBroken;

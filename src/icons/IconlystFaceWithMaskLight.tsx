import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithMaskLight = ({
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
      d="M15.23 8.705v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.77 8.705v-.052M8.724 8.5a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.787 3.004h8.432c2.947 0 4.781 2.08 4.781 5.025v7.944c0 2.945-1.834 5.025-4.782 5.025H7.787c-2.948 0-4.781-2.08-4.781-5.025V8.03c0-2.945 1.842-5.025 4.78-5.025"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.263 20.912-.834-6.436L3 12.344M16.724 20.914l.865-6.437 3.408-2.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.43 14.477c1.099-.284 2.52-.73 4.253-1.507a3.51 3.51 0 0 1 2.834 0c1.639.73 2.993 1.213 4.073 1.507"
    />
  </Svg>
);
export default IconlystFaceWithMaskLight;

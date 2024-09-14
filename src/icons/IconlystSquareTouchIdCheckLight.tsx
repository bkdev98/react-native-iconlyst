import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCheckLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.957 14.934V8.961c0-2.931-1.826-5.002-4.76-5.002H7.803c-2.926 0-4.76 2.071-4.76 5.002v7.91c0 2.931 1.826 5.002 4.76 5.002h4.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.037 10.735a4.557 4.557 0 0 1 5.72-1.956M15.727 10.361c.524.742.832 1.647.832 2.625v2.802M7.445 16.37V13.55M13.756 17.404v-4.252a1.795 1.795 0 1 0-3.59 0v.48M10.166 17.402v-1.615M15.201 20.363l1.597 1.598 3.994-3.994"
    />
  </Svg>
);
export default IconlystSquareTouchIdCheckLight;

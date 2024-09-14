import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCheckBroken = ({
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
      d="M12.573 20.914h-4.52c-2.934 0-4.76-2.071-4.76-5.002v-3.955M21.207 13.975V8.002C21.207 5.071 19.38 3 16.447 3H8.053c-2.926 0-4.76 2.071-4.76 5.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.287 9.776a4.557 4.557 0 0 1 5.72-1.956M15.977 9.402c.524.742.832 1.647.832 2.625v2.802M7.695 15.412V12.59M14.006 16.445v-4.252a1.795 1.795 0 1 0-3.59 0v.48M10.416 16.443v-1.615M15.451 19.404l1.597 1.598 3.994-3.994"
    />
  </Svg>
);
export default IconlystSquareTouchIdCheckBroken;

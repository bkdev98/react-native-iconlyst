import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillUpOutline = ({
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
      d="M11.553 21.283a.75.75 0 0 1-.978.41l-2.174-.886a1.06 1.06 0 0 0-.859.023l-.77.37a1.97 1.97 0 0 1-2.822-1.78l.01-12.438c0-1.363.381-2.562 1.195-3.427.82-.87 1.991-1.305 3.377-1.305h7.408c1.39 0 2.557.436 3.372 1.309.807.865 1.178 2.064 1.178 3.423v4.291a.75.75 0 0 1-1.5 0v-4.29c0-1.098-.298-1.891-.775-2.403-.31-.334-.736-.588-1.3-.723a4 4 0 0 0-.975-.107H8.532c-1.068 0-1.808.326-2.286.834-.483.514-.786 1.305-.786 2.4l-.01 12.438c0 .346.361.574.674.424l.772-.37a2.56 2.56 0 0 1 2.072-.058l2.174.887a.754.754 0 0 1 .411.978"
    />
    <Path
      fill={props.color}
      d="M15.076 9.043a.75.75 0 0 1-.75.75H9.358a.75.75 0 1 1 0-1.5h4.968a.746.746 0 0 1 .75.75M13.42 12.902a.75.75 0 0 1-.75.75H9.358a.75.75 0 1 1 0-1.5h3.312a.75.75 0 0 1 .75.75M17.324 14.11c.2 0 .39.08.531.22l2.415 2.426a.749.749 0 1 1-1.062 1.058l-1.134-1.138V21a.75.75 0 0 1-1.5 0v-4.324l-1.134 1.139a.75.75 0 0 1-1.063-1.06l2.415-2.425c.141-.14.332-.22.532-.22"
    />
  </Svg>
);
export default IconlystReceiptBillUpOutline;

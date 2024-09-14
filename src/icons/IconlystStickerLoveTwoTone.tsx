import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerLoveTwoTone = ({
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
      d="M16.351 20.256a2.42 2.42 0 0 1-1.745.744H8.282C5.342 21 3.5 18.919 3.5 15.974V8.026C3.5 5.08 5.334 3 8.282 3h8.434c2.95 0 4.784 2.08 4.784 5.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.736 9.441c.317-.992-.054-2.126-1.096-2.462a1.78 1.78 0 0 0-1.608.27 1.8 1.8 0 0 0-1.606-.27c-1.042.336-1.415 1.47-1.097 2.462.494 1.573 2.703 2.785 2.703 2.785s2.192-1.194 2.704-2.785"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerLoveTwoTone;

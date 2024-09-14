import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerLoveLight = ({
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
      d="M15.851 20.256a2.42 2.42 0 0 1-1.746.744H7.782C4.842 21 3 18.919 3 15.974V8.026C3 5.08 4.834 3 7.782 3h8.434C19.166 3 21 5.08 21 8.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.236 9.441c.317-.992-.054-2.126-1.096-2.462a1.78 1.78 0 0 0-1.608.27 1.8 1.8 0 0 0-1.606-.27c-1.042.336-1.415 1.47-1.097 2.462.494 1.573 2.703 2.785 2.703 2.785s2.192-1.194 2.704-2.785"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerLoveLight;
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsBroken = ({
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
      d="M17.937 15.104c-.93.407-2.025.4-2.763-.393a2.67 2.67 0 0 1-.683-1.614c-.03-.511.098-1.039.399-1.45a1.94 1.94 0 0 1 1.511-.797 1.9 1.9 0 0 1 1.31.5c.352.322.587.776.65 1.262.012.091.018.31.018.31a.19.19 0 0 1-.187.195H14.49M12.63 15.35 9.875 8.658 7.123 15.35M8.107 12.957h3.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.749 21H8.532c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.75 5.081 5.593 3 8.532 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.567"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsBroken;

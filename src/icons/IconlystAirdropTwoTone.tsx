import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirdropTwoTone = ({
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
      d="m13.794 13.673 4.758-4.115c.524-.36.818-.99.722-1.619a7.007 7.007 0 0 0-13.85 0c-.096.63.198 1.259.723 1.619l4.749 4.127"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.35 13.161V9.007m6.646 0H5.697"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 13.682 5.172-.01c1.505-.003 2.443 1.057 2.447 2.56l.01 3.187c.004 1.503-.93 2.568-2.435 2.571L9.77 22c-1.505.004-2.444-1.056-2.448-2.559l-.009-3.187c-.004-1.504.935-2.568 2.435-2.572"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.195 16.688h2.303"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirdropTwoTone;
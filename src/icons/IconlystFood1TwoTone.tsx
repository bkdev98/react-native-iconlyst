import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood1TwoTone = ({
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
      d="M19.676 18.613H5.324a1.87 1.87 0 0 1-1.772-1.276 1.002 1.002 0 0 1 .95-1.32h15.995c.684 0 1.167.67.95 1.32a1.87 1.87 0 0 1-1.77 1.276"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.764 16.016-.041-.828C4.5 10.74 8.047 7.012 12.5 7.012m0 0c4.453 0 8 3.728 7.778 8.176l-.041.828M12.5 7.012 12.5 5.387"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFood1TwoTone;

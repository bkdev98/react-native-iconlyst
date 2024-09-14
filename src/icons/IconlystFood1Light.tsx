import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood1Light = ({
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
      d="M19.176 18.613H4.824a1.87 1.87 0 0 1-1.772-1.276 1.002 1.002 0 0 1 .95-1.32h15.995c.684 0 1.167.67.95 1.32a1.87 1.87 0 0 1-1.77 1.276"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.264 16.016-.041-.828C4 10.74 7.547 7.012 12 7.012s8 3.728 7.778 8.176l-.041.828M12 7.012V5.387"
    />
  </Svg>
);
export default IconlystFood1Light;

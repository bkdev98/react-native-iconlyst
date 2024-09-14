import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowmanTwoTone = ({
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
      d="m18.05 16.692 2.213-1.908M8.134 16.692 5.92 14.784"
    />
    <Circle
      cx={13.093}
      cy={9.669}
      r={3.934}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-180 13.093 9.669)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.476 12.821a4.96 4.96 0 0 1 2.576 4.35 4.96 4.96 0 0 1-2.576 4.35c-1.645.816-3.209.768-4.767 0a4.96 4.96 0 0 1-2.575-4.35 4.96 4.96 0 0 1 2.575-4.35M9.085 9.993l-1.562-3.8c-.099-.24-.163-.5-.095-.751.362-1.317 2.43-2.6 3.545-2.276.121.035.227.108.327.186l3.388 2.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.308 16.216v.012M13.308 18.681v.012M10.231 12.727l-1.573-.715a2.73 2.73 0 0 0-2.418.079 2.73 2.73 0 0 1-2.413.082l-.089-.04M9.16 10.415c-1.151-.856-2.268-.963-3.586-.514M12.16 8.569h-.01M14.47 8.569h-.01M13.406 10.293l.85.476"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.917 22.115H7.265"
    />
  </Svg>
);
export default IconlystSnowmanTwoTone;
